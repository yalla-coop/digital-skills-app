import Boom from '@hapi/boom';
import * as User from '../model';
import * as Organisation from '../../organisations/model';
import * as Skills from '../../skills/model';
import * as SkillAreas from '../../skill-areas/model';
import { hashPassword } from '../../../helpers';
import { errorMsgs } from '../../../services/error-handler';
import { validateSignup } from '../utils';
import {
  skillAreasCodes,
  skillStatuses,
  learningPaths,
} from '../../../constants/data-types';

import { getClient } from '../../../database/connect';

const volunteerSignup = async ({
  email,
  password,
  fullName,
  postcode,
  role,
  organisations,
  selectedPath,
  assessmentScore,
  skillsUserHas,
  skillAreas,
}) => {
  const client = await getClient();

  try {
    await client.query('BEGIN');

    await validateSignup({
      email,
      password,
      fullName,
      postcode,
      role,
      organisations,
      selectedPath,
      assessmentScore,
    });

    const userWithSameEmail = await User.findUserByEmail(email);
    if (userWithSameEmail) {
      throw Boom.conflict(errorMsgs.EMAIL_ALREADY_USED, { field: 'email' });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.createUser(
      {
        email,
        password: hashedPassword,
        fullName,
        postcode,
        role,
        selectedPath,
        assessmentScore,
      },
      client,
    );

    await Organisation.createVolunteerOrganisations(
      {
        organisationsId: organisations,
        volunteerId: user.id,
      },
      client,
    );

    // if completed assessment then store this info
    if (selectedPath) {
      // store users skill areas
      for (let i = 0; i < skillAreas.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await User.createUserSkillArea(
          {
            userId: user.id,
            skillAreaId: skillAreas[i].id,
          },
          client,
        );
      }
      // if user was in basic flow then add basics area too
      if (selectedPath === learningPaths.BASIC) {
        const basicArea = await SkillAreas.findSkillAreaByCode(
          skillAreasCodes.BASICS,
        );
        await User.createUserSkillArea(
          {
            userId: user.id,
            skillAreaId: basicArea[0].id,
          },
          client,
        );
      }

      // store skills user already has
      const skillIds = await Skills.findSkillsByCodes(skillsUserHas);
      for (let i = 0; i < skillIds.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        await User.createUserSkill(
          {
            userId: user.id,
            skillId: skillIds[i].id,
            status: skillStatuses.ALREADY_HAS,
          },
          client,
        );
      }
    }

    await client.query('COMMIT');
    return user;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default volunteerSignup;

import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import volunteersOrganisations from './volunteers-organisations';
import createSkillAreas from './skill-areas';
import createSkills from './skills';
import createSkillsAreasSkills from './skills-areas-skills';
import createActivities from './activities';
import createUsersCompletedActivities from './users-completed-activities';
import createUsersSkillAreas from './users-skill-areas';
import createActivitiesSkills from './activities-skills';
import createUsersSkills from './users-skills';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.organisations = await createOrganisations(createdData);
  createdData.users = await createUsers(createdData);
  await volunteersOrganisations(createdData);
  createdData.skillAreas = await createSkillAreas(createdData);
  createdData.skills = await createSkills(createdData);
  await createSkillsAreasSkills(createdData);
  createdData.activities = await createActivities(createdData);
  createdData.activities = await createActivities(createdData);
  await createUsersCompletedActivities(createdData);
  await createUsersSkillAreas(createdData);
  await createActivitiesSkills(createdData);
  await createUsersSkills(createdData);

  return createdData;
};

export default buildData;

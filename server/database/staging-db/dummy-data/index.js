import dotenv from 'dotenv';
import createUsers from './users';
import createOrganisations from './organisations';
import createSkillAreas from './skill-areas';
import createSkills from './skills';
import createSkillsAreasSkills from './skill-areas-skills';
import createActivities from './activities';
import createActivitiesSkills from './activities-skills';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const buildData = async () => {
  const createdData = {};
  createdData.organisations = await createOrganisations(createdData);
  createdData.users = await createUsers(createdData);
  createdData.skillAreas = await createSkillAreas(createdData);
  createdData.skills = await createSkills(createdData);
  await createSkillsAreasSkills(createdData);
  createdData.activities = await createActivities(createdData);
  await createActivitiesSkills(createdData);

  return createdData;
};

export default buildData;

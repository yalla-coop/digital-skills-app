import {
  User,
  Activities,
  ActivitiesSkills,
  Organisation,
  VolunteersOrganisation,
  SkillAreas,
  Skills,
  SkillAreasSkills,
  UsersCheckIns,
  UsersCompletedActivities,
  UsersSkillAreas,
  UsersSkills,
} from '../models';
import init from '../init';

import buildData from './dummy-data';

// development data build
const build = async () => {
  await init.createTypes();
  await init.createAutoTimestamps();
  await init.buildMigrations();
  await Organisation.createTable();
  await User.createTable();
  await VolunteersOrganisation.createTable();
  await Activities.createTable();
  await UsersCompletedActivities.createTable();
  await Skills.createTable();
  await UsersSkills.createTable();
  await SkillAreas.createTable();
  await SkillAreasSkills.createTable();
  await UsersSkillAreas.createTable();
  await ActivitiesSkills.createTable();
  await UsersCheckIns.createTable();
  // build dummy data
  const createdData = await buildData();
  return createdData;
};

export default build;

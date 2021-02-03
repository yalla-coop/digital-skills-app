import * as Activity from '../model';
import { createActivity as createActivityValidation } from '../utils';
import { getClient } from '../../../database/connect';

const createActivity = async ({
  skills,
  title,
  description,
  difficulty,
  completionTime,
  resourceLink,
  resourceCreatedBy,
  userId,
}) => {
  const client = await getClient();
  createActivityValidation({
    skills,
    title,
    description,
    difficulty,
    completionTime,
    resourceLink,
    resourceCreatedBy,
    userId,
  });
  try {
    await client.query('BEGIN');

    const activity = await Activity.createActivity(
      {
        title,
        description,
        difficulty,
        completionTime,
        resourceLink,
        resourceCreatedBy,
        createdBy: userId,
      },
      client,
    );

    await Activity.createActivitySkills(
      { activityId: activity.id, skillsId: skills },
      client,
    );

    await client.query('COMMIT');
    return activity;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};
export default createActivity;

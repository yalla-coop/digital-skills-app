import * as Activity from '../model';
import { updateActivity as updateActivityValidation } from '../utils';
import { getClient } from '../../../database/connect';

const updateActivity = async ({
  id,
  skills,
  title,
  description,
  difficulty,
  completionTime,
  resourceLink,
  resourceCreatedBy,
}) => {
  const client = await getClient();
  updateActivityValidation({
    id,
    skills,
    title,
    description,
    difficulty,
    completionTime,
    resourceLink,
    resourceCreatedBy,
  });
  try {
    await client.query('BEGIN');

    const activity = await Activity.updateActivity(
      {
        id,
        title,
        description,
        difficulty,
        completionTime,
        resourceLink,
        resourceCreatedBy,
      },
      client,
    );

    await Activity.deleteActivitySkills({ activityId: id }, client);

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
export default updateActivity;

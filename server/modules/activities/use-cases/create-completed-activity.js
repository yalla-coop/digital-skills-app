import * as Activity from '../model';
import * as Skill from '../../skills/model';
import * as User from '../../users/model';
import { getClient } from '../../../database/connect';

const createCompletedActivity = async ({ activityId, userId }) => {
  const stats = await Activity.findCompletedActivityStats({
    activityId,
    userId,
  });

  const {
    assessmentScore,
    improvementScore,
    remainingActivities,
    relatedSkills,
  } = stats;

  const remainingScore = 100 - assessmentScore - improvementScore;
  const activityScore = remainingScore / Number(remainingActivities);
  const addedScore = activityScore * relatedSkills.length;

  const client = await getClient();
  try {
    // add/update users_skills
    const promises = relatedSkills.map((skill) => {
      const isCompleted = skill.activities.reduce((acc, curr) => {
        if (!curr.activityCompletedId && curr.activityId !== activityId)
          return false;
        return acc;
      }, true);

      return Skill.upsertUserSkills(
        { userId, skillId: skill.id, isCompleted, addedScore: activityScore },
        client,
      );
    });

    if (addedScore) {
      // update improvement_score
      promises.push(
        User.updateUserImprovementScore({ userId, addedScore }, client),
      );
    }

    // createCompletedActivity
    promises.push(
      Activity.createCompletedActivity(
        {
          activityId,
          userId,
          addedScore,
        },
        client,
      ),
    );

    const results = await Promise.all(promises);
    await client.query('COMMIT');
    return results[results.length - 1];
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

export default createCompletedActivity;

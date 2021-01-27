import * as Skill from '../model';

const getPerc = (n, total) => Math.round((n / total) * 100);
const getHQSkillProgress = async (user) => {
  const { organisation } = user;
  const results = await Skill.findHQSkillProgress(organisation);

  const {
    volunteers,
    volunteersCompletedASkill: vcs,
    volunteersCompletedAnActivity: vca,
    completedSkills,
    completedActivities,
  } = results;

  return {
    volunteersCompletedASkillPerc: getPerc(vcs, volunteers),
    volunteersCompletedAnActivityPerc: getPerc(vca, volunteers),
    completedSkills,
    completedActivities,
  };
};

export default getHQSkillProgress;

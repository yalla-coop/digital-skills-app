import * as Volunteers from '../model';

const getPerc = (n, total) => Math.round((n / total) * 100);
const getVolunteersStats = async (user) => {
  const { organisation } = user;
  const results = await Volunteers.findVolunteersStats(organisation);

  const {
    volunteers,
    volunteersCompletedAssessment,
    volunteersUsedASkill: vus,
    volunteersCompletedASkill: vcs,
    volunteersFeelConfident: vfc,
  } = results;

  return {
    volunteersCompletedAssessment,
    volunteersUsedASkillPerc: getPerc(vus, volunteers),
    volunteersCompletedASkillPerc: getPerc(vcs, volunteers),
    volunteersFeelConfidentPerc: getPerc(vfc, volunteers),
  };
};

export default getVolunteersStats;

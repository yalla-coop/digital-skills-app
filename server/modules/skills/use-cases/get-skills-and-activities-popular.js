import * as Skill from '../model';
import * as Activity from '../../activities/model';

const getPopularSkillsAndActivities = async () => {
  const skills = await Skill.getPopularSkills();
  const activities = await Activity.getPopularActivities();
  return [...activities, ...skills].sort(
    (a, b) => Number(b.popularity) - Number(a.popularity),
  );
};

export default getPopularSkillsAndActivities;

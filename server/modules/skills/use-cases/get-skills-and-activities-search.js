import * as Skill from '../model';

const getSkillsAndActivitiesSearch = ({ task, tool }) => {
  return Skill.findSkillAndActivitiesForSearch({ task, tool });
};

export default getSkillsAndActivitiesSearch;

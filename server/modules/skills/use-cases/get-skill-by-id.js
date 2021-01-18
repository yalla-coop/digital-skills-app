import * as Skill from '../model';

const getSkillById = ({ id }) => {
  return Skill.findSkillById(id);
};

export default getSkillById;

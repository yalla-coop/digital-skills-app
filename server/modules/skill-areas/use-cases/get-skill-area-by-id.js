import * as SkillAreas from '../model';

async function getSkillAreaById(id) {
  return SkillAreas.findSkillAreaById(id);
}

export default getSkillAreaById;

import * as SkillAreas from '../model';

async function getSkillAreas() {
  return SkillAreas.findSkillAreas();
}

export default getSkillAreas;

import * as SkillAreas from '../model';

async function getHQSkillAreas() {
  return SkillAreas.findHQSkillAreas();
}

export default getHQSkillAreas;

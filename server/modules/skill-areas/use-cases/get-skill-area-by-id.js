import Boom from '@hapi/boom';
import * as SkillAreas from '../model';

async function getSkillAreaById(id) {
  const skillArea = await SkillAreas.findSkillAreaById(id);
  if (!skillArea) throw Boom.notFound();
  return skillArea;
}

export default getSkillAreaById;

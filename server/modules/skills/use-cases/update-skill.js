import * as Skill from '../model';
import { validateEditSkill } from '../utils';

const updateSkill = async ({ id, title, description, tasks }) => {
  await validateEditSkill({
    title,
    description,
    task1: tasks && tasks[0],
    task2: tasks && tasks[1],
    task3: tasks && tasks[2],
  });

  return Skill.updateSkill({ id, title, description, tasks });
};

export default updateSkill;

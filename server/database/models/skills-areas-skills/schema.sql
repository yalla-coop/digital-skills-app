DROP TABLE IF EXISTS "skills_areas_skills" CASCADE;

CREATE TABLE "skills_areas_skills" (
  "id" SERIAL PRIMARY KEY,
  "skill_area" INTEGER REFERENCES skill_areas(id),
  "skill" INTEGER REFERENCES skills(id),
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skills_areas_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
DROP TABLE IF EXISTS "skill_areas_skills" CASCADE;

CREATE TABLE "skill_areas_skills" (
  "id" SERIAL PRIMARY KEY,
  "skill_area" INTEGER REFERENCES skill_areas(id),
  "skill" INTEGER REFERENCES skills(id),
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skill_areas_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
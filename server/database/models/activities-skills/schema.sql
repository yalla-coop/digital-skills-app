DROP TABLE IF EXISTS "activities_skills" CASCADE;

CREATE TABLE "activities_skills" (
  "id" SERIAL PRIMARY KEY,
  "skill" INTEGER REFERENCES skills(id) NOT NULL,
  "activity" INTEGER REFERENCES activities(id) NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "activities_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
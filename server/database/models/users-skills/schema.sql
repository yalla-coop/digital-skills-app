DROP TABLE IF EXISTS "users_skills" CASCADE;

CREATE TABLE "users_skills" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id) NOT NULL,
  "skill" INTEGER REFERENCES skills(id) NOT NULL,
  "status" skills_statuses NOT NULL,
  "added_score" REAL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
DROP TABLE IF EXISTS "users_check_ins" CASCADE;

CREATE TABLE "users_check_ins" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id),
  "used_skills" INTEGER[], -- ids of skills
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_check_ins"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
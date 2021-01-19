DROP TABLE IF EXISTS "users_skill_areas" CASCADE;

CREATE TABLE "users_skill_areas" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id) NOT NULL,
  "skill_area" INTEGER REFERENCES skill_areas(id) NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_skill_areas"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
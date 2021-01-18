DROP TABLE IF EXISTS "users_completed_activities" CASCADE;

CREATE TABLE "users_completed_activities" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id),
  "activity" INTEGER REFERENCES activities(id), -- could be reference to activities_skills
  "added_score" INTEGER, -- 12.77% => 1277
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_completed_activities"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
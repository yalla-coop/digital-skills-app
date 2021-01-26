DROP TABLE IF EXISTS "users_completed_activities" CASCADE;

CREATE TABLE "users_completed_activities" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id) NOT NULL,
  "activity" INTEGER REFERENCES activities(id) NOT NULL, -- could be reference to activities_skills
  "added_score" REAL,
  "confidence_score" INTEGER
    CHECK(confidence_score >= 1 AND confidence_score <= 3),
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_completed_activities"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
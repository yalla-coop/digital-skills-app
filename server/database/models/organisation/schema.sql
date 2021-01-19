DROP TABLE IF EXISTS "organisations" CASCADE;

CREATE TABLE "organisations" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "organisations"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
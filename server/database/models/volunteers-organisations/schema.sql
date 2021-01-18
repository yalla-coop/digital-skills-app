DROP TABLE IF EXISTS "volunteers_organisations" CASCADE;

CREATE TABLE "volunteers_organisations" (
  "id" SERIAL PRIMARY KEY,
  "organisation" INTEGER REFERENCES organisations(id),
  "volunteer" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "volunteers_organisations"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
DROP TABLE IF EXISTS "activities" CASCADE;

DROP TRIGGER IF EXISTS activities_tsvector_update 
  ON activities CASCADE;

CREATE TABLE "activities" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "difficulty" INTEGER NOT NULL,
  "completion_time" INTEGER NOT NULL,
  "description" TEXT NOT NULL,
  "resource_link" TEXT NOT NULL,
  "resource_created_by" VARCHAR NOT NULL,
  "created_by" INTEGER REFERENCES users(id),
  "document" TSVECTOR,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "activities"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


CREATE OR REPLACE FUNCTION activities_tsvector_trigger() RETURNS trigger AS $$
begin
  new.document :=
    setweight(to_tsvector(COALESCE(new.title, '')), 'A') ||
    setweight(to_tsvector(COALESCE(new.description, '')), 'B');
  return new;
end
$$ LANGUAGE plpgsql;

CREATE INDEX activities_document_idx
  ON activities
  USING GIN (document);

CREATE TRIGGER activities_tsvector_update BEFORE INSERT OR UPDATE
    ON activities FOR EACH ROW EXECUTE PROCEDURE activities_tsvector_trigger();

DROP TYPE IF EXISTS users_roles CASCADE;
DROP TYPE IF EXISTS learning_paths CASCADE;
DROP TYPE IF EXISTS skills_statuses CASCADE;

CREATE TYPE "users_roles" AS ENUM (
  'VOLUNTEER',
  'HQ'
);

CREATE TYPE "learning_paths" AS ENUM (
  'BASIC',
  'IMPROVE'
);

CREATE TYPE "skills_statuses" AS ENUM (
  'ALREADY_HAS',
  'COMPLETED',
  'IN_PROGRESS'
);
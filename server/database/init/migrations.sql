DROP TABLE IF EXISTS "migrations" CASCADE;

CREATE TABLE "migrations" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"run_on" timestamp NOT NULL DEFAULT NOW()
);

INSERT INTO "migrations" ("name") VALUES 
  ('/20200910144347-add-administrators'),
  ('/20200910171853-add-programme-managers'),
  ('/20200910180445-add-welsh-content'),
  ('/20200910185023-add-over-16-to-members-profiles'),
  ('/20200915134430-update-staff-invitations'),
  ('/20200928081848-add-null-actvity-name-eap'),
  ('/20200922150402-update-ethnic-options'),
  ('/20201009123630-default-isOnline-field-to-false-spend-activity'),
  ('/20201123192656-add-cost-varies-spend-activities'),
  ('/20201124144144-update-nation'),
  ('/20201124163908-add-keywords-field-for-listings'),
  ('/20201130103802-update-activities-roles-datatype-in-earn-groups-profiles'),
  ('/20201130114159-add-geocodes-fields-for-listings'),
  ('/20201130134059-add-document-column-on-searchable-listings')

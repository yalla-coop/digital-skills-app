import { query } from '../connect';

const createActivity = async (values) => {
  const sql = `
    INSERT INTO activities(
      title,
      difficulty,
      completion_time,
      description,
      resource_link,
      resource_created_by,
      created_by
    ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
      )
    RETURNING *`;
  const res = await query(sql, [
    values.title,
    values.difficulty,
    values.completionTime,
    values.description,
    values.resourceLink,
    values.resourceCreatedBy,
    values.createdBy,
  ]);
  return res.rows[0];
};

const createActivities = async (data) => {
  const {
    users: { KristaForster },
  } = data;

  const activities = [
    {
      title: 'Using Microsoft Word',
      difficulty: 1,
      completionTime: 5,
      description: `
      Microsoft Word is often the first jumping off point for many computer applications classes.
      Rather than spend hours creating your own Microsoft Word lesson plans and activities, wouldn’t you like some that you can just integrate into your existing curriculum?
      `,
      resourceLink:
        'https://blog.aeseducation.com/2015/03/microsoft-word-lesson-plans/',
      resourceCreatedBy: 'GCF Global',
      createdBy: KristaForster.id,
    },
    {
      title: 'Using Outlook Express',
      difficulty: 2,
      completionTime: 5,
      description: `
      Microsoft Word is often the first jumping off point for many computer applications classes.
      Rather than spend hours creating your own Microsoft Word lesson plans and activities, wouldn’t you like some that you can just integrate into your existing curriculum?
      `,
      resourceLink:
        'https://blog.aeseducation.com/2015/03/microsoft-word-lesson-plans/',
      resourceCreatedBy: 'GCF Global',
      createdBy: KristaForster.id,
    },
  ];

  const microsoftWordActivity = await createActivity(activities[0]);
  const outlookExpress = await createActivity(activities[1]);

  return {
    microsoftWordActivity,
    outlookExpress,
  };
};

export default createActivities;

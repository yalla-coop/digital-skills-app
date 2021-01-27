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
      title: 'Andriod Device',
      resourceLink:
        'https://support.google.com/googleplay/answer/113412?hl=en-GB',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 78,
    },
    {
      title: 'Beyond email (title tbc)',
      resourceLink: 'https://edu.gcfglobal.org/en/beyondemail',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 106,
    },
    {
      title: 'Choosing a Strong Password',
      resourceLink:
        'https://www.learnmyway.com/courses/keeping-your-personal-data-safe/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 2,
    },
    {
      title: 'Choosing your platform',
      resourceLink:
        'https://www.cnet.com/how-to/onedrive-dropbox-google-drive-and-box-which-cloud-storage-service-is-right-for-you/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 68,
    },
    {
      title: 'Clickbait',
      resourceLink: 'https://edu.gcfglobal.org/en/thenow/what-is-clickbait/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 83,
    },
    {
      title: 'Content for the web',
      resourceLink:
        'https://makeitclick.learnmyway.com/directory/subjects/documents/how-to-write-and-format-text-in-microsoft-word',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 6,
    },
    {
      title: 'Creating Documents',
      resourceLink: 'https://www.learnmyway.com/courses/creating-documents/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 64,
    },
    {
      title: 'Creating Spreadsheets',
      resourceLink: 'https://www.learnmyway.com/courses/creating-spreadsheets/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 42,
    },
    {
      title: 'Digital cameras (title tbc)',
      resourceLink:
        'https://www.learnmyway.com/courses/using-a-digital-camera/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 43,
    },
    {
      title: 'Digital Champion',
      resourceLink:
        'https://www.digitalunite.com/news-reviews/delivering-digital-champion-success',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 103,
    },
    {
      title: 'Digital Unite (title tbc)',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/internet-security/identity-theft-online-safety/how-stay-safe-online',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 119,
    },
    {
      title: 'Dropbox - How to use Dropbox',
      resourceLink:
        'https://help.dropbox.com/guide/individual/how-to-use-dropbox#welcome-to-dropbox',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 26,
    },
    {
      title: 'Dropbox - Sharing on Dropbox',
      resourceLink: 'https://help.dropbox.com/files-folders/share',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 111,
    },
    {
      title: 'Emailing Multiple Recipients',
      resourceLink:
        'https://www.lifewire.com/sending-an-email-to-multiple-recipients-cc-and-bcc-1171178',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 17,
    },
    {
      title: 'Example 1 (title tbc)',
      resourceLink:
        'https://careers.workopolis.com/advice/6-people-who-were-fired-for-social-media-posts/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 108,
    },
    {
      title: 'Example 2 (title tbc)',
      resourceLink:
        'https://www.makeuseof.com/tag/9-things-never-share-social-media/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 2,
    },
    {
      title: 'Freezing computer',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/my-computer-keeps-freezing-help',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 95,
    },
    {
      title: 'GCF Global (title tbc)',
      resourceLink: 'https://edu.gcfglobal.org/en/beyondemail',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 86,
    },
    {
      title: 'Get people chatting online',
      resourceLink: 'https://www.learnmyway.com/courses/video-calling/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 14,
    },
    {
      title: 'Girlguide training (title tbc)',
      resourceLink:
        'https://training.girlguiding.org.uk/keep-data-safe/#/page/5ba3529f8b683053aa624498',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 23,
    },
    {
      title: 'Google Drive - Drive Cheat Sheet',
      resourceLink: 'https://support.google.com/a/users/answer/9300017',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 53,
    },
    {
      title: 'Google Drive - G-Suite Learning Center',
      resourceLink: 'https://support.google.com/a/users#topic=9393003',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 91,
    },
    {
      title: 'Government advice',
      resourceLink:
        'https://gds.blog.gov.uk/2014/03/02/report-a-misleading-website-to-search-engines/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 113,
    },
    {
      title: 'How to backup data on the cloud',
      resourceLink:
        'https://www.learnmyway.com/courses/keeping-your-device-safe/?utm_source=skillsfortomorrow&utm_medium=website&utm_campaign=bt',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 82,
    },
    {
      title: 'iPhone, iPad or iPod device',
      resourceLink: 'https://support.apple.com/en-gb/HT202180',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 17,
    },
    {
      title: 'Keeping Yourself Safe',
      resourceLink:
        'https://www.learnmyway.com/courses/keeping-your-personal-data-safe/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 90,
    },
    {
      title: 'LearnMyWay (title tbc)',
      resourceLink: 'https://edu.gcfglobal.org/en/word2016/formatting-text/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 119,
    },
    {
      title: 'Microsoft Office Excel',
      resourceLink:
        'https://edu.gcfglobal.org/en/excel2003/create-open-and-save-workbooks/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 52,
    },
    {
      title: 'Microsoft Office Word',
      resourceLink:
        'https://makeitclick.learnmyway.com/directory/subjects/documents/how-to-write-and-format-text-in-microsoft-word',
      description: 'some readable description.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 53,
    },
    {
      title: "NSPCC's expertise (title tbc)",
      resourceLink: 'https://www.net-aware.org.uk/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 115,
    },
    {
      title: 'OneDrive - OneDrive on your PC',
      resourceLink:
        'https://support.microsoft.com/en-gb/help/17184/windows-10-onedrive',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 43,
    },
    {
      title: 'OneDrive - OneDrive Video Training',
      resourceLink:
        'https://support.microsoft.com/en-us/office/onedrive-video-training-1f608184-b7e6-43ca-8753-2ff679203132',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 74,
    },
    {
      title: 'Our Advice',
      resourceLink:
        'https://prep.scouts.org.uk/digital-transformation/digital-skills/data-and-documents/scouts.org.uk/gdpr',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 56,
    },
    {
      title: 'Photo editing basics',
      resourceLink:
        'https://www.rei.com/learn/expert-advice/photo-editing-basics.html',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 65,
    },
    {
      title: 'Photo editing for beginners',
      resourceLink:
        'https://www.gapyear.com/articles/travel-tips/cormac-scanlans-guide-to-photo-editing-for-beginners',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 59,
    },
    {
      title: 'Public and private spaces (title tbc)',
      resourceLink:
        'https://www.greenmellenmedia.com/public-vs-private-social-media/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 23,
    },
    {
      title: 'Report on FaceBook',
      resourceLink: 'https://www.facebook.com/help/212722115425932/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 10,
    },
    {
      title: 'Resource Techniques (title tbc)',
      resourceLink:
        'https://www.resourcetechniques.co.uk/news/web-design/types-of-modern-communication-100244',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 119,
    },
    {
      title: 'Saving Files',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/how-back-your-computer-and-restore-files-back',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 74,
    },
    {
      title: 'Schedule a Zoom meeting',
      resourceLink:
        'https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 1,
    },
    {
      title: 'Scout Guidance',
      resourceLink:
        'https://prep.scouts.org.uk/volunteers/scouts-at-home/taking-scouts-online/staying-safe-online/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 79,
    },
    {
      title: 'Searching Better',
      resourceLink: 'https://edu.gcfglobal.org/en/search-better-2018/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 100,
    },
    {
      title: 'Shaping the internet (title tbc)',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/how-ads-and-clicks-shape-the-internet/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 11,
    },
    {
      title: 'Signpost Digital Skills',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/hobbies-interests/activities-interests/how-signpost-residents-digital-skills',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 78,
    },
    {
      title: 'Slow Computer',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/why-my-computer-so-slow',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 38,
    },
    {
      title: 'Social networking (title tbc)',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/social-networking-blogs',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 114,
    },
    {
      title: 'Sponsored Content',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/what-is-sponsored-content/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 21,
    },
    {
      title: 'Taking photos',
      resourceLink: 'https://edu.gcfglobal.org/en/digitalphotography/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 60,
    },
    {
      title: 'Targeted Advertising',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/what-is-targeted-advertising/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 3,
      resourceCreatedBy: 'GCF Global',
      completionTime: 68,
    },
    {
      title: 'Transferring photos',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/digital-photography',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 59,
    },
    {
      title: 'Troubleshooting',
      resourceLink:
        'https://edu.gcfglobal.org/en/computerbasics/basic-troubleshooting-techniques/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 37,
    },
    {
      title: 'Understanding file extensions',
      resourceLink:
        'https://edu.gcfglobal.org/en/basic-computer-skills/understanding-file-extensions/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 38,
    },
    {
      title: 'Update your Andriod Device',
      resourceLink:
        'https://prep.scouts.org.uk/digital-transformation/digital-skills/the-basics/%E2%80%9Dhttps://support.google.com/android/answer/7680439?hl=en-GB%22',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 63,
    },
    {
      title: 'Update your iPhone, iPad or iPod',
      resourceLink:
        'https://prep.scouts.org.uk/digital-transformation/digital-skills/the-basics/%E2%80%9Dhttps://support.apple.com/en-gb/HT204204s%22',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 57,
    },
    {
      title: 'Update your Mac',
      resourceLink:
        'https://support.apple.com/en-gb/guide/mac-help/mchlpx1065/mac',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 102,
    },
    {
      title: 'Update your Window 10 computer',
      resourceLink:
        'https://support.microsoft.com/en-gb/help/4027667/windows-10-update',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 85,
    },
    {
      title: 'Upskill your local volunteers',
      resourceLink: 'https://edu.gcfglobal.org/en/computerbasics/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 14,
    },
    {
      title: 'Using bcc in Gmail',
      resourceLink: 'https://www.gmass.co/blog/use-bcc-in-email/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 101,
    },
    {
      title: 'Using Excel',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/excel/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 94,
    },
    {
      title: 'Using Google Docs',
      resourceLink:
        'https://edu.gcfglobal.org/en/googledocuments/getting-started-with-your-document/1/',
      description:
        'activity description to test search query, this should been returned when you search on "manage" OR "documents".',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 66,
    },
    {
      title: 'Using Microsoft Word',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/word/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 67,
    },
    {
      title: 'Using Seach Engines',
      resourceLink: 'https://www.learnmyway.com/courses/using-search-engines/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 14,
    },
    {
      title: 'Using social media (title tbc)',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/socialmedia/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 15,
    },
    {
      title: 'Using the appropriate language',
      resourceLink:
        'https://saylordotorg.github.io/text_handbook-for-writers/s21-02-using-appropriate-language.html',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 12,
    },
    {
      title: 'Using the correct tone of voice and language in emails',
      resourceLink:
        'https://www.psychologytoday.com/gb/blog/threat-management/201311/dont-type-me-email-and-emotions',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 87,
    },
    {
      title: 'Using the correct tone of voice and language on social media',
      resourceLink:
        'https://buffer.com/library/social-media-marketing-voice-and-tone/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 1,
      resourceCreatedBy: 'GCF Global',
      completionTime: 95,
    },
    {
      title: 'Using WhatsApp',
      resourceLink: 'https://www.wikihow.com/Create-a-Group-in-WhatsApp',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 115,
    },
    {
      title: 'Video editing for beginners',
      resourceLink:
        'https://www.udemy.com/course/video-editing-101-learn-the-basics-of-video-editing/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 21,
    },
    {
      title: 'Volunteer training (title tbc)',
      resourceLink: 'https://learnzone.org.uk/courses/course.php?id=342',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 38,
    },
    {
      title: 'Why Update your apps?',
      resourceLink: 'https://www.technobezz.com/5-reasons-keep-apps-date/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 2,
      resourceCreatedBy: 'GCF Global',
      completionTime: 36,
    },
    {
      title: 'Zip files',
      resourceLink:
        'https://edu.gcfglobal.org/en/techsavvy/working-with-zip-files/1/',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 107,
    },
    {
      title: 'Zoom',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/online-collaboration-tools/online-meetings/introduction-zoom-meetings',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      difficulty: 4,
      resourceCreatedBy: 'GCF Global',
      completionTime: 39,
    },
  ];

  const activitiesWithCreator = activities.map((activity) => ({
    ...activity,
    createdBy: KristaForster.id,
  }));

  const addedActivities = await Promise.all(
    activitiesWithCreator.map(async (activity) => {
      return createActivity(activity);
    }),
  );

  // const microsoftWordActivity = await createActivity(activities[0]);
  // const outlookExpress = await createActivity(activities[1]);

  return {
    addedActivities,
  };
};

export default createActivities;

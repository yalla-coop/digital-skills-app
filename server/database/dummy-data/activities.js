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
      title: 'Android Device',
      resourceLink:
        'https://support.google.com/googleplay/answer/113412?hl=en-GB',
      description: '',
      resourceCreatedBy: 'Google Support',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 15,
    },
    {
      title: 'Choosing a Strong Password',
      resourceLink:
        'https://home.bt.com/tech-gadgets/computing/8-tips-to-make-sure-your-passwords-are-strong-but-simple-11364015494778',
      description:
        'Article from BT on simple tips to make your password strong to keep hackers out so your information stays secure.',
      resourceCreatedBy: 'BT',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 10,
    },
    {
      title: 'Choosing your cloud platform',
      resourceLink:
        'https://www.cnet.com/how-to/onedrive-dropbox-google-drive-and-box-which-cloud-storage-service-is-right-for-you/',
      description: '',
      resourceCreatedBy: 'CNet',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 30,
    },
    {
      title: 'Choosing your video platform',
      resourceLink: 'https://www.learnmyway.com/courses/video-calling/',
      description:
        'Module on video calling to help you choose your method.  You will learn about how you can see people when chatting to them on the internet, what you need to make video calls and help you choose the best method for you.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 5,
    },
    {
      title: 'Clickbait',
      resourceLink: 'https://edu.gcfglobal.org/en/thenow/what-is-clickbait/1/',
      description:
        "You may not have heard of the term clickbait, however, you more than likely see it every day. Clickbait use clever ways to deceive you.  Do you notice the adverts on news sites trying to sway you into clicking on a link? These unsuspecting adverts can be very harmful. Learn more about clickbait and how it's used in today's high-tech world in this article.",
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 35,
    },
    {
      title: 'Communicating beyond email',
      resourceLink: 'https://edu.gcfglobal.org/en/beyondemail',
      description:
        'Have you ever thought about sending communication using alternative means than just email? This class by GCF Global will take you through all your options and help you to decide which is best for your needs.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 3,
      completionTime: 50,
    },
    {
      title: 'Content for the web',
      resourceLink:
        'https://www.copypress.com/blog/the-importance-of-formatting-your-content-for-the-web/',
      description:
        'Does your group own a website or do you promote the work you do on social media? Ever thought about the best way to make your content stand out from the crowd? Have a read of this article which goes over the things you should be doing when writing content for the web.',
      resourceCreatedBy: 'CopyPress',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 20,
    },
    {
      title: 'Creating Documents',
      resourceLink: 'https://www.learnmyway.com/courses/creating-documents/',
      description:
        'Learn My Way have produced an e-learning module that will help you to make, change and save a document as well as how to lay out, add pictures and print documents.  This will put you in a good place to get on your way!',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 45,
    },
    {
      title: 'Creating Spreadsheets',
      resourceLink: 'https://www.learnmyway.com/courses/creating-spreadsheets/',
      description:
        'Spreadsheets are a great way of sorting, storing and organising data. Learn My Way have produced a module on Creating Spreadsheets where you will learn how to use a spreadsheet to make working with numbers easier. The course will show you how to enter text and numbers to record information and make a home budget.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 3,
      completionTime: 10,
    },
    {
      title: 'Digital cameras (title tbc)',
      resourceLink:
        'https://www.learnmyway.com/courses/using-a-digital-camera/',
      description:
        'Learn about digital cameras and how they work. You will also learn how to download photos from your digital camera to your computer so that you can share them with your friends and family.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 45,
    },
    {
      title: 'Digital Champion',
      resourceLink:
        'https://www.digitalunite.com/news-reviews/delivering-digital-champion-success',
      description:
        'Do you know someone who is struggling to adapt to using digital technology? Do you have the skills and drive to teach other people digital skills? Read this article by Digital Unite to find out how to become a digital champion.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 20,
    },
    {
      title: 'Digital Unite (title tbc)',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/internet-security/identity-theft-online-safety/how-stay-safe-online',
      description:
        'Has the security of what you do online ever crossed your mind? Do you want to know the best practices for staying safe online? If this is you, you have come to the right place, this guide by Digital Unite takes you through the top tips to staying safe online.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 20,
    },
    {
      title: 'Dropbox - How to use Dropbox',
      resourceLink:
        'https://help.dropbox.com/guide/individual/how-to-use-dropbox#welcome-to-dropbox',
      description: '',
      resourceCreatedBy: 'Dropbox',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 5,
    },
    {
      title: 'Dropbox - Sharing on Dropbox',
      resourceLink: 'https://help.dropbox.com/files-folders/share',
      description: '',
      resourceCreatedBy: 'Dropbox',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 25,
    },
    {
      title: 'Emailing Multiple Recipients',
      resourceLink:
        'https://www.lifewire.com/sending-an-email-to-multiple-recipients-cc-and-bcc-1171178',
      description:
        "It's important to know what 'cc' and 'bcc' mean when faced with sending an email. This article from Lifewire explains what they mean and when to use them: ",
      resourceCreatedBy: 'Lifewire',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 15,
    },
    {
      title: 'Freezing computer',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/my-computer-keeps-freezing-help',
      description:
        'Computers can freeze or ‘hang’ for a variety of reasons, find out what to do next, read this guide from Digital Unite to find out more.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 35,
    },
    {
      title: 'Get people chatting online',
      resourceLink: 'https://www.learnmyway.com/courses/video-calling/',
      description:
        'In this course you will learn about how you can see people when chatting to them on the internet. The course explains what you need to make video calls and help you choose the best method for you.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 5,
    },
    {
      title: 'Girlguide training (title tbc)',
      resourceLink:
        'https://training.girlguiding.org.uk/keep-data-safe/#/page/5ba3529f8b683053aa624498',
      description:
        'In this training by our friends at Girlguiding they cover what you need to know about keeping information safe and data protection legislation in the UK.',
      resourceCreatedBy: 'Girlguiding',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 40,
    },
    {
      title: 'Google Drive - Drive Cheat Sheet',
      resourceLink: 'https://support.google.com/a/users/answer/9300017',
      description: '',
      resourceCreatedBy: 'Google',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 25,
    },
    {
      title: 'Google Drive - G-Suite Learning Center',
      resourceLink: 'https://support.google.com/a/users#topic=9393003',
      description: '',
      resourceCreatedBy: 'Google',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 35,
    },
    {
      title: 'Government advice on reporting bad content',
      resourceLink:
        'https://gds.blog.gov.uk/2014/03/02/report-a-misleading-website-to-search-engines/',
      description:
        'Would you know where to go if you came across misleading or incorrect information online? Read this government blog to find out how to report bad content online',
      resourceCreatedBy: 'Government',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 30,
    },
    {
      title: 'How to backup data on the cloud',
      resourceLink:
        'https://www.learnmyway.com/courses/keeping-your-device-safe/?utm_source=skillsfortomorrow&utm_medium=website&utm_campaign=bt',
      description:
        'In this module from Learn My Way, you will find out how to save a backup of the information on your device to the cloud and how to reset your device if you need to.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 30,
    },
    {
      title: 'How to use Zoom',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/online-collaboration-tools/online-meetings/introduction-zoom-meetings',
      description:
        'Zoom is an online meeting platform which surged in popularity during 2020. It can be used to make 1-1 or group video calls from a computer, tablet or phone. Users can screen share, chat and use interactive features. Use this guide to find out more on how to use Zoom.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 10,
    },
    {
      title: 'iPhone, iPad or iPod device',
      resourceLink: 'https://support.apple.com/en-gb/HT202180',
      description: '',
      resourceCreatedBy: 'Apple Support',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 30,
    },
    {
      title: 'Keeping Yourself Safe',
      resourceLink:
        'https://www.learnmyway.com/courses/keeping-your-personal-data-safe/',
      description:
        'Learn My Way have a course that helps you learn how to keep your online information safe by making and remembering good passwords. You’ll also find out how you can control who sees your personal information when using public computers and social media.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 45,
    },
    {
      title: 'LearnMyWay (title tbc)',
      resourceLink:
        'https://makeitclick.learnmyway.com/directory/subjects/documents/how-to-write-and-format-text-in-microsoft-word',
      description:
        'Do you want to know how to improve your documents to make them stand out and become more readable? Watch this quick four-minute video by LearnMyWay which shows you how to change text size, font, colour and other formatting in Microsoft Word.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Video',
      difficulty: 1,
      completionTime: 30,
    },
    {
      title: 'Microsoft Office Excel',
      resourceLink:
        'https://edu.gcfglobal.org/en/excel2003/create-open-and-save-workbooks/1/',
      description:
        'Learn how to create, save, open and close a spreadsheet in this article written by GCF Global.\n',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 10,
    },
    {
      title: 'Microsoft Office Word',
      resourceLink: 'https://edu.gcfglobal.org/en/word2016/formatting-text/1/',
      description:
        'When typing up a letter or document do you just leave it on the default font and size? Do you want to improve the legibility and aesthetics of a document? You should experiment with using different formatting options, built right into Word. Learn more in this lesson from our friends at GCF Global.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 40,
    },
    {
      title: "NSPCC's expertise (title tbc)",
      resourceLink: 'https://www.net-aware.org.uk/',
      description:
        'Website bringing together the NSPCC’s expertise in protecting children and O2’s tech know-how, helping you keep your kids safe online on all types of social media which kids would use.',
      resourceCreatedBy: 'NSPCC',
      resourceType: 'Video',
      difficulty: 1,
      completionTime: 50,
    },
    {
      title: 'OneDrive - OneDrive on your PC',
      resourceLink:
        'https://support.microsoft.com/en-gb/help/17184/windows-10-onedrive',
      description: '',
      resourceCreatedBy: '',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 40,
    },
    {
      title: 'OneDrive - OneDrive Video Training',
      resourceLink:
        'https://support.microsoft.com/en-us/office/onedrive-video-training-1f608184-b7e6-43ca-8753-2ff679203132',
      description: '',
      resourceCreatedBy: '',
      resourceType: 'Video',
      difficulty: 3,
      completionTime: 10,
    },
    {
      title: 'Our Advice for secure meetings',
      resourceLink:
        'https://scouts.org.uk/volunteers/scouts-at-home/taking-scouts-online/digital-platforms-for-scouts/',
      description:
        "Securing our online meetings is essential for safety and peace of mind. Whether you're using Zoom, Teams, Google Meet, or another platform, safety is paramount. Always check out the latest guidance from Scouts and make use of the help provided by the platform. We've provided detailed guidance on the use of a range of different platforms - if you're making the most of the Zoom Pro offer, there's loads of info on that there too!",
      resourceCreatedBy: 'Scouts',
      resourceType: 'Guidance',
      difficulty: 3,
      completionTime: 25,
    },
    {
      title: 'Our Advice on GDPR',
      resourceLink: 'https://scouts.org.uk/gdpr',
      description:
        "In the modern world we live in data can be part of many everyday activities we do, for example collecting personal data about young people for a camp.  It's always important to keep data safe so please read our advice on the steps to ensure you remain GDPR compliant.",
      resourceCreatedBy: 'Scouts',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 20,
    },
    {
      title: 'Photo editing basics',
      resourceLink:
        'https://www.rei.com/learn/expert-advice/photo-editing-basics.html',
      description:
        'Does your group have a social media account? Do you want to share creative content on there? Not sure where to start with editing your photos? Have a read of this guide to improve your photo editing skills.',
      resourceCreatedBy: 'Rei',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 5,
    },
    {
      title: 'Photo editing for beginners',
      resourceLink:
        'https://www.gapyear.com/articles/travel-tips/cormac-scanlans-guide-to-photo-editing-for-beginners',
      description:
        'Are you unsure which free tools are best to edit your photos? Have a read of this article where it compares the different tools available as well as offering handy tips and tricks to get you started.',
      resourceCreatedBy: 'Gap year',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 15,
    },
    {
      title: 'Protecting yourself on social media',
      resourceLink:
        'https://www.makeuseof.com/tag/9-things-never-share-social-media/',
      description:
        'Have you ever thought about the consequences of posting those holiday pics or ranted about a bad experience? Probably not, however this can be dangerous, have a read of this article about the implications of what you post online.',
      resourceCreatedBy: 'Make Use Of',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 45,
    },
    {
      title: 'Public and private spaces (title tbc)',
      resourceLink:
        'https://www.greenmellenmedia.com/public-vs-private-social-media/',
      description:
        "When writing content online you need to understand what you can and can't write in public and private spaces. This is both required to keep data safe and has the potential to raise safeguarding concerns if information is posted in the public domain which should have been kept private.",
      resourceCreatedBy: 'Green Mellen Media',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 10,
    },
    {
      title: 'Reporting on Facebook',
      resourceLink: 'https://www.facebook.com/help/212722115425932/',
      description:
        'Have you seen fake news or inaccurate information on Facebook? They have a report system in place to remove this, to find out more visit Facebook’s support site.',
      resourceCreatedBy: 'Facebook Help',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 10,
    },
    {
      title: 'Resource Techniques (title tbc)',
      resourceLink:
        'https://www.resourcetechniques.co.uk/news/web-design/types-of-modern-communication-100244',
      description:
        'Do you want to know the best method of communication to promote a camp? Or what is the best way to send direct communication to parents. This article compares each digital communication method to help you decide written by Resource Techniques. ',
      resourceCreatedBy: 'Resource Techniques',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 20,
    },
    {
      title: 'Saving Files',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/how-back-your-computer-and-restore-files-back',
      description:
        'Read this step-by-step guide to saving your files from Digital Unite to ensure that files survive even if your computer doesn’t.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 30,
    },
    {
      title: 'Schedule a Zoom meeting',
      resourceLink:
        'https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings',
      description:
        "Running a video meeting may be daunting, however, it needn't be difficult. Have a read of the support page below to find support in running Zoom meetings.",
      resourceCreatedBy: 'Zoom Support',
      resourceType: 'Video',
      difficulty: 1,
      completionTime: 25,
    },
    {
      title: 'Scout Guidance',
      resourceLink:
        'https://scouts.org.uk/volunteers/scouts-at-home/taking-scouts-online/staying-safe-online/',
      description:
        "Before using social media it's important to be aware of the Scouts' guidance on Staying Safe Online. Remember when contributing to discussions in Scouting social media that you are broadcasting to your 'world wide family of Scouts'.  Please keep all posts in line with our Scout values of respect, care and cooperation.",
      resourceCreatedBy: 'Scouts',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 45,
    },
    {
      title: 'Searching Better',
      resourceLink: 'https://edu.gcfglobal.org/en/search-better-2018/',
      description:
        'To get more out of search engines, there are some tips and tricks that you can use. GCF Global shows you how to Search Better using Google more effectively.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 25,
    },
    {
      title: 'Shaping the internet (title tbc)',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/how-ads-and-clicks-shape-the-internet/1/',
      description:
        'Learn how adverts and click shaped the Internet into its current form with this free lesson by GCF Global.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 30,
    },
    {
      title: 'Signpost Digital Skills',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/hobbies-interests/activities-interests/how-signpost-residents-digital-skills',
      description:
        'Read this guide by Digital Unite on how to signpost residents to digital skills support.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 45,
    },
    {
      title: 'Slow Computer',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/computer-basics/using-computer/why-my-computer-so-slow',
      description:
        'If your computer is increasingly slow, this guide by Digital Unite has suggestions for ways you can free up space and help your computer run faster.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 30,
    },
    {
      title: 'Social networking (title tbc)',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/social-networking-blogs',
      description:
        'Social networking allows us to manage and communicate with our contacts in a totally new way and access information as never before. We’ll show you how to get involved in these exciting, fun and flexible forms of social media.',
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 45,
    },
    {
      title: 'Sponsored Content',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/what-is-sponsored-content/1/',
      description:
        'You probably didn’t realise that a lot of videos you watch on YouTube are sponsored by companies who pay to have their product promoted. This biased opinion may unwillingly entice you to make uninformed purchases. In this article by GCF Global, you will learn how to identify sponsored content.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 20,
    },
    {
      title: 'Taking photos',
      resourceLink: 'https://edu.gcfglobal.org/en/digitalphotography/',
      description:
        'How to transfer your photos from your camera to your computer, this guides you through sharing photos via email, Facebook and more',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 3,
      completionTime: 10,
    },
    {
      title: 'Targeted Advertising',
      resourceLink:
        'https://edu.gcfglobal.org/en/digital-media-literacy/what-is-targeted-advertising/1/',
      description:
        'Did you ever wonder why the adverts you see on social media always seem to promote products you have recently been talking about? Learn more about how advertisers use targeted ads to try and sell products to Internet users. Read this article by GCF Global to find out more.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 40,
    },
    {
      title: 'Transferring photos',
      resourceLink:
        'https://www.digitalunite.com/technology-guides/digital-photography',
      description:
        "In this free tutorial, you'll learn digital photography basics as well as some more advanced skills so you can take great pictures. There is also a section on digital cameras, tips on taking photos, plus specifics for smartphones, iPhone and Android.",
      resourceCreatedBy: 'Digital Unite',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 35,
    },
    {
      title: 'Troubleshooting',
      resourceLink:
        'https://edu.gcfglobal.org/en/computerbasics/basic-troubleshooting-techniques/1/',
      description:
        "Do you know what to do if your screen goes blank? What if you can't seem to close an application, or can't hear any sound from your speakers? Whenever you have a problem with your computer, don't panic! There are many basic troubleshooting techniques you can use to fix issues like this. In this lesson from GCF Global, we'll show you some simple things to try when troubleshooting, as well as how to solve common problems you may encounter.",
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 35,
    },
    {
      title: 'Understanding file extensions',
      resourceLink:
        'https://edu.gcfglobal.org/en/basic-computer-skills/understanding-file-extensions/1/',
      description:
        'Learn about all the different file extensions that exist, as well as how to work out what they mean in this E-Learning module from GCF Global.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 10,
    },
    {
      title: 'Understanding the consequences of what you post on social media',
      resourceLink:
        'https://careers.workopolis.com/advice/6-people-who-were-fired-for-social-media-posts/',
      description:
        'Have you ever regretted posting something on social media? Or thought no one will ever look back and see you past tweets in your childhood? Think again. Have a read of these true stories where people’s lives have been turned upside down by them unwillingly posting posts with very bad unintended consequences.',
      resourceCreatedBy: 'Workopolis',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 10,
    },
    {
      title: 'Update your Android Device',
      resourceLink:
        'https://support.google.com/android/answer/7680439?hl=en-GB',
      description:
        'Do you own an Android device? Read the instructions to update it to the latest version.',
      resourceCreatedBy: 'Google Support',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 30,
    },
    {
      title: 'Update your iPhone, iPad or iPod',
      resourceLink: 'https://support.apple.com/en-gb/HT204204',
      description:
        'Do you own an Apple mobile device? View the guide to find out how to update these devices.',
      resourceCreatedBy: 'Apple Support',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 20,
    },
    {
      title: 'Update your Mac',
      resourceLink:
        'https://support.apple.com/en-gb/guide/mac-help/mchlpx1065/mac',
      description:
        "Do you own an Apple Mac? Is your Mac up to data?  You must keep your device up to date to make sure that you're safe. Not only will it keep you and what you do safe, but it also keeps everything working smoothly.  Have a look at this guide from Apple to check how it's done.",
      resourceCreatedBy: 'Apple Support',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 30,
    },
    {
      title: 'Update your Window 10 computer',
      resourceLink:
        'https://support.microsoft.com/en-gb/help/4027667/windows-10-update',
      description:
        "Are you using Windows? Is your computer up to date? You must keep your device up to date to make sure that you're safe. Not only will it keep you and what you do safe, but it also keeps everything working smoothly. Have a look at this guide which will show you how to check. ",
      resourceCreatedBy: 'Microsoft Support',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 40,
    },
    {
      title: 'Upskill your local volunteers',
      resourceLink: 'https://edu.gcfglobal.org/en/computerbasics/',
      description:
        "Not everyone may be as used to doing stuff as digitally as you. Sometimes we'll need to treat people differently based on a number of different factors.",
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 15,
    },
    {
      title: 'Using appropriate language online',
      resourceLink:
        'https://saylordotorg.github.io/text_handbook-for-writers/s21-02-using-appropriate-language.html',
      description:
        'Ever thought about what sort of language to use online? Jargon (specialist terms) can be useful, but only if your reader knows what you mean! Have a read of this article to find out when to use certain language.',
      resourceCreatedBy: 'Saylor Academy',
      resourceType: 'Article',
      difficulty: 2,
      completionTime: 20,
    },
    {
      title: 'Using bcc in Gmail',
      resourceLink: 'https://www.gmass.co/blog/use-bcc-in-email/',
      description:
        'This walkthrough from Gmass starts by showing you how to use bcc in Gmail and then introduces you to their own plug-in that can enhance sending mass emails. ',
      resourceCreatedBy: 'Gmass',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 35,
    },
    {
      title: 'Using Excel',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/excel/',
      description:
        'GCF Global have a tutorial that guides you in using different versions of Excel to organise and calculate data. Excel is one of the most popular Spreadsheet software available.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 3,
      completionTime: 45,
    },
    {
      title: 'Using Google Docs',
      resourceLink:
        'https://edu.gcfglobal.org/en/googledocuments/getting-started-with-your-document/1/',
      description:
        "Google Docs is a free document processing web application that integrates with Google Drive and Gmail. GCF Global help you get started with Google Docs, creating your own documents and testing the skills that you've learnt.",
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 3,
      completionTime: 5,
    },
    {
      title: 'Using Microsoft Word',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/word/',
      description:
        'Microsoft Word is one of the most popular document processing applications out there. GCF Global have produced tutorials to help you get started with your version of Word.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 15,
    },
    {
      title: 'Using Seach Engines',
      resourceLink: 'https://www.learnmyway.com/courses/using-search-engines/',
      description:
        'E-learning from Learn My Way helping you to Use Search Engines.  You will learn how to search for things on the internet using search engines such as Google. The course covers how to search for websites, using bookmarks and saving images and other files.',
      resourceCreatedBy: 'Learn My Way',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 50,
    },
    {
      title: 'Using social media (title tbc)',
      resourceLink: 'https://edu.gcfglobal.org/en/topics/socialmedia/',
      description:
        'Knowing how to use social media to stay in touch with friends and family, promote your cause, or keep up with news is an essential skill. This is a tutorial for a wide variety of platforms including Facebook, Meetup, Skype, Twitter, WhatsApp and Zoom etc.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Tutorial',
      difficulty: 1,
      completionTime: 50,
    },
    {
      title: 'Using the appropriate language',
      resourceLink:
        'https://saylordotorg.github.io/text_handbook-for-writers/s21-02-using-appropriate-language.html',
      description:
        'Ever thought about what sort of language to use online? Jargon (specialist terms) can be useful, but only if your reader knows what you mean! Have a read of this article to find out when to use certain language.',
      resourceCreatedBy: 'Saylor Academy',
      resourceType: 'Article',
      difficulty: 4,
      completionTime: 25,
    },
    {
      title: 'Using the correct tone of voice and language in emails',
      resourceLink:
        'https://www.psychologytoday.com/gb/blog/threat-management/201311/dont-type-me-email-and-emotions',
      description:
        "Sending emails is an important way to communicate in a modern society. Emails should be written in the right tone for your reader...Here's an article talking about different ways to word your emails!",
      resourceCreatedBy: 'Psychology Today',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 10,
    },
    {
      title: 'Using the correct tone of voice and language on social media',
      resourceLink:
        'https://buffer.com/library/social-media-marketing-voice-and-tone/',
      description:
        "When posting on social media, remember to think about what you're saying. Your audience may be different to the people that receive your emails or who you talk to face-to-face. This is an article focussing on the tone of voice used when using social media.",
      resourceCreatedBy: 'Buffer',
      resourceType: 'Article',
      difficulty: 3,
      completionTime: 45,
    },
    {
      title: 'Using WhatsApp',
      resourceLink: 'https://www.wikihow.com/Create-a-Group-in-WhatsApp',
      description:
        'Not all communications need to go by email - sometimes a group chat where everyone is present and can contribute is better. WikiHow have a tutorial that walks you through setting up a WhatsApp group. Make sure you view our advice on Digital Platforms for Scouts, to check what you need to know to use WhatsApp safely.',
      resourceCreatedBy: 'WikiHow',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 15,
    },
    {
      title: 'Video editing for beginners',
      resourceLink:
        'https://www.udemy.com/course/video-editing-101-learn-the-basics-of-video-editing/',
      description:
        'Do you want to create videos to promote your group? Not sure where to start? Complete this free Udemy course taking you through the basics of video editing.',
      resourceCreatedBy: 'Udemy',
      resourceType: 'Video',
      difficulty: 4,
      completionTime: 30,
    },
    {
      title: 'Volunteer training (title tbc)',
      resourceLink: 'https://learnzone.org.uk/courses/course.php?id=342',
      description:
        'This training for volunteers will take you through everything you need to know and do to collect, store, share, manage and destroy information in the right way.',
      resourceCreatedBy: 'Macmillan Cancer Support LearnZone',
      resourceType: 'Tutorial',
      difficulty: 2,
      completionTime: 5,
    },
    {
      title: 'Volunteer training (title tbc)',
      resourceLink: 'https://learnzone.org.uk/courses/course.php?id=342',
      description: '',
      resourceCreatedBy: 'Learn Zone',
      resourceType: 'Tutorial',
      difficulty: 4,
      completionTime: 50,
    },
    {
      title: 'Why Update your apps?',
      resourceLink: 'https://www.technobezz.com/5-reasons-keep-apps-date/',
      description: '',
      resourceCreatedBy: 'Techno Bezz',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 40,
    },
    {
      title: 'Zip files',
      resourceLink:
        'https://edu.gcfglobal.org/en/techsavvy/working-with-zip-files/1/',
      description:
        'Not sure what zip files are? Read this handy guide from GCF Global that tells you what a zip file is and how to work with one.',
      resourceCreatedBy: 'GCF Global',
      resourceType: 'Article',
      difficulty: 1,
      completionTime: 15,
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

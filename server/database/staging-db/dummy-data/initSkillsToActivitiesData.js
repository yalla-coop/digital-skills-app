const skillToActivities = [
  {
    skillTitle:
      'I am aware of my behaviours and activity and avoid saying something online that I would not say face to face',
    activityTitles:
      'Using the appropriate language|Using the correct tone of voice and language in emails|Using the correct tone of voice and language on social media',
  },
  {
    skillTitle:
      'I am kind and caring in online interactions, paying attention to others and showing empathy',
    activityTitles:
      'Using the appropriate language|Using the correct tone of voice and language in emails|Using the correct tone of voice and language on social media',
  },
  {
    skillTitle:
      'I can alert the relevant person in my organisation to potential data breaches',
    activityTitles:
      'Girlguide training (title tbc)|Volunteer training (title tbc)',
  },
  {
    skillTitle: 'I can apply simple formatting to bodies of text',
    activityTitles:
      'Microsoft Office Word|LearnMyWay (title tbc)|Content for the web',
  },
  {
    skillTitle:
      'I can connect my device to a safe and secure Wi-Fi network e.g. I can connect to Wi-Fi in my house.',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can create bookings online for things like travel and events (in line with procurement policies and processes)',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can create engaging, mobile first and easy to use (inc plain English) content for users.',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can create strong and secure passwords',
    activityTitles: 'Choosing a Strong Password',
  },
  {
    skillTitle: 'I can edit photos and videos',
    activityTitles:
      'Video editing for beginners|Photo editing basics|Photo editing for beginners',
  },
  {
    skillTitle: 'I can effectively name and store files',
    activityTitles:
      'Understanding file extensions|Microsoft Office Excel|Microsoft Office Word|Zip files|Saving Files',
  },
  {
    skillTitle: 'I can ensure online meetings are set up securely',
    activityTitles: 'Our Advice|Choosing your meeting platform',
  },
  {
    skillTitle:
      'I can interact with the home screen on my device e.g. I can locate text messages.',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can join video calls/meetings',
    activityTitles: 'Get people chatting online|Zoom',
  },
  {
    skillTitle: 'I can locate information using a search tool',
    activityTitles: 'Using Seach Engines|Searching Better',
  },
  {
    skillTitle:
      'I can place orders online for products and services (in line with procurement policies and processes)',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can recognise if I am being affected physically or mentally by being online',
    activityTitles: '',
  },
  {
    skillTitle:
      'I can respond to requests for authentication for my online accounts and email',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can run video calls/meetings ',
    activityTitles: 'Schedule a Zoom meeting|Choosing your meeting platform',
  },
  {
    skillTitle: 'I can run webinars for users',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can send a messages',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can send, read and reply to emails',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can share digital skills with others',
    activityTitles: 'Signpost Digital Skills|Digital Champion',
  },
  {
    skillTitle: 'I can share documents with others ',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can share my screen to present things',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can take and use photos and videos',
    activityTitles:
      'Digital cameras (title tbc)|Taking photos|Transferring photos',
  },
  {
    skillTitle:
      'I can tell an official, legitimate website or email from a potentially dangerous one',
    activityTitles:
      'Clickbait|Sponsored Content|Targeted Advertising|Shaping the internet (title tbc)',
  },
  {
    skillTitle: 'I can turn on a device',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can update and change my password when prompted to do so ',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can use a digital calendar',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can use accessibility tools on my device to make it easier to use e.g. increase font size.',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can use Compass',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can use digital maps (e.g. Google Maps)',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can use email and messaging to communicate with multiple contacts',
    activityTitles:
      'Emailing Multiple Recipients|Using bcc in Gmail|Using WhatsApp',
  },
  {
    skillTitle:
      'I can use online collaboration tools (eg Office365/Teams/OneDrive, G-Suite/Google Drive, Dropbox)',
    activityTitles:
      'Choosing your platform|Google Drive - Drive Cheat Sheet|Google Drive - G-Suite Learning Center|Dropbox - How to use Dropbox|Dropbox - Sharing on Dropbox|OneDrive - OneDrive Video Training|OneDrive - OneDrive on your PC',
  },
  {
    skillTitle: 'I can use Online Scout Manager',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can use spreadsheets to process data',
    activityTitles: 'Creating Spreadsheets|Using Excel',
  },
  {
    skillTitle:
      'I can use the basic controls on my device e.g. turn up the volume.',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I can use the Scouts Programme planning tool and activity finder',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can work on a shared document with others',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I can write and edit simple documents',
    activityTitles: 'Creating Documents|Using Microsoft Word|Using Google Docs',
  },
  {
    skillTitle:
      'I know how to complete a review on any new processes or systems to ensure it is GDPR aligned',
    activityTitles: 'Our Advice',
  },
  {
    skillTitle: 'I know how to fact-check information that I find online',
    activityTitles: '',
  },
  {
    skillTitle: 'I know how to handle personal data',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I know how to keep a backup of data',
    activityTitles: 'How to backup data on the cloud|Saving Files',
  },
  {
    skillTitle:
      'I know how to look online and who to contact for the help and support',
    activityTitles: '',
  },
  {
    skillTitle:
      'I know how to make sure content (text and media) is accessible',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I know how to report bad content',
    activityTitles: 'Government advice|Report on FaceBook',
  },
  {
    skillTitle: 'I know how to respond to data subject access requests',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I know how to set the search engine optimisation (SEO) for content and how to use SEO images',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I know how to use digital marketing techniques and tools to promote activities and events',
    activityTitles: ' ',
  },
  {
    skillTitle: 'I know how to use social media to interact with users',
    activityTitles:
      "Using WhatsApp|Scout Guidance|Using social media (title tbc)|Beyond email (title tbc)|Social networking (title tbc)|NSPCC's expertise (title tbc)",
  },
  {
    skillTitle:
      'I know how to use the internet to learn how to use digital tools and services and increase my skills',
    activityTitles: '',
  },
  {
    skillTitle:
      'I know that my passwords and personal information need to be kept safely as they have a value to others e.g. I don’t write my passwords down or tell them to anyone else.',
    activityTitles: 'Keeping Yourself Safe',
  },
  {
    skillTitle: 'I know that not everyone is digitally enabled',
    activityTitles: 'Upskill your local volunteers',
  },
  {
    skillTitle:
      'I know when something has gone wrong and are are able to solve simple problems',
    activityTitles: 'Troubleshooting|Freezing computer|Slow Computer',
  },
  {
    skillTitle: 'I know when to use different communication methods',
    activityTitles:
      'Resource Techniques (title tbc)|LearnMyWay (title tbc)|GCF Global (title tbc)',
  },
  {
    skillTitle:
      'I understand GDPR and can apply it to my role within my organisation',
    activityTitles: 'Our Advice',
  },
  {
    skillTitle:
      'I understand online material is subject to copyright and cannot be used without the owners’ permission',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I understand that I must not share other people’s data online without their consent',
    activityTitles:
      "Girlguide training (title tbc)|Public and private spaces (title tbc)|Volunteer training (title tbc)|NSPCC's expertise (title tbc)",
  },
  {
    skillTitle:
      'I understand that my online activity produces a permanent record which could be accessed and used by others both now and in the future',
    activityTitles:
      "Girlguide training (title tbc)|Public and private spaces (title tbc)|Volunteer training (title tbc)|NSPCC's expertise (title tbc)|Digital Unite (title tbc)|Example 1 (title tbc)|Example 2 (title tbc)",
  },
  {
    skillTitle:
      'I understand that the comments and views I share on social media or via email create a permanent, online record.',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I understand that viruses can damage my computer and that security software should be used to prevent this',
    activityTitles: ' ',
  },
  {
    skillTitle:
      'I understand why it is important to keep my computer systems and security software up to date and I allow them to be updated when prompted',
    activityTitles:
      'Update your Window 10 computer|Update your Mac|Update your iPhone, iPad or iPod|Update your Andriod Device|Why Update your apps?|Andriod Device|iPhone, iPad or iPod device',
  },
];

export const formattedSkillActivities = skillToActivities.map((activity) => ({
  ...activity,
  activityTitles: activity.activityTitles.split('|'),
}));

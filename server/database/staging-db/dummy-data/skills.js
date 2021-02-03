import { query } from '../../connect';
import { skillsCodes } from '../../../constants';

const createSkill = async (values) => {
  const sql = `
    INSERT INTO skills(
      title,
      code,
      description,
      icon
    ) VALUES (
      $1,
      $2,
      $3,
      $4
      )
    RETURNING *`;
  const res = await query(sql, [
    values.title,
    values.code,
    values.description,
    values.icon,
  ]);
  return res.rows[0];
};

const createSkills = async () => {
  const skills = [
    // Foundation skills
    // The basic skills you need if you are not currently using digital technology
    {
      title: 'I can turn on a device',
      code: skillsCodes.TURN_ON_DEVICE,
      number: 1,
      icon: 'checklist',
      description:
        'Keeping a good organisation of files is a must when using digital technology well. You may not think about files that often, but without organised folders, later finding files becomes very difficult!',
      // basics
    },
    {
      title:
        'I can use the basic controls on my device e.g. turn up the volume.',
      code: skillsCodes.DEVICE_BASIC_CONTROL,
      number: 2,
      icon: 'checklist',
      // basics
    },
    {
      title:
        'I can use accessibility tools on my device to make it easier to use e.g. increase font size.',
      code: skillsCodes.USE_ACCESSIBILITY_TOOL,
      number: 3,
      icon: 'checklist',
      // basics
    },
    {
      title:
        'I can interact with the home screen on my device e.g. I can locate text messages.',
      code: skillsCodes.INTERACT_WITH_THE_HOME_SCREEN,
      number: 4,
      icon: 'checklist',
      // basics
    },
    {
      title:
        'I can connect my device to a safe and secure Wi-Fi network e.g. I can connect to Wi-Fi in my house.',
      code: skillsCodes.CONNECT_DEVICE_TO_SAFE_WI_FI,
      number: 5,
      icon: 'checklist',
      // basics
    },
    {
      title:
        'I know that my passwords and personal information need to be kept safely as they have a value to others e.g. I don’t write my passwords down or tell them to anyone else.',
      code: skillsCodes.KEEP_PERSONAL_INFORMATION_SAFE,
      number: 6,
      icon: 'file',
      // basics
    },
    {
      title: 'I can update and change my password when prompted to do so',
      code: skillsCodes.CHANGE_MY_PASSWORD_WHEN_PROMPTED,
      number: 7,
      icon: 'file',
      // basics
    },
    {
      title: 'I can send a messages',
      code: skillsCodes.SEND_MESSAGES,
      number: 8,
      icon: 'communication',
      // basics
    },
    {
      title: 'I can send, read and reply to emails',
      code: skillsCodes.SEND_READ_REPLY_TO_EMAILS,
      number: 9,
      icon: 'communication',
      // basics
    },
    {
      title: 'I can use a digital calendar',
      code: skillsCodes.USE_DIGITAL_CALENDAR,
      number: 10,
      icon: 'calendar',
      // basics
    },

    // Be safe, legal and confident online
    // Act safely and responsibly in digital environments
    {
      title: 'I can create strong and secure passwords',
      code: skillsCodes.CREATE_STRONG_PASSWORDS,
      number: 11,
      icon: 'file',
      // basics
    },
    {
      title:
        'I understand that viruses can damage my computer and that security software should be used to prevent this',
      code: skillsCodes.UNDERSTAND_VIRUSES_DAMAGE,
      number: 12,
      icon: 'file',
      // basics
    },
    {
      title:
        'I understand that my online activity produces a permanent record which could be accessed and used by others both now and in the future',
      code: skillsCodes.ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD,
      number: 13,
      icon: 'file',
      // Finances / meetings /	Data / word out
    },
    {
      title:
        'I understand that I must not share other people’s data online without their consent',
      code: skillsCodes.MUST_NOT_SHARE_OTHER_PEOPLE_DATA,
      number: 14,
      icon: 'share',
      // Events / Finances /	Data
    },
    {
      title:
        'I can respond to requests for authentication for my online accounts and email',
      code: skillsCodes.RESPOND_TO_REQUESTS_FOR_AUTHENTICATION,
      number: 15,
      icon: 'digitalTools',
      //  Finances /	Data
    },
    {
      title:
        'I understand why it is important to keep my computer systems and security software up to date and I allow them to be updated when prompted',
      code: skillsCodes.COMPUTER_SYSTEMS_UP_TO_DATE,
      number: 16,
      icon: 'file',
      //  basics /	Data
    },
    {
      title:
        'I understand online material is subject to copyright and cannot be used without the owners’ permission',
      code: skillsCodes.ONLINE_MATERIAL_COPYRIGHT,
      number: 17,
      icon: 'share',
      //  Data / word out
    },
    {
      title:
        'I can tell an official, legitimate website or email from a potentially dangerous one',
      code: skillsCodes.TELL_OFFICIAL_WEBSITE_OR_EMAIL,
      number: 18,
      icon: 'notification',
      //  basic / meeting
    },
    {
      title:
        'I can alert the relevant person in my organisation to potential data breaches',
      code: skillsCodes.ALERT_RELEVANT_PERSON_TO_DATA_BREACHES,
      number: 19,
      icon: 'notification',
      //  data
    },
    {
      title:
        'I understand GDPR and can apply it to my role within my organisation',
      code: skillsCodes.GDPR_IN_ORGANISATION,
      number: 20,
      icon: 'knowledge',
      //  data
    },
    {
      title: 'I know how to fact-check information that I find online',
      code: skillsCodes.FACT_CHECK_INFORMATION,
      number: 21,
      icon: 'knowledge',
      //  basic , word out
    },
    {
      title: 'I know how to report bad content',
      code: skillsCodes.REPORT_BAD_CONTENT,
      number: 22,
      icon: 'notification',
      //  word out
    },
    {
      title:
        'I know how to use the internet to learn how to use digital tools and services and increase my skills',
      code: skillsCodes.USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS,
      number: 23,
      icon: 'knowledge',
      //  basic
    },
    // Digital wellbeing and resilience
    // Awareness of how being online can make us feel and looking after ourselves and others when online.
    {
      title:
        'I can recognise if I am being affected physically or mentally by being online',
      code: skillsCodes.RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE,
      number: 24,
      icon: 'knowledge',
      //  basic
    },
    {
      title:
        'I am aware of my behaviours and value and activity avoid saying something online that I would not say face to face',
      code: skillsCodes.AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE,
      number: 25,
      icon: 'communication',
      //  basic
    },
    {
      title:
        'I am kind and caring in online interactions, paying attention to others and showing empathy',
      code: skillsCodes.KIND_AND_CARING_IN_ONLINE_INTERACTIONS,
      number: 26,
      icon: 'communication',
      //  basic
    },
    {
      title: 'I know that not everyone is digitally enabled',
      code: skillsCodes.NOT_EVERYONE_IS_DIGITALLY_ENABLED,
      number: 27,
      icon: 'knowledge',
      //  basic , work together
    },
    {
      title: 'I can share digital skills with others',
      code: skillsCodes.SHARE_DIGITAL_SKILLS_WITH_OTHERS,
      number: 28,
      icon: 'share',
      //  meeting , data , work together
    },
    {
      title:
        'I know when something has gone wrong and are able to solve simple problems',
      code: skillsCodes.KNOW_WHEN_SOMETHING_HAS_GONE_WRONG,
      number: 29,
      icon: 'knowledge',
      //  finance , meetings , data, work together
    },
    {
      title:
        'I know how to look online and who to contact for the help and support',
      code: skillsCodes.LOOK_ONLINE_AND_CONTACT_FOR_HELP,
      number: 30,
      icon: 'knowledge',
      // basic , work together
    },

    // Communicating and collaboration
    // Communicate, collaborate and share online
    {
      title: 'I can write and edit simple documents',
      code: skillsCodes.WRITE_AND_EDIT_SIMPLE_DOCUMENTS,
      number: 31,
      icon: 'documents',
      // basic , word out
    },
    {
      title: 'I can apply simple formatting to bodies of text',
      code: skillsCodes.SIMPLE_FORMATTING_TEXT,
      number: 32,
      icon: 'documents',
      // data , word out
    },
    {
      title: 'I can use spreadsheets to process data',
      code: skillsCodes.USE_SPREADSHEETS_TO_PROCESS_DATA,
      number: 33,
      icon: 'calculator',
      // programme , finance , data
    },
    {
      title: 'I can share documents with others',
      code: skillsCodes.SHARE_DOCUMENTS_WITH_OTHERS,
      number: 34,
      icon: 'documents',
      // data , word out
    },
    {
      title: 'I can work on a shared document with others',
      code: skillsCodes.WORK_ON_SHARED_DOCUMENT,
      number: 35,
      icon: 'documents',
      // meeting , work together
    },
    {
      title: 'I know when to use different communication methods',
      code: skillsCodes.USE_DIFFERENT_COMMUNICATION_METHODS,
      number: 36,
      icon: 'communication',
      // meetings , working together
    },
    {
      title:
        'I can use email and messaging to communicate with multiple contacts',
      code: skillsCodes.EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS,
      number: 37,
      icon: 'communication',
      // programme, events , word out , working together
    },

    {
      title:
        'I can use online collaboration tools (eg Office365/Teams/OneDrive, G-Suite/Google Drive, Dropbox)',
      code: skillsCodes.USE_ONLINE_COLLABORATION_TOOLS,
      number: 38,
      icon: 'digitalTools',
      // programme , events , finance , meeting  data , word out, working together
    },
    {
      title: 'I know how to use social media to interact with users',
      code: skillsCodes.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS,
      number: 39,
      icon: 'communication',
      // events ,  word out
    },
    {
      title:
        'I understand that the comments and views I share on social media or via email create a permanent, online record.',
      code: skillsCodes.COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD,
      number: 40,
      icon: 'communication',
      // meeting ,  word out
    },
    {
      title: 'I can join video calls/meetings',
      code: skillsCodes.JOIN_VIDEO_CALLS_MEETINGS,
      number: 41,
      icon: 'communication',
      // events ,  meetings, working together
    },
    {
      title: 'I can run video calls/meetings',
      code: skillsCodes.RUN_VIDEO_CALLS_MEETINGS,
      number: 42,
      icon: 'communication',
      // programme ,  events, meetings , working together
    },
    {
      title: 'I can ensure online meetings are set up securely',
      code: skillsCodes.ENSURE_ONLINE_MEETINGS_ARE_SECURELY,
      number: 43,
      icon: 'communication',
      // events, meetings , working together
    },
    {
      title: 'I can share my screen to present things',
      code: skillsCodes.SHARE_SCREEN_TO_PRESENT,
      number: 44,
      icon: 'share',
      // programme, meetings , working together
    },
    {
      title: 'I can run webinars for users',
      code: skillsCodes.RUN_WEBINARS,
      number: 45,
      icon: 'communication',
      // events , meetings
    },
    {
      title:
        'I know how to use digital marketing techniques and tools to promote activities and events',
      code: skillsCodes.USE_DIGITAL_MARKETING_TECHNIQUES,
      number: 46,
      icon: 'communication',
      // events , meetings, word out
    },

    // Producing and supporting digital content
    // Creating and maintaining usable and useful content.
    {
      title:
        'I can create engaging, mobile first and easy to use (inc plain English) content for users.',
      code: skillsCodes.CREATE_ENGAGING_MOBILE_FIRST_CONTENT,
      number: 47,
      icon: 'documents',
      // meetings, word out
    },
    {
      title: 'I can take and use photos and videos',
      code: skillsCodes.TAKE_AND_USE_PHOTOS_AND_VIDEOS,
      number: 48,
      icon: 'photo',
      // events, word out
    },
    {
      title: 'I can edit photos and videos',
      code: skillsCodes.EDIT_PHOTOS_AND_VIDEOS,
      number: 49,
      icon: 'photo',
      // word out
    },
    {
      title:
        'I know how to set the search engine optimisation (SEO) for content and how to use SEO images',
      code: skillsCodes.SET_SEO,
      number: 50,
      icon: 'photo',
      // word out
    },
    {
      title: 'I know how to make sure content (text and media) is accessible',
      code: skillsCodes.MAKE_SURE_CONTENT_IS_ACCESSIBLE,
      number: 51,
      icon: 'knowledge',
      // word out
    },

    //     Handing information and data
    // Find, manage and store digital information and data securely
    {
      title: 'I can effectively name and store files',
      code: skillsCodes.EFFECTIVELY_NAME_AND_STORE_FILES,
      number: 52,
      icon: 'file',
      // finance , meetings, data
    },
    {
      title: 'I know how to handle personal data',
      code: skillsCodes.HANDLE_PERSONAL_DATA,
      number: 53,
      icon: 'file',
      // finance , meetings, data
    },
    {
      title: 'I know how to respond to data subject access requests',
      code: skillsCodes.RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS,
      number: 54,
      icon: 'knowledge',
      // finance , data
    },
    {
      title:
        'I know how to complete a review on any new processes or systems to ensure it is GDPR aligned',
      code: skillsCodes.REVIEW_SYSTEMS_TO_ENSURE_IT_IS_GDPR_ALIGNED,
      number: 55,
      icon: 'checklist',
      // data
    },
    {
      title: 'I know how to keep a backup of data',
      code: skillsCodes.KEEP_A_BACKUP_OF_DATA,
      number: 56,
      icon: 'file',
      // finance , data
    },

    // Completing tasks using digital tools/services
    // Using tools for everyday tasks in your volunteering
    {
      title: 'I can locate information using a search tool',
      code: skillsCodes.LOCATE_INFORMATION_USING_SEARCH_TOOL,
      number: 57,
      icon: 'checklist',
      // basic, programme , events , meetings
    },
    {
      title: 'I can use Online Scout Manager',
      code: skillsCodes.USE_ONLINE_SCOUT_MANAGER,
      number: 58,
      icon: 'knowledge',
      // programme , events , finance , word out, working together
    },
    {
      title: 'I can use the Scouts Programme planning tool and activity finder',
      code: skillsCodes.USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL,
      number: 59,
      icon: 'checklist',
      // programme
    },
    {
      title: 'I can use Compass',
      code: skillsCodes.I_CAN_USE_COMPASS,
      number: 60,
      icon: 'knowledge',
      // data , word out
    },
    {
      title: 'I can use digital maps (e.g. Google Maps)',
      code: skillsCodes.USE_DIGITAL_MAPS,
      number: 61,
      icon: 'knowledge',
      // events , meetings ,
    },
    {
      title:
        'I can place orders online for products and services (in line with procurement policies and processes)',
      code: skillsCodes.PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES,
      number: 62,
      icon: 'calculator',
      // events , finance
    },
    {
      title:
        'I can create bookings online for things like travel and events (in line with procurement policies and processes)',
      code: skillsCodes.CREATE_BOOKINGS_ONLINE,
      number: 63,
      icon: 'calculator',
      // events , finance
    },
  ];

  const data = [
    {
      /* keep it empty to make index works */
    },
  ];
  for (let i = 0; i < skills.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const skill = await createSkill(skills[i]);
    data.push(skill);
  }
  return data;
};

export default createSkills;

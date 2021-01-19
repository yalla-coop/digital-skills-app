import { query } from '../connect';

const createSkill = async (values) => {
  const sql = `
    INSERT INTO skills(
      title,
      code,
      description
    ) VALUES (
      $1,
      $2,
      $3
      )
    RETURNING *`;
  const res = await query(sql, [values.title, values.code, values.description]);
  return res.rows[0];
};

const createSkills = async () => {
  const skills = [
    // Foundation skills
    // The basic skills you need if you are not currently using digital technology

    {
      title: 'I can turn on a device',
      code: 'TURN_ON_DEVICE',
      number: 1,
      // basics
    },
    {
      title:
        'I can use the basic controls on my device e.g. turn up the volume.',
      code: 'DEVICE_BASIC_CONTROL',
      number: 2,
      // basics
    },
    {
      title:
        'I can use accessibility tools on my device to make it easier to use e.g. increase font size.',
      code: 'USE_ACCESSIBILITY_TOOL',
      number: 3,
      // basics
    },
    {
      title:
        'I can interact with the home screen on my device e.g. I can locate text messages.',
      code: 'INTERACT_WITH_THE_HOME_SCREEN',
      number: 4,
      // basics
    },
    {
      title:
        'I can connect my device to a safe and secure Wi-Fi network e.g. I can connect to Wi-Fi in my house.',
      code: 'CONNECT_DEVICE_TO_SAFE_WI_FI',
      number: 5,
      // basics
    },
    {
      title:
        'I know that my passwords and personal information need to be kept safely as they have a value to others e.g. I don’t write my passwords down or tell them to anyone else.',
      code: 'KEEP_PERSONAL_INFORMATION_SAFE',
      number: 6,
      // basics
    },
    {
      title: 'I can update and change my password when prompted to do so',
      code: 'CHANGE_MY_PASSWORD_WHEN_PROMPTED',
      number: 7,
      // basics
    },
    {
      title: 'I can send a messages',
      code: 'SEND_MESSAGES',
      number: 8,
      // basics
    },
    {
      title: 'I can send, read and reply to emails',
      code: 'SEND_READ_REPLY_TO_EMAILS',
      number: 9,
      // basics
    },
    {
      title: 'I can use a digital calendar',
      code: 'USE_DIGITAL_CALENDAR',
      number: 10,
      // basics
    },

    // Be safe, legal and confident online
    // Act safely and responsibly in digital environments
    {
      title: 'I can create strong and secure passwords',
      code: 'CREATE_STRONG_PASSWORDS',
      number: 11,
      // basics
    },
    {
      title:
        'I understand that viruses can damage my computer and that security software should be used to prevent this',
      code: 'UNDERSTAND_VIRUSES_DAMAGE',
      number: 12,
      // basics
    },
    {
      title:
        'I understand that my online activity produces a permanent record which could be accessed and used by others both now and in the future',
      code: 'ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD',
      number: 13,
      // Finances / meetings /	Data / word out
    },
    {
      title:
        'I understand that I must not share other people’s data online without their consent',
      code: 'MUST_NOT_SHARE_OTHER_PEOPLE_DATA',
      number: 14,
      // Events / Finances /	Data
    },
    {
      title:
        'I can respond to requests for authentication for my online accounts and email',
      code: 'RESPOND_TO_REQUESTS_FOR_AUTHENTICATION',
      number: 15,
      //  Finances /	Data
    },
    {
      title:
        'I understand why it is important to keep my computer systems and security software up to date and I allow them to be updated when prompted',
      code: 'COMPUTER_SYSTEMS_UP_TO_DATE',
      number: 16,
      //  basics /	Data
    },
    {
      title:
        'I understand online material is subject to copyright and cannot be used without the owners’ permission',
      code: 'ONLINE_MATERIAL_COPYRIGHT',
      number: 17,
      //  Data / word out
    },
    {
      title:
        'I can tell an official, legitimate website or email from a potentially dangerous one',
      code: 'TELL_OFFICIAL_WEBSITE_OR_EMAIL',
      number: 18,
      //  basic / meeting
    },
    {
      title:
        'I can alert the relevant person in my organisation to potential data breaches',
      code: 'ALERT_RELEVANT_PERSON_TO_DATA_BREACHES',
      number: 19,
      //  data
    },
    {
      title:
        'I understand GDPR and can apply it to my role within my organisation',
      code: 'GDPR_IN_ORGANISATION',
      number: 20,
      //  data
    },
    {
      title: 'I know how to fact-check information that I find online',
      code: 'FACT_CHECK_INFORMATION',
      number: 21,
      //  basic , word out
    },
    {
      title: 'I know how to report bad content',
      code: 'REPORT_BAD_CONTENT',
      number: 22,
      //  word out
    },
    {
      title:
        'I know how to use the internet to learn how to use digital tools and services and increase my skills',
      code: 'USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS',
      number: 23,
      //  basic
    },
    // Digital wellbeing and resilience
    // Awareness of how being online can make us feel and looking after ourselves and others when online.
    {
      title:
        'I can recognise if I am being affected physically or mentally by being online',
      code: 'RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE',
      number: 24,
      //  basic
    },
    {
      title:
        'I am aware of my behaviours and value and activity avoid saying something online that I would not say face to face',
      code: 'AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE',
      number: 25,
      //  basic
    },
    {
      title:
        'I am kind and caring in online interactions, paying attention to others and showing empathy',
      code: 'KIND_AND_CARING_IN_ONLINE_INTERACTIONS',
      number: 26,
      //  basic
    },
    {
      title: 'I know that not everyone is digitally enabled',
      code: 'NOT_EVERYONE_IS_DIGITALLY_ENABLED',
      number: 27,
      //  basic , work together
    },
    {
      title: 'I can share digital skills with others',
      code: 'SHARE_DIGITAL_SKILLS_WITH_OTHERS',
      number: 28,
      //  meeting , data , work together
    },
    {
      title:
        'I know when something has gone wrong and are able to solve simple problems',
      code: 'KNOW_WHEN_SOMETHING_HAS_GONE_WRONG',
      number: 29,
      //  finance , meetings , data, work together
    },
    {
      title:
        'I know how to look online and who to contact for the help and support',
      code: 'LOOK_ONLINE_AND_CONTACT_FOR_HELP',
      number: 30,
      // basic , work together
    },

    // Communicating and collaboration
    // Communicate, collaborate and share online
    {
      title: 'I can write and edit simple documents',
      code: 'WRITE_AND_EDIT_SIMPLE_DOCUMENTS',
      number: 31,
      // basic , word out
    },
    {
      title: 'I can apply simple formatting to bodies of text',
      code: 'SIMPLE_FORMATTING_TEXT',
      number: 32,
      // data , word out
    },
    {
      title: 'I can use spreadsheets to process data',
      code: 'USE_SPREADSHEETS_TO_PROCESS_DATA',
      number: 33,
      // programme , finance , data
    },
    {
      title: 'I can share documents with others',
      code: 'SHARE_DOCUMENTS_WITH_OTHERS',
      number: 34,
      // data , word out
    },
    {
      title: 'I can work on a shared document with others',
      code: 'WORK_ON_SHARED_DOCUMENT',
      number: 35,
      // meeting , work together
    },
    {
      title: 'I know when to use different communication methods',
      code: 'USE_DIFFERENT_COMMUNICATION_METHODS',
      number: 36,
      // meetings , working together
    },
    {
      title:
        'I can use email and messaging to communicate with multiple contacts',
      code: 'EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS',
      number: 37,
      // programme, events , word out , working together
    },

    {
      title:
        'I can use online collaboration tools (eg Office365/Teams/OneDrive, G-Suite/Google Drive, Dropbox)',
      code: 'USE_ONLINE_COLLABORATION_TOOLS',
      number: 38,
      // programme , events , finance , meeting  data , word out, working together
    },
    {
      title: 'I know how to use social media to interact with users',
      code: 'USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS',
      number: 39,
      // events ,  word out
    },
    {
      title:
        'I understand that the comments and views I share on social media or via email create a permanent, online record.',
      code: 'COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD',
      number: 40,
      // meeting ,  word out
    },
    {
      title: 'I can join video calls/meetings',
      code: 'JOIN_VIDEO_CALLS_MEETINGS',
      number: 41,
      // events ,  meetings, working together
    },
    {
      title: 'I can run video calls/meetings',
      code: 'RUN_VIDEO_CALLS_MEETINGS',
      number: 42,
      // programme ,  events, meetings , working together
    },
    {
      title: 'I can ensure online meetings are set up securely',
      code: 'ENSURE_ONLINE_MEETINGS_ARE_SECURELY',
      number: 43,
      // basic, events, meetings , working together
    },
    {
      title: 'I can share my screen to present things',
      code: 'SHARE_SCREEN_TO_PRESENT',
      number: 44,
      // programme, meetings , working together
    },
    {
      title: 'I can run webinars for users',
      code: 'RUN_WEBINARS',
      number: 45,
      // events , meetings
    },
    {
      title:
        'I know how to use digital marketing techniques and tools to promote activities and events',
      code: 'USE_DIGITAL_MARKETING_TECHNIQUES',
      number: 46,
      // events , meetings, word out
    },

    // Producing and supporting digital content
    // Creating and maintaining usable and useful content.
    {
      title:
        'I can create engaging, mobile first and easy to use (inc plain English) content for users.',
      code: 'CREATE_ENGAGING_MOBILE_FIRST_CONTENT',
      number: 47,
      // meetings, word out
    },
    {
      title: 'I can take and use photos and videos',
      code: 'TAKE_AND_USE_PHOTOS_AND_VIDEOS',
      number: 48,
      // events, word out
    },
    {
      title: 'I can edit photos and videos',
      code: 'EDIT_PHOTOS_AND_VIDEOS',
      number: 49,
      // word out
    },
    {
      title:
        'I know how to set the search engine optimisation (SEO) for content and how to use SEO images',
      code: 'SET_SEO',
      number: 50,
      // word out
    },
    {
      title: 'I know how to make sure content (text and media) is accessible',
      code: 'MAKE_SURE_CONTENT_IS_ACCESSIBLE',
      number: 51,
      // word out
    },

    //     Handing information and data
    // Find, manage and store digital information and data securely
    {
      title: 'I can effectively name and store files',
      code: 'EFFECTIVELY_NAME_AND_STORE_FILES',
      number: 52,
      // finance , meetings, data
    },
    {
      title: 'I know how to handle personal data',
      code: 'HANDLE_PERSONAL_DATA',
      number: 53,
      // finance , meetings, data
    },
    {
      title: 'I know how to respond to data subject access requests',
      code: 'RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS',
      number: 54,
      // finance , data
    },
    {
      title:
        'I know how to complete a review on any new processes or systems to ensure it is GDPR aligned',
      code: 'REVIEW_SYSTEMS_TO_ENSURE_IT_IS_GDPR_ALIGNED',
      number: 55,
      // data
    },
    {
      title: 'I know how to keep a backup of data',
      code: 'KEEP_A_BACKUP_OF_DATA',
      number: 56,
      // finance , data
    },

    // Completing tasks using digital tools/services
    // Using tools for everyday tasks in your volunteering
    {
      title: 'I can locate information using a search tool',
      code: 'LOCATE_INFORMATION_USING_SEARCH_TOOL',
      number: 57,
      // programme , events , meetings
    },
    {
      title: 'I can use Online Scout Manager',
      code: 'USE_ONLINE_SCOUT_MANAGER',
      number: 58,
      // programme , events , finance , word out, working together
    },
    {
      title: 'I can use the Scouts Programme planning tool and activity finder',
      code: 'USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL',
      number: 59,
      // programme
    },
    {
      title: 'I can use Compass',
      code: 'I_CAN_USE_COMPASS',
      number: 60,
      // data , word out
    },
    {
      title: 'I can use digital maps (e.g. Google Maps)',
      code: 'USE_DIGITAL_MAPS',
      number: 61,
      // events , meetings ,
    },
    {
      title:
        'I can place orders online for products and services (in line with procurement policies and processes)',
      code: 'PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES',
      number: 62,
      // events , finance
    },
    {
      title:
        'I can create bookings online for things like travel and events (in line with procurement policies and processes)',
      code: 'CREATE_BOOKINGS_ONLINE',
      number: 63,
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

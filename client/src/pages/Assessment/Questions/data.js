import {
  skillAreasCodes,
  skillsCodes as SC,
} from '../../../constants/data-types';

export const flowQ = {
  question: 'What is your main reason for being here?',
  options: [
    {
      title: 'I want to learn the basics',
      description:
        'Make sure you have the general skills needed to use digital for your volunteering',
      helper:
        'e.g. creating a strong password, how to use search engines, writing and editing content',
      color: 'teal',
      value: 'basics',
    },
    {
      title: 'I want to improve my skills',
      description:
        'Build on your existing skills to really make the most of digital for your volunteering tasks',
      helper: 'e.g. running a webinar, understanding GDPR, using SEO',
      color: 'purple',
      value: 'improveSkills',
    },
  ],
};

export const skillAreaQ = {
  question: 'Which tasks do you do as part of your volunteering?',
  helper: '(select as many as you like)',
  options: [
    {
      label: 'I plan programmes and activites',
      value: skillAreasCodes.PLANNING_PROGRAMME_DIGITALLY,
    },
    {
      label: 'I run activities and events',
      value: skillAreasCodes.PLANNING_EVENTS_AND_ACTIVITIES,
    },
    {
      label: 'I look after the money and funding',
      value: skillAreasCodes.DIGITAL_FINANCES,
    },
    {
      label: 'I plan and run meetings and training',
      value: skillAreasCodes.DIGITAL_MEETINGS_AND_TRAINING,
    },
    { label: 'I look after data', value: skillAreasCodes.DATA_AND_DOCUMENTS },
    {
      label: 'I promote and share what we do',
      value: skillAreasCodes.GETTING_THE_WORD_OUT,
    },
    {
      label: 'I work together and colloborate with others',
      value: skillAreasCodes.WORKING_TOGETHER,
    },
  ],
};

export const questions = {
  // BASIC
  // optionsEqualSkills example
  basic1: {
    question: 'Select which of these tasks you are able to do',
    type: 'optionsEqualSkills',
    options: [
      { label: 'I can turn on a device', value: SC.TURN_ON_DEVICE },
      {
        label:
          'I can use the basic controls on my device e.g. turn up the volume',
        value: SC.DEVICE_BASIC_CONTROL,
      },
      {
        label:
          'I know how to use tools that make my device easier to use (e.g. increase font size on a website page)',
        value: SC.USE_ACCESSIBILITY_TOOL,
      },
      {
        label: 'I can connect my device to a Wi-Fi network like in my house',
        value: SC.CONNECT_DEVICE_TO_SAFE_WI_FI,
      },
      {
        label: 'I can send messages',
        value: SC.SEND_MESSAGES,
      },
      {
        label: 'I can send, read and reply to emails',
        value: SC.SEND_READ_REPLY_TO_EMAILS,
      },
      {
        label: 'I can use a digital calendar',
        value: SC.USE_DIGITAL_CALENDAR,
      },
      {
        label: 'I can update and change my password when prompted to do so',
        value: SC.CHANGE_MY_PASSWORD_WHEN_PROMPTED,
      },
    ],
  },
  basic2: {
    question: 'Select which of these statements if any you think apply to you',
    type: 'optionsEqualSkills',
    options: [
      {
        label:
          'I know passwords and personal information need to be kept safe as they can be misused by other people',
        value: SC.KEEP_PERSONAL_INFORMATION_SAFE,
      },
      {
        label:
          'I understand viruses can damage my computer and security software should be used',
        value: SC.UNDERSTAND_VIRUSES_DAMAGE,
      },
      {
        label:
          'I understand why you need to keep computer systems and security software up to date and I allow them to be updated when prompted',
        value: SC.COMPUTER_SYSTEMS_UP_TO_DATE,
      },
      {
        label:
          'I can tell an official website or email from a potentially dangerous one',
        value: SC.TELL_OFFICIAL_WEBSITE_OR_EMAIL,
      },
      {
        label: 'I know how to fact-check information I find online',
        value: SC.FACT_CHECK_INFORMATION,
      },
      {
        label:
          'I know how to move around and select things on the home screen of my device',
        value: SC.INTERACT_WITH_THE_HOME_SCREEN,
      },
    ],
  },
  // singleSkillPoints example
  basic3: {
    question:
      'How do you use the internet to use digital tools and services, and find out things you might not know how to do?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'I use a search engine (e.g. Google) and type in some keywords',
        value: 1,
      },
      {
        label: 'I ask people and they show me useful websites',
        value: 0,
      },
      {
        label: `I don't!`,
        value: 0,
      },
    ],
    skills: [SC.USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS],
  },
  // multiSkillMatrix
  basic4: {
    question: 'How would you rate your skill on each of these platforms',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS]: 1,
      [SC.SIMPLE_FORMATTING_TEXT]: 3,
      [SC.USE_SPREADSHEETS_TO_PROCESS_DATA]: 2,
    },
    options: [
      {
        label: 'Never used it before',
        value: 'Never used it before',
        points: 0,
      },
      {
        label: 'I could do the basic things like enter and edit words',
        value: 'I could do the basic things like enter and edit words',
        points: 1,
      },
      {
        label: 'I do quite a lot like print, formatting etc',
        value: 'I do quite a lot like print, formatting etc',
        points: 2,
      },
      {
        label: 'I can do everything - I am Bill Gates!',
        value: 'I can do everything - I am Bill Gates!',
        points: 3,
      },
    ],
    rows: [
      {
        label: 'Microsoft Word',
        value: 'word',
        skills: [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS, SC.SIMPLE_FORMATTING_TEXT],
      },
      {
        label: 'Google Docs',
        value: 'googleDocs',
        skills: [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS, SC.SIMPLE_FORMATTING_TEXT],
      },
      {
        label: 'Microsoft Excel',
        value: 'excel',
        skills: [SC.USE_SPREADSHEETS_TO_PROCESS_DATA],
      },
      {
        label: 'Google Sheets',
        value: 'googleSheets',
        skills: [SC.USE_SPREADSHEETS_TO_PROCESS_DATA],
      },
    ],
  },
  basic5: {
    question:
      'With so much going on online now, it is becoming more important than ever to be aware of how it affects our wellbeing. Select which of these statements if any apply to you',
    type: 'optionsEqualSkills',
    options: [
      {
        label:
          'I can recognise if I am being affected physically or mentally by being online',
        value: SC.RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE,
      },
      {
        label: 'I know that not everyone is digitally enabled',
        value: SC.NOT_EVERYONE_IS_DIGITALLY_ENABLED,
      },
      {
        label:
          'I know how to look online to find someone to contact for help and support',
        value: SC.LOOK_ONLINE_AND_CONTACT_FOR_HELP,
      },
      {
        label: 'I am kind and caring in online interactions',
        value: SC.KIND_AND_CARING_IN_ONLINE_INTERACTIONS,
      },
    ],
  },
  basic6: {
    question:
      "Have you ever said something online to someone that you wouldn't have said if you were face to face?",
    requiredPoints: 1,
    type: 'singleSkillPoints',
    options: [
      {
        label: 'Yes',
        value: 0,
      },
      {
        label: 'Possibly',
        value: 0,
      },
      {
        label: `Not sure, I've not thought about it`,
        value: 0,
      },
      {
        label: `No`,
        value: 1,
      },
      {
        label: `I don't understand`,
        value: 0,
      },
    ],
    skills: [SC.AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE],
  },
  basic7: {
    question: 'How do you rate your experience with these search tools?',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.LOCATE_INFORMATION_USING_SEARCH_TOOL]: 3,
      [SC.USE_DIGITAL_MAPS]: 2,
    },
    options: [
      {
        label: 'Never',
        points: 0,
        value: 'never',
      },
      {
        label: 'Not used it',
        points: 0,
        value: 'not Used It',
      },
      {
        label: 'Not used it but know how',
        points: 1,
        value: 'knowHow',
      },
      {
        label: 'Regularly',
        points: 2,
        value: 'regular',
      },
      {
        label: 'I can use it but would like to learn more',
        points: -5,
        value: 'learnMore',
      },
    ],
    rows: [
      {
        label: 'Google',
        value: 'google',
        skills: [SC.LOCATE_INFORMATION_USING_SEARCH_TOOL],
      },
      {
        label: 'Yahoo',
        value: 'yahoo',
        skills: [SC.LOCATE_INFORMATION_USING_SEARCH_TOOL],
      },
      {
        label: 'Bing',
        value: 'bing',
        skills: [SC.LOCATE_INFORMATION_USING_SEARCH_TOOL],
      },
      {
        label: 'Google Maps',
        value: 'googleMaps',
        skills: [SC.USE_DIGITAL_MAPS],
      },
      {
        label: 'Apple Maps',
        value: 'appleMaps',
        skills: [SC.USE_DIGITAL_MAPS],
      },
    ],
  },
  basic8: {
    question: `Please provide an example of what you would consider a secure password (do not enter any password you actually use!)`,
    type: 'uniquePassword',
    skills: [SC.CREATE_STRONG_PASSWORDS],
  },

  // GENERAL
  general1: {
    question: 'What experience do you have with each of these tools?',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.JOIN_VIDEO_CALLS_MEETINGS]: 4,
      [SC.RUN_VIDEO_CALLS_MEETINGS]: 7,
    },
    options: [
      {
        label: 'I can set up a video call on it',
        value: 'I can set up a video call on it',
        points: 3,
      },
      {
        label: 'I can join video calls on it',
        value: 'I can join video calls on it',
        points: 2,
      },
      {
        label: 'Not used it but know how',
        value: 'Not used it but know how',
        points: 1,
      },
      {
        label: 'Not used it',
        value: 'Not used it',
        points: 0,
      },
      {
        label: 'Never heard of it!',
        value: 'Never heard of it!',
        points: 0,
      },
    ],
    rows: [
      {
        label: 'Zoom',
        value: 'zoom',
        skills: [SC.JOIN_VIDEO_CALLS_MEETINGS, SC.RUN_VIDEO_CALLS_MEETINGS],
      },
      {
        label: 'Google Meet / Hangout',
        value: 'google',
        skills: [SC.JOIN_VIDEO_CALLS_MEETINGS, SC.RUN_VIDEO_CALLS_MEETINGS],
      },
      {
        label: 'Skype',
        value: 'skype',
        skills: [SC.JOIN_VIDEO_CALLS_MEETINGS, SC.RUN_VIDEO_CALLS_MEETINGS],
      },
      {
        label: 'Teams',
        value: 'teams',
        skills: [SC.JOIN_VIDEO_CALLS_MEETINGS, SC.RUN_VIDEO_CALLS_MEETINGS],
      },
    ],
  },
  general2: {
    question:
      'Sending messages or emails to multiple people at once can be a great way of planning quickly and easily! Select if you have done this on any of the tools below',
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: 'Gmail',
        value: 1,
      },
      {
        label: 'Outlook',
        value: 1,
      },
      {
        label: 'Another email provider',
        value: 1,
      },
      {
        label: 'WhatsApp',
        value: 1,
      },
      {
        label: 'Facebook Messenger',
        value: 1,
      },
      {
        label: 'Another messaging app',
        value: 1,
      },
    ],
    skills: [SC.EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS],
  },
  // example of question that has conditional skills
  general3: {
    question:
      'Have you ever shared your screen during a video call/meeting to present something?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Yes',
        value: 1,
      },
      {
        label: 'Yes but not confident',
        value: 1,
      },
      {
        label: 'No',
        value: 0,
      },
      {
        label: 'What?',
        value: 0,
      },
    ],
    skills: [SC.SHARE_SCREEN_TO_PRESENT],
    conditionalSkills: [SC.JOIN_VIDEO_CALLS_MEETINGS],
  },
  general4: {
    question:
      'Have you ever used any of these tools to work online with others?',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.USE_ONLINE_COLLABORATION_TOOLS]: 3,
    },
    options: [
      {
        label: 'Regularly',
        value: 'Regularly',
        points: 3,
      },
      {
        label: 'Sometimes',
        value: 'Sometimes',
        points: 2,
      },
      {
        label: 'No but I know how to',
        value: 'No but I know how to',
        points: 1,
      },
      {
        label: 'No',
        value: 'No',
        points: 0,
      },
      {
        label: 'Yes, but I want to be better',
        value: 'Yes, but I want to be better',
        points: -5,
      },
    ],
    rows: [
      {
        label: 'Office 365',
        value: 'office',
        skills: [SC.USE_ONLINE_COLLABORATION_TOOLS],
      },
      {
        label: 'Teams',
        value: 'teams',
        skills: [SC.USE_ONLINE_COLLABORATION_TOOLS],
      },
      {
        label: 'OneDrive',
        value: 'oneDrive',
        skills: [SC.USE_ONLINE_COLLABORATION_TOOLS],
      },
      {
        label: 'GSuite / Google Drive',
        value: 'google',
        skills: [SC.USE_ONLINE_COLLABORATION_TOOLS],
      },
      {
        label: 'Dropbox',
        value: 'dropbox',
        skills: [SC.USE_ONLINE_COLLABORATION_TOOLS],
      },
    ],
    conditionalSkills: [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS],
  },
  general5: {
    question: 'How would you rate your skill on each of these platforms',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS]: 3,
    },
    options: [
      {
        label: 'I post on it regularly',
        value: 'I post on it regularly',
        points: 2,
      },
      {
        label: `I don't use it much or at all but I know how to post something`,
        value: `I don't use it much or at all but I know how to post something`,
        points: 1,
      },
      {
        label: `I use it but don't really know what I'm doing!`,
        value: `I don't use it much or at all but I know how to post something`,
        points: 0,
      },
      {
        label: 'Never used it',
        value: `I don't use it much or at all but I know how to post something`,
        points: 0,
      },
    ],
    rows: [
      {
        label: 'Facebook',
        value: 'facebook',
        skills: [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS],
      },
      {
        label: 'Twitter',
        value: 'twitter',
        skills: [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS],
      },
      {
        label: 'Instagram',
        value: 'instagram',
        skills: [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS],
      },
      {
        label: 'TikTok',
        value: 'tiktok',
        skills: [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS],
      },
    ],
  },
  // multiSkillPoints example
  general6: {
    question:
      'How much of a budding photographer / video maker are you? Select all the statements below that apply to you',
    type: 'multiSkillPoints',
    requiredPoints: {
      [SC.TAKE_AND_USE_PHOTOS_AND_VIDEOS]: 2,
      [SC.EDIT_PHOTOS_AND_VIDEOS]: 2,
    },
    options: [
      {
        label: 'I can take and use photos',
        value: SC.TAKE_AND_USE_PHOTOS_AND_VIDEOS,
        points: 1,
      },
      {
        label: 'I can take and use videos',
        value: SC.TAKE_AND_USE_PHOTOS_AND_VIDEOS,
        points: 1,
      },
      {
        label: 'I can edit photos',
        value: SC.EDIT_PHOTOS_AND_VIDEOS,
        points: 2,
      },
      {
        label: 'I can edit videos',
        value: SC.EDIT_PHOTOS_AND_VIDEOS,
        points: 2,
      },
      {
        label: `I can do it all - I'm the next Spielberg!`,
        value: 'all',
        points: 5,
      },
    ],
  },
  general7: {
    question:
      'What experience do you have ordering things online (e.g. products and services)',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Do this regularly for both personal and work',
        value: 2,
      },
      {
        label: 'I am able to do this for both personal and work',
        value: 1,
      },
      {
        label: `I buy things for myself but wouldn't be comfortable doing it for an organisation I volunteer for`,
        value: 0,
      },
      {
        label: `A little bit but it makes me nervous`,
        value: 0,
      },
      {
        label: `Never done it before`,
        value: 0,
      },
    ],
    skills: [SC.PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES],
  },
  general8: {
    question:
      'What experience do you have making bookings online (e.g. accommodation, travel, events)',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Do this regularly for both personal and work',
        value: 2,
      },
      {
        label: 'I am able to do this for both personal and work',
        value: 1,
      },
      {
        label: `I buy things for myself but wouldn't be comfortable doing it for an organisation I volunteer for`,
        value: 0,
      },
      {
        label: `A little bit but it makes me nervous`,
        value: 0,
      },
      {
        label: `Never done it before`,
        value: 0,
      },
    ],
    skills: [SC.CREATE_BOOKINGS_ONLINE],
  },
  general9: {
    question: `When is it ok to share other people's data online without their online consent?`,
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: `If you're related to them`,
        value: 0,
      },
      {
        label: `If you've asked them in person`,
        value: 0,
      },
      {
        label: `Never`,
        value: 1,
      },
      {
        label: `I don't understand the question`,
        value: 0,
      },
    ],
    skills: [SC.MUST_NOT_SHARE_OTHER_PEOPLE_DATA],
    conditionalSkills: [
      SC.SIMPLE_FORMATTING_TEXT,
      SC.SHARE_DOCUMENTS_WITH_OTHERS,
    ],
  },
  general10: {
    question: `Do you know how to check that an online meeting has been set up securely?`,
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: `Yes`,
        value: 1,
      },
      {
        label: `No`,
        value: 0,
      },
      {
        label: `Not sure`,
        value: 0,
      },
    ],
    skills: [SC.ENSURE_ONLINE_MEETINGS_ARE_SECURELY],
    conditionalSkills: [SC.RUN_VIDEO_CALLS_MEETINGS],
  },
  general11: {
    question: `Have you ever set up a webinar?`,
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: `Regularly`,
        value: 2,
      },
      {
        label: `Yes`,
        value: 1,
      },
      {
        label: `Yes, but I'd like to learn more`,
        value: 0,
      },
      {
        label: `No`,
        value: 0,
      },
      {
        label: `I don't know what a webinar is`,
        value: 0,
      },
    ],
    skills: [SC.RUN_WEBINARS],
    conditionalSkills: [SC.RUN_VIDEO_CALLS_MEETINGS],
  },
  general12: {
    question:
      'What is your experience using digital marketing techniques and tools to promote activities and events?',
    type: 'singleSkillPoints',
    requiredPoints: 2,
    options: [
      {
        label: 'Do this regularly',
        value: 2,
      },
      {
        label: 'I am able to do this',
        value: 1,
      },
      {
        label: `I wouldn't be comfortable doing it for an organisation I volunteer for`,
        value: 0,
      },
      {
        label: `A little bit but it makes me nervous`,
        value: 0,
      },
      {
        label: `Never done it before`,
        value: 0,
      },
    ],
    skills: [SC.USE_DIGITAL_MARKETING_TECHNIQUES],
  },
  // singleSkillPointsMultiOption example
  general13: {
    question: 'Which of these happen whenever you do something online?',
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: 'A permanent record of my activity is produced',
        value: 1,
      },
      {
        label:
          'A record of my activity can be used by others now and in the future',
        value: 1,
      },
      {
        label: `A record of my activity is stored while I remain online`,
        value: 0,
      },
      {
        label: `Nothing`,
        value: 0,
      },
      {
        label: `I'm not sure`,
        value: 0,
      },
    ],
    skills: [SC.ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD],
  },
  general14: {
    question:
      'To make our accounts secure, often digital tools will require us to complete certain tasks to access our account. Which of these tasks have you successfully done before?',
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: 'Entered a verification code sent to my email address',
        value: 1,
      },
      {
        label: 'Entered a verification code sent to my phone',
        value: 1,
      },
      {
        label: `Used Google Authenticator`,
        value: 1,
      },
      {
        label: `Approved access via my phone`,
        value: 1,
      },
    ],
    skills: [SC.RESPOND_TO_REQUESTS_FOR_AUTHENTICATION],
  },
  // slider example
  general15: {
    question: `How much do you agree with this statement: I know when something has gone wrong either with a digital tool I'm using or online and I am able to solve simple problems`,
    type: 'slider',
    requiredPoints: 1,
    options: [
      {
        label: `Not confident`,
        value: 0,
      },
      {
        label: 'Not sure',
        value: 0,
      },
      {
        label: 'Confident',
        value: 1,
      },
    ],
    skills: [SC.KNOW_WHEN_SOMETHING_HAS_GONE_WRONG],
  },
  general16: {
    question: 'Select if you are able to do any of the tasks below',
    type: 'optionsEqualSkills',
    options: [
      {
        label: 'I can effectively name and store files',
        value: SC.EFFECTIVELY_NAME_AND_STORE_FILES,
      },
      {
        label: 'I know how to handle personal data',
        value: SC.HANDLE_PERSONAL_DATA,
      },
      {
        label: 'I know how to respond to data subject access requests',
        value: SC.RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS,
      },
      {
        label: 'I know how to keep a back up of data',
        value: SC.KEEP_A_BACKUP_OF_DATA,
      },
    ],
  },
  general17: {
    question: `If you wanted to share useful resources and information about digital skills, how would you do this?`,
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: `I don't know`,
        value: 0,
      },
      {
        label: `I would see if there's a share icon or button`,
        value: 1,
      },
      {
        label: `I would copy the URL and send this to them`,
        value: 1,
      },
      {
        label: `I would tell them about it personally`,
        value: 0,
      },
      {
        label: `I would post on social media`,
        value: 1,
      },
    ],
    skills: [SC.SHARE_DIGITAL_SKILLS_WITH_OTHERS],
  },
  general18: {
    question: `How confident are you to know when to use different communication methods depending on the task and situation?`,
    type: 'slider',
    requiredPoints: 1,
    options: [
      {
        label: `Not confident`,
        value: 0,
      },
      {
        label: 'Not sure',
        value: 0,
      },
      {
        label: 'Confident',
        value: 1,
      },
    ],
    skills: [SC.USE_DIFFERENT_COMMUNICATION_METHODS],
  },
  general19: {
    question: `Which of these happen whenever you share a comment or opinion on social media or via email`,
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 1,
    options: [
      {
        label: `It creates a permanent record`,
        value: 1,
      },
      {
        label: `It creates a record that exists for 12 months`,
        value: 0,
      },
      {
        label: `It creates a record unless I mark it as private`,
        value: 0,
      },
      {
        label: `I get lots of likes!`,
        value: 0,
      },
      {
        label: `I am not 100% sure`,
        value: 0,
      },
    ],
    skills: [SC.COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD],
  },
  general20: {
    question: 'Rate your ability at each of these tasks',
    type: 'multiSkillMatrix',
    requiredPoints: {
      [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT]: 5,
      [SC.MAKE_SURE_CONTENT_IS_ACCESSIBLE]: 2,
    },
    options: [
      {
        label: 'Very good',
        value: 'Very good',
        points: 2,
      },
      {
        label: 'OK',
        value: 'OK',
        points: 1,
      },
      {
        label: 'Not good',
        value: 'Not good',
        points: 0,
      },
      {
        label: 'Never had to do it',
        value: 'Not good',
        points: 0,
      },
      {
        label: 'Not sure',
        value: 'Not good',
        points: 0,
      },
    ],
    rows: [
      {
        label: 'Creating engaging writteng content for users',
        value: 'writtenContent',
        skills: [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT],
      },
      {
        label: 'Creating engaging visual content for useres',
        value: 'visualContent',
        skills: [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT],
      },
      {
        label: 'Create content that is designed to be mobile first',
        value: 'mobileFirst',
        skills: [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT],
      },
      {
        label: 'Creating content that is easy to understand',
        value: 'understand',
        skills: [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT],
      },
      {
        label: 'Making accessible content',
        value: 'accessible',
        skills: [SC.MAKE_SURE_CONTENT_IS_ACCESSIBLE],
      },
    ],
    conditionalSkills: [
      SC.SIMPLE_FORMATTING_TEXT,
      SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS,
      SC.NOT_EVERYONE_IS_DIGITALLY_ENABLED,
    ],
  },
  general21: {
    question: `When can you use online material? `,
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: `If it is explicitly stated as having a free to use licence`,
        value: 1,
      },
      {
        label: `If I get the written permission of the owner`,
        value: 1,
      },
      {
        label: `If I know the owner`,
        value: 0,
      },
      {
        label: `If it is on a public platform like Facebook, Google or Twitter`,
        value: 0,
      },
      {
        label: `If I do not intend to use it for commercial purpose`,
        value: 0,
      },
    ],
    skills: [SC.ONLINE_MATERIAL_COPYRIGHT],
  },
  general22: {
    question:
      'Do you know who and how to alert the relevant person in your organisation to potential data breaches?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Definitely',
        value: 1,
      },
      {
        label: 'Maybe',
        value: 0,
      },
      {
        label: `I'm not sure`,
        value: 0,
      },
      {
        label: `No`,
        value: 0,
      },
      {
        label: `I don't know what a data breach is`,
        value: 0,
      },
    ],
    skills: [SC.ALERT_RELEVANT_PERSON_TO_DATA_BREACHES],
  },
  general23: {
    question: 'How do you rate your knowledge of GDPR?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: `I don't know what it is`,
        value: 0,
      },
      {
        label:
          'I have heard about it but never had to do anything to do with it',
        value: 0,
      },
      {
        label: `I have used it in my organisation but I need to learn more`,
        value: 0,
      },
      {
        label: `I apply GDPR in my volunteering role everyday`,
        value: 1,
      },
    ],
    skills: [SC.GDPR_IN_ORGANISATION],
  },
  general24: {
    question: 'How have you shared documents with others in the past?',
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: 'I print off a copy and give it to them',
        value: 0,
      },
      {
        label: 'I email them an attachment',
        value: 1,
      },
      {
        label: `I use a sharing tool (e.g. WeTransfer)`,
        value: 1,
      },
      {
        label: `I click the share button on the document if it is available`,
        value: 1,
      },
      {
        label: `I have never shared digtial documents before`,
        value: -5,
      },
      {
        label: `I'm not sure`,
        value: -5,
      },
    ],
    skills: [SC.SHARE_DOCUMENTS_WITH_OTHERS],
    conditionalSkills: [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS],
  },
  general25: {
    question: `There are tools online that let you work on a document at the same time. This means you can see people making changes in real time while you edit as well. Have you ever worked on a shared document before?`,
    type: 'slider',
    requiredPoints: 1,
    options: [
      {
        label: `No`,
        value: 0,
      },
      {
        label: 'Not sure',
        value: 0,
      },
      {
        label: 'Yes',
        value: 1,
      },
    ],
    skills: [SC.WORK_ON_SHARED_DOCUMENT],
    conditionalSkills: [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS],
  },
  general26: {
    question: `How would you rate your ability to  report bad content wherever your are online?`,
    type: 'slider',
    requiredPoints: 1,
    options: [
      {
        label: `Not good`,
        value: 0,
      },
      {
        label: 'OK',
        value: 0,
      },
      {
        label: 'Very good',
        value: 1,
      },
    ],
    skills: [SC.REPORT_BAD_CONTENT],
  },
  general27: {
    question:
      'SEO stands for search engine optimisation. Which of the following statements apply to you?',
    type: 'singleSkillPointsMultiOption',
    requiredPoints: 2,
    options: [
      {
        label: 'I can set the SEO for content',
        value: 1,
      },
      {
        label: 'I can add metatags for website pages',
        value: 1,
      },
      {
        label: `I know how to use SEO images`,
        value: 1,
      },
      {
        label: `I know how to use tools to measure the SEO performance of a website`,
        value: 1,
      },
      {
        label: `I've done some SEO but I'd like to learn more`,
        value: -5,
      },
      {
        label: `I haven't done any SEO before`,
        value: -5,
      },
    ],
    skills: [SC.SET_SEO],
    conditionalSkills: [
      SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS,
      SC.SIMPLE_FORMATTING_TEXT,
      SC.TAKE_AND_USE_PHOTOS_AND_VIDEOS,
    ],
  },

  // SCOUT SPECIFIC
  scout1: {
    question: 'Do you use Online Scout Manager?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Yes, all the time',
        value: 1,
      },
      {
        label: 'Yes but I would like to be better at it',
        value: 0,
      },
      {
        label: 'Sometimes',
        value: 0,
      },
      {
        label: 'No',
        value: 0,
      },
      {
        label: 'Never heard of it!',
        value: 0,
      },
    ],
    skills: [SC.USE_ONLINE_SCOUT_MANAGER],
  },
  scout2: {
    question:
      'Do you use the Scouts Programme planning tool and activity finder?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Yes, all the time',
        value: 1,
      },
      {
        label: 'Yes but I would like to be better at it',
        value: 0,
      },
      {
        label: 'Sometimes',
        value: 0,
      },
      {
        label: 'No',
        value: 0,
      },
      {
        label: 'Never heard of it!',
        value: 0,
      },
    ],
    skills: [SC.USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL],
  },
  scout3: {
    question: 'Do you use Compass?',
    type: 'singleSkillPoints',
    requiredPoints: 1,
    options: [
      {
        label: 'Yes, all the time',
        value: 1,
      },
      {
        label: 'Yes but I would like to be better at it',
        value: 0,
      },
      {
        label: 'Sometimes',
        value: 0,
      },
      {
        label: 'No',
        value: 0,
      },
      {
        label: 'Never heard of it!',
        value: 0,
      },
    ],
    skills: [SC.I_CAN_USE_COMPASS],
  },
};

// Questions put into array so in future can build out to include more qs per skill
export const questionsForSkills = {
  [SC.TURN_ON_DEVICE]: [questions.basic1],
  [SC.DEVICE_BASIC_CONTROL]: [questions.basic1],
  [SC.USE_ACCESSIBILITY_TOOL]: [questions.basic1],
  [SC.CONNECT_DEVICE_TO_SAFE_WI_FI]: [questions.basic1],
  [SC.SEND_MESSAGES]: [questions.basic1],
  [SC.SEND_READ_REPLY_TO_EMAILS]: [questions.basic1],
  [SC.USE_DIGITAL_CALENDAR]: [questions.basic1],
  [SC.CHANGE_MY_PASSWORD_WHEN_PROMPTED]: [questions.basic1],

  [SC.KEEP_PERSONAL_INFORMATION_SAFE]: [questions.basic2],
  [SC.UNDERSTAND_VIRUSES_DAMAGE]: [questions.basic2],
  [SC.COMPUTER_SYSTEMS_UP_TO_DATE]: [questions.basic2],
  [SC.TELL_OFFICIAL_WEBSITE_OR_EMAIL]: [questions.basic2],
  [SC.FACT_CHECK_INFORMATION]: [questions.basic2],
  [SC.INTERACT_WITH_THE_HOME_SCREEN]: [questions.basic2],

  [SC.USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS]: [questions.basic3],

  [SC.WRITE_AND_EDIT_SIMPLE_DOCUMENTS]: [questions.basic4],
  [SC.SIMPLE_FORMATTING_TEXT]: [questions.basic4],
  [SC.USE_SPREADSHEETS_TO_PROCESS_DATA]: [questions.basic4],

  [SC.RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE]: [questions.basic5],
  [SC.NOT_EVERYONE_IS_DIGITALLY_ENABLED]: [questions.basic5],
  [SC.LOOK_ONLINE_AND_CONTACT_FOR_HELP]: [questions.basic5],
  [SC.KIND_AND_CARING_IN_ONLINE_INTERACTIONS]: [questions.basic5],

  [SC.AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE]: [
    questions.basic6,
  ],

  [SC.LOCATE_INFORMATION_USING_SEARCH_TOOL]: [questions.basic7],
  [SC.USE_DIGITAL_MAPS]: [questions.basic7],

  [SC.CREATE_STRONG_PASSWORDS]: [questions.basic8],

  [SC.JOIN_VIDEO_CALLS_MEETINGS]: [questions.general1],
  [SC.RUN_VIDEO_CALLS_MEETINGS]: [questions.general1],

  [SC.EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS]: [questions.general2],

  [SC.SHARE_SCREEN_TO_PRESENT]: [questions.general3],

  [SC.USE_ONLINE_COLLABORATION_TOOLS]: [questions.general4],

  [SC.USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS]: [questions.general5],

  [SC.TAKE_AND_USE_PHOTOS_AND_VIDEOS]: [questions.general6],
  [SC.EDIT_PHOTOS_AND_VIDEOS]: [questions.general6],

  [SC.PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES]: [questions.general7],

  [SC.CREATE_BOOKINGS_ONLINE]: [questions.general8],

  [SC.MUST_NOT_SHARE_OTHER_PEOPLE_DATA]: [questions.general9],

  [SC.ENSURE_ONLINE_MEETINGS_ARE_SECURELY]: [questions.general10],

  [SC.RUN_WEBINARS]: [questions.general11],

  [SC.USE_DIGITAL_MARKETING_TECHNIQUES]: [questions.general12],

  [SC.ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD]: [questions.general13],

  [SC.RESPOND_TO_REQUESTS_FOR_AUTHENTICATION]: [questions.general14],

  [SC.KNOW_WHEN_SOMETHING_HAS_GONE_WRONG]: [questions.general15],

  [SC.EFFECTIVELY_NAME_AND_STORE_FILES]: [questions.general16],
  [SC.HANDLE_PERSONAL_DATA]: [questions.general16],
  [SC.RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS]: [questions.general16],
  [SC.KEEP_A_BACKUP_OF_DATA]: [questions.general16],

  [SC.SHARE_DIGITAL_SKILLS_WITH_OTHERS]: [questions.general17],

  [SC.USE_DIFFERENT_COMMUNICATION_METHODS]: [questions.general18],

  [SC.COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD]: [questions.general19],

  [SC.CREATE_ENGAGING_MOBILE_FIRST_CONTENT]: [questions.general20],
  [SC.MAKE_SURE_CONTENT_IS_ACCESSIBLE]: [questions.general20],

  [SC.ONLINE_MATERIAL_COPYRIGHT]: [questions.general21],

  [SC.ALERT_RELEVANT_PERSON_TO_DATA_BREACHES]: [questions.general22],

  [SC.GDPR_IN_ORGANISATION]: [questions.general23],

  [SC.SHARE_DOCUMENTS_WITH_OTHERS]: [questions.general24],

  [SC.WORK_ON_SHARED_DOCUMENT]: [questions.general25],

  [SC.REPORT_BAD_CONTENT]: [questions.general26],

  [SC.SET_SEO]: [questions.general27],

  // SCOUT SKILL TO QUESTIONS
  [SC.USE_ONLINE_SCOUT_MANAGER]: [questions.scout1],
  [SC.USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL]: [questions.scout2],
  [SC.I_CAN_USE_COMPASS]: [questions.scout3],
};

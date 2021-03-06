// MAKE SURE THIS FILE IS SYNCED WIth /home/ramy/scouts/server/database/init/types.sql
// NOTE!!! IF YOU CHANGE ANY TYPES HERE MAKE SURE YOU UPDATE THE SRC CONSTANTS FILE AS WELL

export const userRoles = {
  VOLUNTEER: 'VOLUNTEER',
  HQ: 'HQ',
};

export const learningPaths = {
  BASIC: 'BASIC',
  IMPROVE: 'IMPROVE',
};

export const skillStatuses = {
  ALREADY_HAS: 'ALREADY_HAS',
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS',
};

export const skillsCodes = {
  TURN_ON_DEVICE: 'TURN_ON_DEVICE',
  DEVICE_BASIC_CONTROL: 'DEVICE_BASIC_CONTROL',
  USE_ACCESSIBILITY_TOOL: 'USE_ACCESSIBILITY_TOOL',
  INTERACT_WITH_THE_HOME_SCREEN: 'INTERACT_WITH_THE_HOME_SCREEN',
  CONNECT_DEVICE_TO_SAFE_WI_FI: 'CONNECT_DEVICE_TO_SAFE_WI_FI',
  KEEP_PERSONAL_INFORMATION_SAFE: 'KEEP_PERSONAL_INFORMATION_SAFE',
  CHANGE_MY_PASSWORD_WHEN_PROMPTED: 'CHANGE_MY_PASSWORD_WHEN_PROMPTED',
  SEND_MESSAGES: 'SEND_MESSAGES',
  SEND_READ_REPLY_TO_EMAILS: 'SEND_READ_REPLY_TO_EMAILS',
  USE_DIGITAL_CALENDAR: 'USE_DIGITAL_CALENDAR',
  CREATE_STRONG_PASSWORDS: 'CREATE_STRONG_PASSWORDS',
  UNDERSTAND_VIRUSES_DAMAGE: 'UNDERSTAND_VIRUSES_DAMAGE',
  ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD:
    'ONLINE_ACTIVITY_PRODUCES_PERMANENT_RECORD',
  MUST_NOT_SHARE_OTHER_PEOPLE_DATA: 'MUST_NOT_SHARE_OTHER_PEOPLE_DATA',
  RESPOND_TO_REQUESTS_FOR_AUTHENTICATION:
    'RESPOND_TO_REQUESTS_FOR_AUTHENTICATION',
  COMPUTER_SYSTEMS_UP_TO_DATE: 'COMPUTER_SYSTEMS_UP_TO_DATE',
  ONLINE_MATERIAL_COPYRIGHT: 'ONLINE_MATERIAL_COPYRIGHT',
  TELL_OFFICIAL_WEBSITE_OR_EMAIL: 'TELL_OFFICIAL_WEBSITE_OR_EMAIL',
  ALERT_RELEVANT_PERSON_TO_DATA_BREACHES:
    'ALERT_RELEVANT_PERSON_TO_DATA_BREACHES',
  GDPR_IN_ORGANISATION: 'GDPR_IN_ORGANISATION',
  FACT_CHECK_INFORMATION: 'FACT_CHECK_INFORMATION',
  REPORT_BAD_CONTENT: 'REPORT_BAD_CONTENT',
  USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS:
    'USE_DIGITAL_TOOLS_AND_INCREASE_SKILLS',
  RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE:
    'RECOGNISE_IF_BEING_AFFECTED_BY_BEING_ONLINE',
  AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE:
    'AWARE_OF_BEHAVIOURS_AND_AVOID_SAYING_SOMETHING_ONLINE',
  KIND_AND_CARING_IN_ONLINE_INTERACTIONS:
    'KIND_AND_CARING_IN_ONLINE_INTERACTIONS',
  NOT_EVERYONE_IS_DIGITALLY_ENABLED: 'NOT_EVERYONE_IS_DIGITALLY_ENABLED',
  SHARE_DIGITAL_SKILLS_WITH_OTHERS: 'SHARE_DIGITAL_SKILLS_WITH_OTHERS',
  KNOW_WHEN_SOMETHING_HAS_GONE_WRONG: 'KNOW_WHEN_SOMETHING_HAS_GONE_WRONG',
  LOOK_ONLINE_AND_CONTACT_FOR_HELP: 'LOOK_ONLINE_AND_CONTACT_FOR_HELP',
  WRITE_AND_EDIT_SIMPLE_DOCUMENTS: 'WRITE_AND_EDIT_SIMPLE_DOCUMENTS',
  SIMPLE_FORMATTING_TEXT: 'SIMPLE_FORMATTING_TEXT',
  USE_SPREADSHEETS_TO_PROCESS_DATA: 'USE_SPREADSHEETS_TO_PROCESS_DATA',
  SHARE_DOCUMENTS_WITH_OTHERS: 'SHARE_DOCUMENTS_WITH_OTHERS',
  WORK_ON_SHARED_DOCUMENT: 'WORK_ON_SHARED_DOCUMENT',
  USE_DIFFERENT_COMMUNICATION_METHODS: 'USE_DIFFERENT_COMMUNICATION_METHODS',
  EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS:
    'EMAIL_AND_MESSAGING_MULTIPLE_CONTACTS',
  USE_ONLINE_COLLABORATION_TOOLS: 'USE_ONLINE_COLLABORATION_TOOLS',
  USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS:
    'USE_SOCIAL_MEDIA_TO_INTERACT_WITH_USERS',
  COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD:
    'COMMENTS_AND_VIEWS_CREATE_PERMANENT_ONLINE_RECORD',
  JOIN_VIDEO_CALLS_MEETINGS: 'JOIN_VIDEO_CALLS_MEETINGS',
  RUN_VIDEO_CALLS_MEETINGS: 'RUN_VIDEO_CALLS_MEETINGS',
  ENSURE_ONLINE_MEETINGS_ARE_SECURELY: 'ENSURE_ONLINE_MEETINGS_ARE_SECURELY',
  SHARE_SCREEN_TO_PRESENT: 'SHARE_SCREEN_TO_PRESENT',
  RUN_WEBINARS: 'RUN_WEBINARS',
  USE_DIGITAL_MARKETING_TECHNIQUES: 'USE_DIGITAL_MARKETING_TECHNIQUES',
  CREATE_ENGAGING_MOBILE_FIRST_CONTENT: 'CREATE_ENGAGING_MOBILE_FIRST_CONTENT',
  TAKE_AND_USE_PHOTOS_AND_VIDEOS: 'TAKE_AND_USE_PHOTOS_AND_VIDEOS',
  EDIT_PHOTOS_AND_VIDEOS: 'EDIT_PHOTOS_AND_VIDEOS',
  SET_SEO: 'SET_SEO',
  MAKE_SURE_CONTENT_IS_ACCESSIBLE: 'MAKE_SURE_CONTENT_IS_ACCESSIBLE',
  EFFECTIVELY_NAME_AND_STORE_FILES: 'EFFECTIVELY_NAME_AND_STORE_FILES',
  HANDLE_PERSONAL_DATA: 'HANDLE_PERSONAL_DATA',
  RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS:
    'RESPOND_TO_DATA_SUBJECT_ACCESS_REQUESTS',
  REVIEW_SYSTEMS_TO_ENSURE_IT_IS_GDPR_ALIGNED:
    'REVIEW_SYSTEMS_TO_ENSURE_IT_IS_GDPR_ALIGNED',
  KEEP_A_BACKUP_OF_DATA: 'KEEP_A_BACKUP_OF_DATA',
  LOCATE_INFORMATION_USING_SEARCH_TOOL: 'LOCATE_INFORMATION_USING_SEARCH_TOOL',
  USE_ONLINE_SCOUT_MANAGER: 'USE_ONLINE_SCOUT_MANAGER',
  USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL:
    'USE_THE_SCOUTS_PROGRAMME_PLANNING_TOOL',
  I_CAN_USE_COMPASS: 'I_CAN_USE_COMPASS',
  USE_DIGITAL_MAPS: 'USE_DIGITAL_MAPS',
  PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES:
    'PLACE_ORDERS_ONLINE_FOR_PRODUCTS_AND_SERVICES',
  CREATE_BOOKINGS_ONLINE: 'CREATE_BOOKINGS_ONLINE',
};

export const skillAreasCodes = {
  BASICS: 'BASICS',
  PLANNING_PROGRAMME_DIGITALLY: 'PLANNING_PROGRAMME_DIGITALLY',
  PLANNING_EVENTS_AND_ACTIVITIES: 'PLANNING_EVENTS_AND_ACTIVITIES',
  DIGITAL_FINANCES: 'DIGITAL_FINANCES',
  DIGITAL_MEETINGS_AND_TRAINING: 'DIGITAL_MEETINGS_AND_TRAINING',
  DATA_AND_DOCUMENTS: 'DATA_AND_DOCUMENTS',
  GETTING_THE_WORD_OUT: 'GETTING_THE_WORD_OUT',
  WORKING_TOGETHER: 'WORKING_TOGETHER',
};

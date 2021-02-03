export const GOOGLE_DOCS = 'Google Docs';
export const GOOGLE_SHEETS = 'Google Sheets';
export const GOOGLE_SLIDES = 'Google Slides';
export const MICROSOFT_WORD = 'Microsoft Word';
export const MICROSOFT_EXCEL = 'Microsoft Excel';
export const ZOOM = 'Zoom';
export const TEAMS = 'Microsoft Teams';
export const GOOGLE_MEET = 'Google Meet';
export const SKYPE = 'Skype';
export const DROPBOX = 'Dropbox';
export const ONEDRIVE = 'OneDrive';
export const SLACK = 'Slack';
export const IPHONE = 'iPhone';
export const IPAD = 'iPad';
export const ANDROID = 'Android device';
export const FACEBOOK = 'Facebook';
export const WHATSAPP = 'WhatsApp';
export const TWITTER = 'Twitter';
export const INSTAGRAM = 'Instagram';
export const GMAIL = 'Gmail';
export const OUTLOOK = 'Microsoft Outlook';

export const A_DIGITAL_TOOL = 'Any digital tool';

export const tools = [
  A_DIGITAL_TOOL,

  // DOCUMENTS
  GOOGLE_DOCS,
  GOOGLE_SHEETS,
  GOOGLE_SLIDES,
  MICROSOFT_WORD,
  MICROSOFT_EXCEL,
  // COMMUNICATION
  ZOOM,
  TEAMS,
  GOOGLE_MEET,
  SKYPE,
  SLACK,
  GMAIL,
  OUTLOOK,
  // CLOUD
  DROPBOX,
  ONEDRIVE,
  // DEVICES
  IPAD,
  IPHONE,
  ANDROID,
  // SOCIAL
  FACEBOOK,
  WHATSAPP,
  TWITTER,
  INSTAGRAM,
];

export const toolDropdownData = tools.map((tool) => ({
  label: tool,
  value: tool,
}));

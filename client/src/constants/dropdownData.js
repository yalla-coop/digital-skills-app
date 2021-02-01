export const GOOGLE_DOCS = 'Google Docs';
export const GOOGLE_SHEETS = 'Google Sheets';
export const GOOGLE_SLIDES = 'Google Slides';
export const MICROSOFT_WORD = 'Microsoft Word';
export const MICROSOFT_EXCEL = 'Microsoft Excel';
export const A_DIGITAL_TOOL = 'a digital tool';

export const tools = [
  GOOGLE_DOCS,
  GOOGLE_SHEETS,
  GOOGLE_SLIDES,
  MICROSOFT_WORD,
  MICROSOFT_EXCEL,
  A_DIGITAL_TOOL,
];

export const toolDropdownData = tools.map((tool) => ({
  label: tool,
  value: tool,
}));

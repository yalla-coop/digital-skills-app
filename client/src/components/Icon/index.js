import theme from './../../theme';

// ICONS
import Email from './icons/Email';
import Tick from './icons/Tick';
import LeftRow from './icons/LeftRow';
import Planning from './icons/Planning';
import Office from './icons/Office';
import BrokenLamp from './icons/BrokenLamp';
import Photo from './icons/Photo';
import File from './icons/File';
import TextFile from './icons/TextFile';
import Discussion from './icons/Discussion';
import Share from './icons/Share';
import Backup from './icons/Backup';
import Calendar from './icons/Calendar';
import DigitalTools from './icons/DigitalTools';
import Darts from './icons/Darts';
import Crown from './icons/Crown';
import Flash from './icons/Flash';
import Cup from './icons/Cup';
import Help from './icons/Help';
import Diamond from './icons/Diamond';
import Resources from './icons/Resources';
import SkillComplete from './icons/SkillComplete';
import ActivityComplete from './icons/ActivityComplete';
import ThankYou from './icons/ThankYou';
import Success from './icons/Success';
import Logo from './icons/Logo';
import Burger from './icons/Burger';
import Search from './icons/Search';
import Close from './icons/Close';
import Clock from './icons/Clock';
import Scouts from './icons/Scouts';
import Eye from './icons/Eye';
import RightRow from './icons/RightRow';
import Trophy from './icons/Trophy';
import ArrowUp from './icons/ArrowUp';
import Edit from './icons/Edit';
import Cross from './icons/Cross';
import CircleStar from './icons/CircleStar';
import CircleCrown from './icons/CircleCrown';
import ArrowDown from './icons/ArrowDown';
import CupWithFlash from './icons/CupWithFlash';
import DefaultSkill from './icons/DefaultSkill';
import Whatsapp from './icons/Whatsapp';
import Facebook from './icons/Facebook';
import Mail from './icons/Mail';
import TrophyStar from './icons/TrophyStar';
import Calculator from './icons/Calculator';
import Checklist from './icons/Checklist';
import Communication from './icons/Communication';
import Documents from './icons/Documents';
import FolderEmail from './icons/FolderEmail';
import Knowledge from './icons/Knowledge';
import Notification from './icons/Notification';

export const IconMap = {
  email: Email,
  leftRow: LeftRow,
  planning: Planning,
  office: Office,
  brokenLamp: BrokenLamp,
  photo: Photo,
  file: File,
  textFile: TextFile,
  discussion: Discussion,
  share: Share,
  backup: Backup,
  calendar: Calendar,
  darts: Darts,
  crown: Crown,
  flash: Flash,
  cup: Cup,
  diamond: Diamond,
  resources: Resources,
  skillComplete: SkillComplete,
  activityComplete: ActivityComplete,
  thankYou: ThankYou,
  success: Success,
  tick: Tick,
  logo: Logo,
  burger: Burger,
  search: Search,
  close: Close,
  scouts: Scouts,
  help: Help,
  rightRow: RightRow,
  clock: Clock,
  trophy: Trophy,
  edit: Edit,
  arrowDown: ArrowDown,
  cupWithFlash: CupWithFlash,
  eye: Eye,
  arrowUp: ArrowUp,
  cross: Cross,
  circleStar: CircleStar,
  circleCrown: CircleCrown,
  defaultSkill: DefaultSkill,
  whatsapp: Whatsapp,
  facebook: Facebook,
  mail: Mail,
  trophyStar: TrophyStar,
  calculator: Calculator,
  checklist: Checklist,
  communication: Communication,
  documents: Documents,
  folderEmail: FolderEmail,
  knowledge: Knowledge,
  notification: Notification,
  digitalTools: DigitalTools,
};

const Icon = (props) => {
  const { icon, color, m } = props;

  if (!IconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  return (
    <StyledIcon
      {...props}
      color={theme.colors[color] || color || 'currentColor'}
      style={{ margin: m || '0' }}
    />
  );
};

export default Icon;

import theme from './../../theme';

// ICONS
import Email from './icons/Email';
import Tick from './icons/Tick';
import LeftRow from './icons/LeftRow';
import Planning from './icons/Planning';
import Office from './icons/Office';
import BrokenLamp from './icons/BrokenLamp';
import Camera from './icons/Camera';
import File from './icons/File';
import TextFile from './icons/TextFile';
import Discussion from './icons/Discussion';
import ShareMedia from './icons/ShareMedia';
import Backup from './icons/Backup';
import Calendar from './icons/Calendar';
import Notebook from './icons/Notebook';
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

export const IconMap = {
  email: Email,
  leftRow: LeftRow,
  planning: Planning,
  office: Office,
  brokenLamp: BrokenLamp,
  camera: Camera,
  file: File,
  textFile: TextFile,
  discussion: Discussion,
  shareMedia: ShareMedia,
  backup: Backup,
  calendar: Calendar,
  notebook: Notebook,
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

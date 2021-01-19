import theme from './../../theme';

// ICONS
import Email from './icons/Email';
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

const Icon = (props) => {
  const { icon, color } = props;

  const IconMap = {
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
  };

  const StyledIcon = IconMap[icon];

  return (
    <StyledIcon
      {...props}
      color={theme.colors[color] || color || 'currentColor'}
    />
  );
};

export default Icon;

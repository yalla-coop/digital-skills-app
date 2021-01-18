import theme from './../../theme';

// ICONS
import Email from './icons/Email';
import LeftRow from './icons/LeftRow';

const Icon = (props) => {
  const { icon, color } = props;

  const IconMap = {
    email: Email,
    leftRow: LeftRow,
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

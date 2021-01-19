import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './style';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Button = (props) => {
  const {
    variant = 'primary',
    size = variant === 'secondary' ? 'small' : 'large',
    to,
    handleClick,
    loading,
    disabled,

    children,
    ...rest
  } = props;

  const history = useHistory();

  const onClick = (e) => {
    if (to) history.push(to);
    if (handleClick instanceof Function) handleClick(e);
  };

  return (
    <S.Button
      onClick={onClick}
      variant={variant}
      type="button"
      size={size}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <S.Loading variant={variant} indicator={antIcon} />}
      {typeof children === 'string' ? (
        <S.Label as="span" variant={variant} isLoading={loading}>
          {children}
        </S.Label>
      ) : (
        children
      )}
    </S.Button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined']),
  size: PropTypes.oneOf(['small', 'large']),
  to: PropTypes.string,
  handleClick: PropTypes.func,
  bgColor: PropTypes.oneOf(['blue', 'teal', 'purple']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;

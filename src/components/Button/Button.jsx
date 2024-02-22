import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, label, variant, disabled, className, icon, ...props }) => {
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && icon}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  props: PropTypes.array,
  className: PropTypes.string,
  icon: PropTypes.any,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

export default Button;

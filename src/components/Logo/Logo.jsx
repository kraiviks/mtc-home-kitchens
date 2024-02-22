import LogoSvg from '@assets/logo-ico.svg?react';
import styles from './Logo.module.scss';
import PropTypes from 'prop-types';

const Logo = ({ withLines }) => {
  return (
    <div className={styles.logoContainer}>
      {withLines && <div className={styles.line} />}
      <LogoSvg className={styles.logo} />
      {withLines && <div className={styles.line} />}
    </div>
  );
};

Logo.propTypes = {
  withLines: PropTypes.bool,
};

Logo.defaultProps = {
  withLines: false,
};

export default Logo;

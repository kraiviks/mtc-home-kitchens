import styles from './Navbar.module.scss';
import Logo from '@components/Logo';
import PropTypes from 'prop-types';

const Navbar = ({ mobile }) => {
  return (
    <nav className={`${styles.nav} ${mobile && styles.mobile}`}>
      <div className={styles.navLinks}>
        <a href='#main' className={styles.navLink}>
          Shop
        </a>
        <a href='#review' className={styles.navLink}>
          Plan My Kitchen
        </a>
      </div>
      <Logo />
      <div className={styles.navLinks}>
        <a href='#about' className={styles.navLink}>
          About Us
        </a>
        <a href='#gallery' className={styles.navLink}>
          Gallery
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

Navbar.defaultProps = {
  mobile: false,
};

export default Navbar;

import Logo from '@components/Logo';
import styles from './Footer.module.scss';
import Social from '@components/Social';
import Container from '@components/Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Logo withLines />
        <nav className={styles.footerNav}>
          <div className={styles.footerNavItem}>
            <h4>About</h4>
            <ul>
              <li>
                <a href='#'>Shop</a>
              </li>
              <li>
                <a href='#'>Plan my kitchen</a>
              </li>
              <li>
                <a href='#'>about us</a>
              </li>
              <li>
                <a href='#'>gallery</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavItem}>
            <h4>Service</h4>
            <ul>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>How to buy</a>
              </li>
              <li>
                <a href='#'>Downloads</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavItem}>
            <h4>Info</h4>
            <ul>
              <li>
                <a href='#'>Delivery</a>
              </li>
              <li>
                <a href='#'>Terms</a>
              </li>
              <li>
                <a href='#'>Privacy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavItem}>
            <h4>Follow</h4>
            <Social withBackground />
          </div>
        </nav>
        <div className={styles.footerCopyright}>
          Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development &
          Hosting by mtc.
        </div>
        <div className={styles.footerBottomLine} />
      </Container>
    </footer>
  );
};

export default Footer;

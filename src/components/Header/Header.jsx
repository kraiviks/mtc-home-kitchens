import Navbar from '@components/Navbar';
import styles from './Header.module.scss';
import Social from '@components/Social';
import Button from '@components/Button';
import { slide as Menu } from 'react-burger-menu';
import useWindowSize from '@/hooks/useWindowSize';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

const Header = () => {
  const isSmallWindow = useWindowSize().width < 1000;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <header className={`${styles.header} ${isSmallWindow && styles.isSmallWindow}`}>
      {isSmallWindow ? (
        <>
          <Hamburger toggled={openMobileMenu} toggle={setOpenMobileMenu} />
          <Menu isOpen={openMobileMenu} right onClose={() => setOpenMobileMenu(false)}>
            <Navbar mobile />
            <div style={{ marginRight: '58.5px' }}>
              <Social onlyIcons />
            </div>
            <Button
              label='My order'
              variant='primary'
              className={styles.button}
              style={{ margin: isSmallWindow ? '0 auto' : '0 0 0 65px', padding: '19px 0' }}
              icon={<img src='/shopping-cart@2x.png' width={14} height={13} style={{ marginLeft: 13 }} alt='' />}
            />
          </Menu>
        </>
      ) : (
        <>
          <div style={{ marginRight: '58.5px' }}>
            <Social onlyIcons />
          </div>
          <Navbar />
          <Button
            label='My order'
            variant='outline'
            className={styles.button}
            icon={<img src='/shopping-cart@2x.png' width={14} height={13} alt='' />}
          />
        </>
      )}
    </header>
  );
};

export default Header;

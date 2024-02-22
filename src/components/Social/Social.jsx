import { SOCIAL_NETWORKS } from '@/constants/constants';
import PropTypes from 'prop-types';
import styles from './Social.module.scss';

const Social = ({ withBackground }) => {
  const linkStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: withBackground ? 'white' : '',
    borderRadius: '50px',
    color: 'white',
    width: '100%',
    height: '100%',
  };
  return (
    <ul className={styles.list}>
      {SOCIAL_NETWORKS.map((item) => {
        return (
          <li key={item.id} className={withBackground && styles.withBackground}>
            <a href={item.link} target='_blank' style={linkStyles}>
              {<item.icon />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Social.propTypes = {
  withBackground: PropTypes.bool,
};

Social.defaultProps = {
  withBackground: false,
};

export default Social;

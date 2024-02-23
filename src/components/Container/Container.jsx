import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children, direction }) => {
  return (
    <div className={styles.container} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  direction: PropTypes.oneOf(['row', 'column']),
};

Container.defaultProps = {
  direction: 'column',
};

export default Container;

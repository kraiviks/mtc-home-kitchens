import Button from '@components/Button';
import styles from './AboutSection.module.scss';
const AboutSection = () => {
  return (
    <section className={styles.section} id='about'>
      <div className={styles.box}>
        <img src='src/assets/bitmap-l.jpg' alt='bitmap-l' />
      </div>
      <div className={styles.box}>
        <div className={styles.boxContent}>
          <h4>Quality Craftmanship from build to delivery</h4>
          <h2>Discover the beauty of a handmade kitchen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus
            vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu
            pharetra tincidunt, mauris purus ultrices.
          </p>
          <Button label='About us' onClick={() => ''} className={styles.aboutBtn} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

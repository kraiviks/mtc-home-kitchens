import Slider from '@components/Slider/Slider';
import styles from './MainSection.module.scss';
import { SLIDES } from '@/constants/constants';
const MainSection = () => {
  return (
    <section className={styles.mainSection} id='main'>
      <Slider data={SLIDES} pagination />
    </section>
  );
};

export default MainSection;

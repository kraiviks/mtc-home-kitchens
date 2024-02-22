import { REVIEWS } from '@/constants/constants';
import Slider from '@components/Slider';
import styles from './ReviewsSection.module.scss';
import Button from '@components/Button';

const ReviewsSection = () => {
  return (
    <section className={styles.section} id='review'>
      <Slider data={REVIEWS} navigation className={styles.slider} classNameContainer={styles.slideContainer} />
      <Button label='Frequently Asked Questions' onClick={() => ''} />
    </section>
  );
};

export default ReviewsSection;

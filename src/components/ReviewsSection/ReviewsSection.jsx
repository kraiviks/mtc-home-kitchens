import { REVIEWS } from '@/constants/constants';
import Slider from '@components/Slider';
import styles from './ReviewsSection.module.scss';
import Button from '@components/Button';
import Container from '@components/Container';

const ReviewsSection = () => {
  return (
    <section className={styles.section} id='review'>
      <Container>
        <h4>What Our Customers Say</h4>
        <Slider data={REVIEWS} navigation className={styles.slider} classNameContainer={styles.slideContainer} />
        <Button label='Frequently Asked Questions' onClick={() => ''} />
      </Container>
    </section>
  );
};

export default ReviewsSection;

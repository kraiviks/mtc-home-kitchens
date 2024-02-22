import { useState } from 'react';
import Button from '../Button';
import styles from './GallerySection.module.scss';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: 'src/assets/gallery/bitmap-1.jpg' },
  { src: 'src/assets/gallery/bitmap-2.jpg' },
  { src: 'src/assets/gallery/bitmap-3.jpg' },
  { src: 'src/assets/gallery/bitmap-4.jpg' },
];
const GallerySection = () => {
  const [imgIndex, setImgIndex] = useState(-1);

  return (
    <section className={styles.section} id='gallery'>
      <h3>Customer Gallery</h3>
      <div className={styles.gallery}>
        {images.map((item, index) => (
          <img
            src={item.src}
            width='310'
            height='310'
            key={index}
            style={{ margin: '2px' }}
            alt=''
            onClick={() => setImgIndex(index)}
          />
        ))}

        <Lightbox index={imgIndex} open={imgIndex >= 0} close={() => setImgIndex(-1)} slides={images} />
      </div>
      <Button label='View more' />
    </section>
  );
};

export default GallerySection;

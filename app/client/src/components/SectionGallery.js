import { useTranslation } from 'react-i18next';
import { VectorImage, Image, AnimationIcon, Fancybox, Carousel } from 'components';
import photo_1 from 'assets/images/photo_1.jpg';
import photo_2 from 'assets/images/photo_2.jpg';
import photo_3 from 'assets/images/photo_3.jpg';
import photo_4 from 'assets/images/photo_4.jpg';
import photo_5 from 'assets/images/photo_5.jpg';
import photo_6 from 'assets/images/photo_6.jpg';



export default function SectionGallery() {
  const [t] = useTranslation();

  const photos = [
    { variant: "photo_2", src: photo_2 },
    { variant: "photo_1", src: photo_1 },
    { variant: "photo_3", src: photo_3 },
    { variant: "photo_4", src: photo_4 },
    { variant: "photo_5", src: photo_5 },
    { variant: "photo_6", src: photo_6 }
  ];

  const items = photos.map((p, index) => (
    <div
      data-fancybox="gallery"
      data-src={p.src}
      className="button button--secondary section-gallery__card"
      key={index}
    >
      <Image variant={p.variant}/>
    </div>
  ));

  return (
    <>
      <section className='section-gallery'>

        <div className='section-gallery__content'>
          <h2>{t('section.gallery.title')}</h2>
          <p>{t('section.gallery.subtitle')}</p>
          <AnimationIcon className='section-gallery__content__icon' variant="camera"/>
        </div>
        <div className='section-gallery__carousel'>

          <Fancybox options={{ infinite: true }}>
            <Carousel
              className='section-gallery__carousel__images'
              items={items}
              options={{
                infinite: true,
                preload : 6
              }}
            />
          </Fancybox>
        </div>
        <VectorImage variant="lines_02"/>

      </section>
    </>
  );
}

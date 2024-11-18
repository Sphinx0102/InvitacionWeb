import { useTranslation } from 'react-i18next';
import { VectorImage, Image } from 'components';


export default function SectionFront() {
  const [t] = useTranslation();

  return (
    <section className='section-front'>
      <div className='section-front__content'>
        <div className='section-front__content__left'>
          <VectorImage variant='curve_front' className='section-front__curve'/>
          <VectorImage variant='curve_front_rotate' className='section-front__curve__mobile'/>
          <Image variant="photo_front" className="section-front__photo"/>
        </div>

        <div className='section-front__content__right'>

          <div className="section-front__flower">
            <Image variant='flower_group01_A' className="section-front__flower-group01-A" />
            <Image variant='flower_group01_B' className="section-front__flower-group01-B" />
            <Image variant='flower_group01_C' className="section-front__flower-group01-C" />
            <Image variant='flower_group01_D' className="section-front__flower-group01-D" />
          </div>

          <div className='section-front__content__right__header'>
            <span>{t('section.front.date')}</span>
            <h1>{t('section.front.title')}</h1>
            <h2>{t('section.front.subtitle')}</h2>
          </div>

          <div className='section-front__content__right__quote'>
            <p>
              <VectorImage variant='quote' className='section-front__content__right__quote__icon'/>
              <br/>
              {t('section.front.quote')}
              <br/>
              <VectorImage variant='quote' className='section-front__content__right__quote__icon section-front__content__right__quote__icon-rotate'/>
            </p>
          </div>
        </div>

        <VectorImage variant='waves_01' className='section-front__curve__footer'/>
      </div>
    </section>
  );
}

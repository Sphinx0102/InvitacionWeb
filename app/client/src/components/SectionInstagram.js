import { useTranslation } from 'react-i18next';
import { VectorImage, Image, AnimationIcon } from 'components';


export default function SectionInstagram() {
  const [t] = useTranslation();
  const href = "https://www.instagram.com/_m4rtti_m/";

  return (
    <>
      <section className='section-instagram'>
        <VectorImage variant="waves_04"/>

        <Image className='section-instagram__background' variant="sky_stars"/>

        <div className='section-instagram__content'>
          <h2>{t('section.instagram.title')}</h2>
          <p>{t('section.instagram.subtitle')}</p>
          <AnimationIcon variant='instagram' className="section-instagram__content__icon"/>
          <a href={href} target="_blank" rel="noreferrer" className="section-instagram__link">{t('section.instagram.hashtag')}</a>
          <a href={href} target="_blank" rel="noreferrer" className="section-instagram__button">{t('section.instagram.button')}</a>
        </div>
        <VectorImage variant="waves_05"/>
      </section>
    </>
  );
}

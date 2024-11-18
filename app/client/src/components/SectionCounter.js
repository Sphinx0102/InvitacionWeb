import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { VectorImage, Image, AnimationIcon } from 'components';
import { es } from 'language';


export default function SectionCounter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [t] = useTranslation();

  function calculateTimeLeft() {
    const dateBirthdayEs = es.section.front.date;
    const dateBirthday = new Date(
      `${dateBirthdayEs.slice(6, 10)}-${dateBirthdayEs.slice(3, 5)}-${dateBirthdayEs.slice(0, 2)}T00:00:00+00:00`
    );
    const difference = dateBirthday - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / ((1000 * 60 * 60 * 24))),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <section className='section-counter'>
      <div className='section-counter__content'>
        <div className='section-counter__content__box'>
          <Image className="section-counter__flower"/>
          <VectorImage variant='circle_counter' className="section-counter__circle"/>

          <div className='section-counter__content__box__body'>
            <h6>{t('section.counter.title')}</h6>

            <div className='section-counter__content__box__clock'>
              <div className='section-counter__content__box__clock__col'>
                <span className='section-counter__content__box__clock__time'>{timeLeft.days}</span>
                <span className='section-counter__content__box__clock__label'>{t('section.counter.day')}</span>
              </div>
              <div className='section-counter__content__box__clock__col__separator'/>
              <div className='section-counter__content__box__clock__col'>
                <span className='section-counter__content__box__clock__time'>{timeLeft.hours}</span>
                <span className='section-counter__content__box__clock__label'>{t('section.counter.hour')}</span>
              </div>
              <div className='section-counter__content__box__clock__col__separator'/>
              <div className='section-counter__content__box__clock__col'>
                <span className='section-counter__content__box__clock__time'>{timeLeft.minutes}</span>
                <span className='section-counter__content__box__clock__label'>{t('section.counter.min')}</span>
              </div>
              <div className='section-counter__content__box__clock__col__separator'/>
              <div className='section-counter__content__box__clock__col'>
                <span className='section-counter__content__box__clock__time'>{timeLeft.seconds}</span>
                <span className='section-counter__content__box__clock__label'>{t('section.counter.sec')}</span>
              </div>
            </div>

            <AnimationIcon variant="heart" className="section-counter__content__icon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

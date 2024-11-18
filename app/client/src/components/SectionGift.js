import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, AnimationIcon, Modal } from 'components';


export default function SectionGift() {
  const [t] = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const flowers = document.querySelectorAll(".section-gift__flower__anim");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      flowers.forEach((flower) => {
        if (entry.isIntersecting) {
          flower.classList.add("section-gift__flower__anim-show");
        } else {
          flower.classList.remove("section-gift__flower__anim-show");
        }
      });
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <section className='section-gift' ref={myRef}>
        <div className='section-gift__content'>
          <h2>{t('section.gift.title')}</h2>
          <p>{t('section.gift.subtitle')}</p>
          <AnimationIcon variant='gift' className="section-gift__content__icon"/>
          <button onClick={() => setOpenModal(true)}>{t('section.gift.button')}</button>
        </div>

        <div className='section-gift__flower'>
          <Image className='section-gift__flower__A section-gift__flower__anim' variant="flower_group02_A"/>
          <Image className='section-gift__flower__B section-gift__flower__anim' variant="flower_group02_B"/>
          <Image className='section-gift__flower__C section-gift__flower__anim' variant="flower_group02_C"/>
        </div>
      </section>

      <Modal
        active={openModal}
        label={t('section.gift.modal.title')}
        toggle={() => setOpenModal(false)}
        icon='gift'
      >
        <div className='section-gift__modal'>
          <p>{t('section.gift.modal.subtitle')}</p>
          <br/>
          <p>{t('section.gift.modal.cbu')}</p>
          <br/>
          <p>{t('section.gift.modal.alias')}</p>
        </div>
      </Modal>
    </>
  );
}

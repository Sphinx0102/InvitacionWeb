import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { VectorImage, Image, AnimationIcon, Modal, FormAssist } from 'components';


export default function SectionCeremony() {
  const [t] = useTranslation();
  const myRef = useRef();
  const [openModalPlace, setOpenModalPlace] = useState(false);
  const [openModalAddress, setOpenModalAddress] = useState(false);

  useEffect(() => {
    const flowers = document.querySelectorAll(".section-ceremony__flower__anim");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      flowers.forEach((flower) => {
        if (entry.isIntersecting) {
          flower.classList.add("section-ceremony__flower__anim-show");
        } else {
          flower.classList.remove("section-ceremony__flower__anim-show");
        }
      });
    });

    observer.observe(myRef.current);
  }, []);

  const info = [
    {
      title: 'section.ceremony.day.title',
      description: 'section.ceremony.day.description',
      // button: 'section.ceremony.day.button'
    },
    {
      title: 'section.ceremony.place.title',
      description: 'section.ceremony.place.description',
      button: 'section.ceremony.place.button',
      onClick: () => setOpenModalPlace(true)
    },
    {
      title: 'section.ceremony.address.title',
      description: 'section.ceremony.address.description',
      button: 'section.ceremony.address.button',
      onClick: () => setOpenModalAddress(true)
    },
  ];

  const linkAddress = t('links.address');
  // const linkMaps = "https://maps.google.com/maps?width=1056&amp;height=670&amp;hl=en&amp;q=C. Juárez Celman Oeste 543, Villa Krause, San Juan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";

  return (
    <>
      <section className='section-ceremony' ref={myRef}>
        <div className='section-ceremony__lines'>
          <VectorImage variant="lines_01"/>
          <div className='section-ceremony__lines__icon'>
            <AnimationIcon className='section-ceremony__lines__icon__anim' variant='party'/>
          </div>
        </div>
        <div className='section-ceremony__content'>
          <div className='section-ceremony__content__box'>
            <div className="section-ceremony__tape__content">
              <h3>{t('section.ceremony.title')}</h3>
              <VectorImage className="section-ceremony__tape section-ceremony__tape-left" variant="tape"/>
              <VectorImage className="section-ceremony__tape section-ceremony__tape-right" variant="tape"/>
            </div>

            { info.map((i, index) => (
              <div key={index} className="section-ceremony__info">
                <h6>{t(i.title)}</h6>
                <p>{t(i.description)}</p>
                { i?.button && <button onClick={i.onClick}>{t(i.button)}</button> }
              </div>
            ))}

          </div>
        </div>

        <VectorImage variant="waves_02"/>

        <div className='section-ceremony__flower'>
          <Image className='section-ceremony__flower__A section-ceremony__flower__anim' variant="flower_group02_A"/>
          <Image className='section-ceremony__flower__B section-ceremony__flower__anim' variant="flower_group02_B"/>
          <Image className='section-ceremony__flower__C section-ceremony__flower__anim' variant="flower_group02_C"/>
        </div>
      </section>

      { openModalPlace && <FormAssist openModal={openModalPlace} setOpenModal={setOpenModalPlace}/> }

      <Modal
        active={openModalAddress}
        label={t('section.ceremony.address.modal.title')}
        toggle={() => setOpenModalAddress(false)}
      >
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe title="frame_map" className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Hipólito Yrigoyen Este 3845 Este, J5411 Santa Lucía, San Juan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href={linkAddress}
        >{t('section.ceremony.address.modal.button')}</a>
      </Modal>
    </>
  );
}

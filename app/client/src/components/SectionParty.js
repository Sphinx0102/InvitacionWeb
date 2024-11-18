import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VectorImage, Image, AnimationIcon, Modal, FormSong } from 'components';



export default function SectionParty() {
  const [t] = useTranslation();
  const [openModalMusic, setOpenModalMusic] = useState(false);
  const [openModalDressCode, setOpenModalDressCode] = useState(false);
  const [openModalNotes, setOpenModalNotes] = useState(false);

  const info = [
    {
      title: 'section.party.music.title',
      description: 'section.party.music.description',
      button: 'section.party.music.button',
      icon: 'music',
      onClick: () => setOpenModalMusic(true),
      flower: true
    },
    {
      title: 'section.party.dressCode.title',
      description: 'section.party.dressCode.description',
      button: 'section.party.dressCode.button',
      icon: 'dress',
      onClick: () => setOpenModalDressCode(true),
      flower: false
    },
    {
      title: 'section.party.notes.title',
      description: 'section.party.notes.description',
      button: 'section.party.notes.button',
      icon: 'tasks',
      onClick: () => setOpenModalNotes(true),
      flower: false
    },
  ];

  return (
    <>
      <section className='section-party'>

        <div className='section-party__content'>
          <h2>{t('section.party.title')}</h2>
          <p>{t('section.party.subtitle')}</p>
        </div>

        <div className="section-party__list">
          { info.map((i, index) => (
            <div key={index} className="section-party__list__card">
              <h3>{t(i.title)}</h3>
              <AnimationIcon variant={i.icon} className="section-party__list__card__icon"/>
              <p>{t(i.description)}</p>
              <button onClick={i.onClick}>{t(i.button)}</button>
              { i?.flower && (
                  <>
                    <Image variant="flower_group03_A" className="section-party__list__card__flower__A" />
                  </>
                )
              }
            </div>
          ))}
        </div>

        <VectorImage variant="waves_03"/>

      </section>

      { openModalMusic && <FormSong setOpenModal={setOpenModalMusic} openModal={openModalMusic}/> }

      <Modal
        active={openModalDressCode}
        label={t('section.party.dressCode.modal.title')}
        toggle={() => setOpenModalDressCode(false)}
      >
        <div className='section-party__modal'>
          <p>{t('section.party.dressCode.modal.subtitle')}</p>
          <br/>
          <p>{t('section.party.dressCode.modal.content')}</p>
        </div>
      </Modal>

      <Modal
        active={openModalNotes}
        label={t('section.party.notes.modal.title')}
        toggle={() => setOpenModalNotes(false)}
      >
        <div className='section-party__modal'>
          <p>{t('section.party.notes.modal.subtitle')}</p>
          <br/>
          <p>{t('section.party.notes.modal.content')}</p>
        </div>
      </Modal>
    </>
  );
}

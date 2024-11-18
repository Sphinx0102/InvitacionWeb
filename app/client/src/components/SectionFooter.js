import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormSong, FormAssist } from 'components';


export default function SectionFooter() {
  const [t] = useTranslation();
  const [openModalPlace, setOpenModalPlace] = useState(false);
  const [openModalMusic, setOpenModalMusic] = useState(false);

  const buttons = [
    { label: 'section.footer.buttons.confirm', onClick: () => setOpenModalPlace(true) },
    { label: 'section.footer.buttons.song', onClick: () => setOpenModalMusic(true) }
  ];

  return (
    <>
      <section className='section-footer'>
        <div className='section-footer__left'>
          <h4>{t('section.footer.title')}</h4>
          <h5>{t('section.footer.subtitle')}</h5>
        </div>

        <div className='section-footer__right'>
          <ul>
            { buttons.map((b, index) => (
              <li key={index}>
                <button onClick={b.onClick}>{t(b.label)}</button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      { openModalPlace && <FormAssist openModal={openModalPlace} setOpenModal={setOpenModalPlace}/> }
      { openModalMusic && <FormSong openModal={openModalMusic} setOpenModal={setOpenModalMusic}/> }
    </>
  );
}

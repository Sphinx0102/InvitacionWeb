import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AnimationIcon,
  SectionFront,
  SectionCounter,
  SectionCeremony,
  SectionParty,
  SectionGift,
  SectionInstagram,
  SectionFooter,
  Intro,
  Music
} from 'components';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [t] = useTranslation();
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [modalIntro, setModalIntro] = useState(true);
  document.title = t('tabTitle');

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      { isLoading ?
        (
          <AnimationIcon className={'loading__icon'} variant="heart_loading" />
        )
        :(
          <>
            { modalIntro &&
              <Intro
                setIsMusicOn={setIsMusicOn}
                close={() => setModalIntro(false)}
              />
            }
            <Music isMusicOn={isMusicOn} start={() => setIsMusicOn(true)}/>
            <SectionFront />
            <SectionCounter />
            <SectionCeremony />
            <SectionParty />
            <SectionGift />
            <SectionInstagram />
            <SectionFooter />
            <footer className="footer">
              <span>{t('footer.description')}</span>
              <a rel="noreferrer" href='https://www.instagram.com/im_edl/' target='_blank'>{t('footer.linkEze')}</a>
              <span> & </span>
              <a rel="noreferrer" href='https://www.instagram.com/sebateunmate_/' target='_blank'>{t('footer.linkLeo')}</a>
            </footer>
          </>
        )
      }
    </>
  );
}



export default App;

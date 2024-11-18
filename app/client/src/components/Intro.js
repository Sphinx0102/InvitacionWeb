import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


export default function Intro({ setIsMusicOn, close }) {
  const [t] = useTranslation();

  const handleMusicOn = () => {
    setIsMusicOn(true);
    close();
  }

  const handleMusicOff = () => {
    setIsMusicOn(false);
    close();
  }

  useEffect(() => {
    const [body] = document.getElementsByTagName('body');
    body.classList.add("noscroll");

    return () => {
      body.classList.remove("noscroll");
    }
  }, []);

  return (
    <div className="intro">
      <h4>{t('intro.title')}</h4>
      <span>{t('intro.subtitle')}</span>
      <div className="intro__buttons">
        <button onClick={handleMusicOn}>{t('intro.buttonOn')}</button>
        <button onClick={handleMusicOff}>{t('intro.buttonOff')}</button>
      </div>
    </div>
  );
}

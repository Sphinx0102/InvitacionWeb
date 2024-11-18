import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'components';
import axios from 'axios';


export default function FormSong({ openModal, setOpenModal }) {
  const [t] = useTranslation();
  const [form, setForm] = useState({
    name: '',
    song: '',
    link: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.song) {
      setIsLoading(true);
      axios.post(`${process.env.REACT_APP_API_HOST}/song`, form)
      .then(response => setSuccess(true))
      .catch(err => {
        setError(true);
        console.error(err);
      })
      .finally(() => setIsLoading(false));
    }
  }

  return (
    <Modal
      active={openModal}
      label={t('section.party.music.modal.title')}
      toggle={() => setOpenModal(false)}
    >
      { error ? (
          <span className="request">{t('request.error.song')}</span>
        )
        : success ? (
          <span className="request">{t('request.success.song')}</span>
        )
        :(
          <form onSubmit={handleSubmit} className='section-party__modal'>
            <input name="name" onChange={onChangeValue} placeholder={t('section.party.music.modal.name')}/>
            <input name="song" onChange={onChangeValue} placeholder={t('section.party.music.modal.song')}/>
            <textarea name="link" onChange={onChangeValue} placeholder={t('section.party.music.modal.link')}/>
            <button disabled={isLoading} type="submit">{ isLoading ? t('request.loading') : t('section.party.music.modal.send')}</button>
          </form>
        )
      }
    </Modal>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'components';
import axios from 'axios';


export default function FormAssist({ openModal=false, setOpenModal }) {
  const [t] = useTranslation();
  const [form, setForm] = useState({
    name: '',
    assist: 'yes',
    note: ''
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
    if (form.name) {
      setIsLoading(true);
      axios.post(`${process.env.REACT_APP_API_HOST}/assist`, form)
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
      label={t('section.ceremony.place.modal.title')}
      toggle={() => setOpenModal(false)}
      icon='party'
    >
      { error ? (
          <span className="request">{t('request.error.assist')}</span>
        )
        : success ? (
          <span className="request">{t('request.success.assist')}</span>
        )
        :(
          <form onSubmit={handleSubmit}>
            <div className="section-ceremony__buttons">
              <label className="radio-button">{t('section.ceremony.place.modal.confirm')}
                <input name="assist" onChange={onChangeValue} checked={form.assist === "yes"} value="yes" type="radio"/>
                <span className="radio-button__checkmark"></span>
              </label>

              <label className="radio-button">{t('section.ceremony.place.modal.cancel')}
                <input name="assist" onChange={onChangeValue} checked={form.assist === "no"} value="no" type="radio" />
                <span className="radio-button__checkmark"></span>
              </label>
            </div>

            <input name="name" onChange={onChangeValue} placeholder={t('section.ceremony.place.modal.name')}/>
            <textarea name="note" onChange={onChangeValue} placeholder={t('section.ceremony.place.modal.note')}/>

            <button disabled={isLoading} type="submit">{ isLoading ? t('request.loading') : t('section.ceremony.place.modal.send')}</button>
          </form>
        )
      }
    </Modal>
  );
}

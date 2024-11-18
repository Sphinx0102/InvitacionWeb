import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es } from 'language';
import moment from 'moment';
import 'moment/locale/es';
const LANGUAGE = process.env.REACT_APP_LANGUAGE || "es";


const resources = {
	es: {
		translation: es,
	}
};

const defaultLanguage = LANGUAGE;
moment.locale(defaultLanguage || 'es');

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage || 'es',
  fallbackLng: {
		default: ['es']
	},
	interpolation: {
		escapeValue: false,
		format: (value, format, lng) => {
			if (format === 'currentDate') return
			moment(value).locale(lng).format('LL');
			return value;
		},
	},
  debug: false
});

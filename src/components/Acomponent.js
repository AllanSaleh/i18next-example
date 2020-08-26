import React from 'react';
import { useTranslation } from 'react-i18next'



const Acomponent = () => {

    const { t, i18n} = useTranslation();



    return (<p>{t('Welcome to react using react-i18next')}</p>);
}

export default Acomponent;
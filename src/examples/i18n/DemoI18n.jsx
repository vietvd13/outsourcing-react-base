import React from 'react';
import {useTranslation} from 'react-i18next';

export default function DemoI18n(){
    const {t, i18n} = useTranslation();

    return(
        <div style={{padding:'20px'}}>
            <h3>Demo i18n</h3>
            <p>{t('common:hello')}</p>
            <div style={{display: 'flex' , gap: '10px'}}>
            <button onClick={()=> i18n.changeLanguage('vi')}>vn Tiếng Việt</button> 
            <button onClick={()=> i18n.changeLanguage('en')}>en English</button>
</div>
        </div>
    );
}
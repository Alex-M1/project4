import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { LANGUAGE } from 'constants/constants'; 
import { StLangToggle } from './styled';

const HeaderLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const { colors, theme } = useTheme();
  const [lang, setLang] = useState<string>(localStorage.getItem('lang') || LANGUAGE.en);
  const translateHandler = () => {
    i18n.changeLanguage(lang === LANGUAGE.en ? LANGUAGE.ru : LANGUAGE.en);
    localStorage.setItem('lang', lang === LANGUAGE.en ? LANGUAGE.ru : LANGUAGE.en);
    setLang(lang === LANGUAGE.en ? LANGUAGE.ru : LANGUAGE.en);
  };
  return (
    <StLangToggle
      theme={theme}
      colors={colors}
      onClick={translateHandler}
    >
      {lang[0].toUpperCase() + lang.slice(1)}
    </StLangToggle>
  );
};
export default HeaderLanguage;

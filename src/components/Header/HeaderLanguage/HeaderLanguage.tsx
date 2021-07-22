import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { LANGUAGE } from 'constants/constants'; 
import { StLangToggle } from './styled';

const HeaderLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const { colors, theme } = useTheme();
  const [lang, setLang] = useState<string>(localStorage.getItem(LANGUAGE.LANG) || LANGUAGE.EN);
  const translateHandler = () => {
    i18n.changeLanguage(lang === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN);
    localStorage.setItem(LANGUAGE.LANG, lang === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN);
    setLang(lang === LANGUAGE.EN ? LANGUAGE.RU : LANGUAGE.EN);
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

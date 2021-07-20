import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { StLangToggle } from './styled';

const HeaderLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const { colors, theme } = useTheme();
  const [lang, setLang] = useState<string>(localStorage.getItem('lang') || 'en');
  const translateHandler = () => {
    i18n.changeLanguage(lang === 'en' ? 'ru' : 'en');
    localStorage.setItem('lang', lang === 'en' ? 'ru' : 'en');
    setLang(lang === 'en' ? 'ru' : 'en');
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
import { CLIENT } from 'constants/urls';
import React, { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { StInput, StHidePass } from './styled';

interface IProps {
  type?: string;
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<IProps> = ({ value, onChange, type = 'text', placeholder }) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const [passSettig, setPassSettig] = useState({
    type: 'password',
    eye: CLIENT.show,
  });
  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    onChange(e);
  };
  const showHidePass = () => {
    passSettig.type === 'password'
      ? setPassSettig({ type: 'text', eye: CLIENT.hide })
      : setPassSettig({ type: 'password', eye: CLIENT.show });
  };
  return (
    <>
      <StInput
        type={type !== 'password' ? type : passSettig.type}
        value={value}
        theme={theme}
        colors={colors}
        onChange={handleInputChange}
        placeholder={t(placeholder)}
      />
      {type === 'password' ? <StHidePass src={passSettig.eye} onClick={showHidePass} /> : null}
    </>
  );
};

export default Input;

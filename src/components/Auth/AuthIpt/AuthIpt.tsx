import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'src/components/hooks/useTheme';
import { IInputValue, TField } from 'store/user/types';
import Input from 'common/Input';
import { StInputDiv, StSpan } from './styled';

export interface IProps {
  type: TField;
  value: string;
  setCredentialsValue: (payload: IInputValue) => void;
}

const AuthIpt: React.FC<IProps> = ({ type, value, setCredentialsValue }: IProps) => {
  const { t } = useTranslation();
  const { colors, theme } = useTheme();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentialsValue({ page: 'auth', field: type, value: e.target.value });
  };

  return (
    <StInputDiv>
      <StSpan
        theme={theme}
        colors={colors}
      >
        {t(type)}
      </StSpan>
      <Input
        type={type}
        value={value}
        onChange={inputChangeHandler}
      />
    </StInputDiv>
  );
};

export default AuthIpt;

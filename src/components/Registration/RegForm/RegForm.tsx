import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { StInputDiv, StSpan } from 'src/components/Auth/AuthIpt/styled';
import { useTheme } from 'src/components/hooks/useTheme';
import Input from 'common/Input';
import { IInputValue, TField } from 'store/user/types';

interface IProps {
  type: TField;
  value: string;
  setCredentialsValue: (payload: IInputValue) => void;
}
const RegForm: React.FC<IProps> = ({ type, value, setCredentialsValue }) => {
  const { colors, theme } = useTheme();
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentialsValue({ page: 'registration', field: type, value: e.target.value });
  };
  const { t } = useTranslation();
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
        onChange={onInputChange}
      />
    </StInputDiv>
  );
};

export default RegForm;

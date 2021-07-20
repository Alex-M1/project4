import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import { StSelect } from './styled';

const ModalSelect: React.FC = () => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    return (
        <StSelect
            theme={theme}
            colors={colors}
        >
            <option>{t('tic_tac_toe')}</option>
            <option>{t('checkers')}</option>
        </StSelect>
    );
};
export default ModalSelect;

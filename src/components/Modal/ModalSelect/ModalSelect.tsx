import { GAME_TYPE } from 'constants/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'src/components/hooks/useTheme';
import { StSelect } from './styled';

interface IProps {
    gameType: string;
    setGameType: (payload: string) => void;
}

const ModalSelect: React.FC <IProps> = ({ setGameType, gameType }) => {
    const { t } = useTranslation();
    const { colors, theme } = useTheme();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGameType(e.target.value);
    };
    return (
        <StSelect
            theme={theme}
            value={gameType}
            colors={colors}
            onChange={handleChange}
        >
            <option value={GAME_TYPE.TIC_TAC_TOE}>{t('tic_tac_toe')}</option>
            <option value={GAME_TYPE.CHECKERS}>{t('checkers')}</option>
        </StSelect>
    );
};
export default ModalSelect;

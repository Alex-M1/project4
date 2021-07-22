import React from 'react';
import { client } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StIcon, StItem } from './styled';

interface IProps {
    id: string,
    type: string;
    login: string;
}

const MainRoomsItem: React.FC<IProps> = ({ id, login, type }) => {
    const { colors, theme } = useTheme();

    return (
        <StItem
            theme={theme}
            colors={colors}
        >
            <p>{login}</p>
            <StIcon>
                <img src={`${client[type]}`} alt={type} />
            </StIcon>
        </StItem>
    );
};
export default MainRoomsItem;

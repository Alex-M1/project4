import React from 'react';
import { client } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StIcon, StItem } from './styled';

interface IProps {
    type: string;
    login: string;
} 

const MainRoomsItem: React.FC <IProps> = ({ login, type }) => {
    const { colors, theme } = useTheme();

    return (
        <StItem
            theme={theme}
            colors={colors}
        >
            <p>{login}</p>
            <StIcon>
                <img src={`${client[type]}`} alt={type}/>
            </StIcon>
        </StItem>
    );
};
export default MainRoomsItem;

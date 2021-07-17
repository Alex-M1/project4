import React from 'react';
import { url } from 'constants/urls';
import { useTheme } from 'src/components/hooks/useTheme';
import { StIcon, StItem } from './styled';

interface IProps {
    type: string;
    login: string;
} 

const MainRoomsItem: React.FC <IProps> = ({ login, type }: IProps) => {
    const { colors, theme } = useTheme();
    return (
        <StItem
            theme={theme}
            colors={colors}
        >
            <p>{login}</p>
            <StIcon>
                <img src={`${url[type]}`} alt={type}/>
            </StIcon>
        </StItem>
    );
};
export default MainRoomsItem;

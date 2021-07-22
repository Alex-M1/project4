import { IStyled } from 'common/types/styledTypes';

export const changeTheme = (props:IStyled, value:string) => props.colors[props.theme][value];

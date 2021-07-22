import React from 'react';
import { IStatUUID } from 'store/statistic/types';
import { useTheme } from '../hooks/useTheme';
import { StContainer, StWrapper } from './styled';

interface IProps {
  getStatUUID: IStatUUID[],
}

const Statistic: React.FC <IProps> = () => {
  const { colors, theme } = useTheme();
  return (
      <StContainer
        theme={theme}
        colors={colors}
      >
        <StWrapper>
        <table>
          <thead>
              <tr>
                  <th>The table header</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>The table body</td>
                  <td>with two columns</td>
              </tr>
          </tbody>
        </table>
        </StWrapper>
        <StWrapper>
        <table>
    <thead>
        <tr>
            <th>The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
        </StWrapper>
      </StContainer>
  );
};
export default Statistic;

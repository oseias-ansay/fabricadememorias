import styled from 'styled-components/native';

export const Container = styled.View`

    height:240px;
    width:240px;
    margin-right:16px;
    background-color:${({ theme }) =>theme.COLORS.BRANCO };
    align-items: center;
    justify-content: center; 
    border-radius:8px; 
`;


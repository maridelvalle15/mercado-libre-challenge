import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ color, theme }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  color: ${({ theme }) => theme.colors.font.reverse};
  font-family: ${({ theme }) => theme.fontFamily};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  cursor: pointer;
  border: none;
  width: 100%;
`;

export default StyledButton;

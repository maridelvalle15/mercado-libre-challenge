import styled from "styled-components";

export const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  margin: 0 auto;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ color, theme }) => theme.colors[color]};
    border-color: ${({ color, theme }) =>
      `${theme.colors[color]} transparent ${theme.colors[color]} transparent`};
    animation: dual-ring 1.2s linear infinite;
  }
  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from "styled-components";

const defaultStyles = props => {
  const { theme, color, textAlign, fontWeight } = props;
  return `
    color: ${theme.colors.fontColor[color]};
    text-align: ${textAlign};
    font-weight: ${fontWeight};
    font-family: ${theme.fontFamily};
  `;
};

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h1};
  ${props => defaultStyles(props)}
`;
export const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h2};
  ${props => defaultStyles(props)}
`;
export const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h3};
  ${props => defaultStyles(props)}
`;
export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  ${props => defaultStyles(props)}
`;

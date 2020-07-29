import styled from "styled-components";

export const StyledFooter = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const StyledAction = styled.div`
  cursor: pointer;
`;

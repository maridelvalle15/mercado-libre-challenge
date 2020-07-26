import styled from "styled-components";

export const StyledContainer = styled.div`
  flex-direction: ${({ direction }) => direction};
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${({ theme }) => theme.breakpoints.md} {
    width: 95%;
  }
`;

export default StyledContainer;

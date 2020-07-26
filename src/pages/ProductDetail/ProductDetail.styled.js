import styled from "styled-components";
import shippingIcon from "@assets/images/shipping.png";

export const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const StyledImageContainer = styled.div`
  flex: 6;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  max-width: 680px;
  height: auto;
  width: 100%;
`;

export const StyledInformation = styled.div`
  flex: 3;
  h3 {
    padding-top: ${({ theme }) => theme.spacing(2)};
    max-width: 60%;
  }
  h1 {
    padding: ${({ theme }) => theme.spacing(4)} 0;
  }
`;

export const StyledDescription = styled.div`
  flex: 6;
  padding: ${({ theme }) => theme.spacing(4)};
  h2 {
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex: 1;
  }
`;

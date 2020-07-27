import styled from "styled-components";
import shippingIcon from "@assets/images/shipping.png";

export const StyledProductCard = styled.div`
  display: flex;
  flex: 2;
  cursor: pointer;
  flex-direction: row;
  margin: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 0;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
`;

export const StyledProductImageContainer = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledImage = styled.img`
  width: 180px;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  height: auto;
`;

export const StyledProductInformation = styled.div`
  display: flex;
  flex: 8;
  flex-direction: row;
`;

export const StyledProductDescription = styled.div`
  flex: 4;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    ${({ theme }) => theme.breakpoints.sm} {
      margin-bottom: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

export const StyledProductShipping = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.total};
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  background: url(${shippingIcon});
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  height: 20px;
  width: 20px;
`;

export const StyledProductLocation = styled.div`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  flex: 3;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`;

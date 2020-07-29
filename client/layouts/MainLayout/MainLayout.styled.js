import styled from "styled-components";
import shippingIcon from "@assets/images/shipping.png";

export const StyledContent = styled.div`
  background: ${({ theme }) => theme.colors.backgroundContent};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export default StyledContent;

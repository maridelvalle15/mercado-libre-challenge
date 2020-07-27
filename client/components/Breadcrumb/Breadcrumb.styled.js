import styled from "styled-components";

export const StyledBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  min-width: 100%;
`;

export const StyledCategory = styled.div`
  cursor: pointer;
  position: relative;
  padding-right: ${({ theme }) => theme.spacing(3)};
  &:after {
    position: absolute;
    color: ${({ theme }) => theme.colors.font.light};
    content: "›";
    top: -4px;
    font-size: 20px;
    right: ${({ theme }) => theme.spacing(1)};
  }
  &:last-child {
    &:after {
      content: "";
    }
  }
`;

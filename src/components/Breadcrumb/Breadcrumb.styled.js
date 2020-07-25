import styled from "styled-components";

export const StyledBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCategory = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.font.light};
  position: relative;
  padding-right: ${({ theme }) => theme.spacing(3)};
  &:hover {
    color: ${({ theme }) => theme.colors.font.normal};
  }
  &:after {
    position: absolute;
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

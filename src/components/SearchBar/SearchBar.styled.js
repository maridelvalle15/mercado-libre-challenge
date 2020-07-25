import styled from "styled-components";
import searchIcon from "@assets/images/search.png";

export const StyledSearchBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;

export const StyledLogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const StyledLogo = styled.img`
  max-height: 100%;
`;

export const StyledSearchContainer = styled.div`
  position: relative;
  flex: 9;
`;

export const StyledSearchInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)} }`};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily};
  box-sizing: border-box;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
`;

export const StyledSearchButton = styled.div`
  border-radius: ${({ theme }) =>
    `0  ${theme.borderRadius.normal} ${theme.borderRadius.normal} 0`};
  background: url(${searchIcon}), ${({ theme }) => theme.colors.icon.green};
  color: ${({ theme }) => theme.colors.font.light};
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 45px;
  right: 0;
  top: 0;
`;

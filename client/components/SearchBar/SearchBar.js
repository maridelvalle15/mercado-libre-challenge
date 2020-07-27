import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "@components/Container/Container";
import {
  StyledLogo,
  StyledSearchBar,
  StyledSearchInput,
  StyledSearchButton,
  StyledLogoContainer,
  StyledSearchContainer
} from "./SearchBar.styled";

const SearchBar = ({ logo, placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onKeyPress = e => {
    e.which === 13 && onSearch(searchTerm);
  };
  const onChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <StyledSearchBar>
      <Container direction="row">
        <StyledLogoContainer>
          <StyledLogo src={logo} />
        </StyledLogoContainer>
        <StyledSearchContainer>
          <StyledSearchInput
            placeholder={placeholder}
            onKeyPress={onKeyPress}
            onChange={onChange}
          />
          <StyledSearchButton onClick={() => onSearch(searchTerm)} />
        </StyledSearchContainer>
      </Container>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  logo: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  placeholder: "Nunca dejes de buscar"
};

export default SearchBar;

import React from "react";
import PropTypes from "prop-types";
import Logo from "@assets/images/logo.png";
import { useHistory } from "react-router-dom";
import StyledContent from "./MainLayout.styled";
import SearchBar from "@components/SearchBar/SearchBar";
import Container from "@components/Container/Container";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";

const MainLayout = ({ children, categories, defaultTerm }) => {
  const history = useHistory();
  const onSearch = searchTerm => {
    history.push(`/items?search=${searchTerm}`);
  };
  const onClickLogo = () => {
    history.push(`/`);
  };
  return (
    <div>
      <SearchBar
        logo={Logo}
        onClickLogo={onClickLogo}
        placeholder="Nunca dejes de buscar"
        defaultTerm={defaultTerm}
        onSearch={value => onSearch(value)}
      />
      {children && (
        <Container>
          {categories && <Breadcrumb categories={categories} />}
          <StyledContent>{children}</StyledContent>
        </Container>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(PropTypes.string),
  defaultTerm: PropTypes.string
};

MainLayout.defaultProps = {
  defaultTerm: ""
};

export default MainLayout;

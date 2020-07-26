import React from "react";
import Logo from "@assets/images/logo.png";
import SearchBar from "@components/SearchBar/SearchBar";
import Container from "@components/Container/Container";
import Breadcrumb from "@components/Breadcrumb/Breadcrumb";
import StyledContent from "./MainLayout.styled";

const MainLayout = ({ children, Categories }) => {
  const onSearch = searchTerm => {
    // TODO: Navigate to searchResult
    console.log(searchTerm);
  };

  return (
    <div>
      <SearchBar
        logo={Logo}
        placeholder="Nunca dejes de buscar"
        onSearch={value => onSearch(value)}
      />
      {children && (
        <Container>
          <Breadcrumb
            categories={["Video juegos", "Nintendo", "Nintendo switch"]}
          />
          <StyledContent>{children}</StyledContent>
        </Container>
      )}
    </div>
  );
};

export default MainLayout;

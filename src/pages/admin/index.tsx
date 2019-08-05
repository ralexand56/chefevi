import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import CategoryAdmin from "./CategoryAdmin";
import FoodAdmin from "./FoodAdmin";

const Main = styled.main`
  padding: 5em 1em;
`;

const Nav = styled.nav`
  > a {
    margin-right: 1em;
  }
`;

export default () => {
  return (
    <Main>
      <h2>Admin</h2>
      <Nav>
        <Link to="/admin/foods">Foods</Link>
        <Link to="/admin/categories">Categories</Link>
      </Nav>
      <Route path="/admin/categories" component={CategoryAdmin} />
      <Route path="/admin/foods" component={FoodAdmin} />
    </Main>
  );
};

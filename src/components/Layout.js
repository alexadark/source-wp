/** @jsx jsx */
import { jsx, Layout as StyledLayout, Container, Main } from "theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Global } from "@emotion/core"
import { GlobalStyles } from "../styles/GlobalStyles"

import "../styles/scss/styles.scss"

const Layout = ({ children }) => (
  <StyledLayout>
    <Global styles={GlobalStyles} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StyledLayout>
)

export default Layout

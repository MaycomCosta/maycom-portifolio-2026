import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar, Footer, Cursor } from "./components";
import Home from "./pages/Home";
import { useTranslation } from "./hooks/useTranslation";
import { useCursor } from "./hooks/useCursor";

function App() {
  const { t, lang, changeLang, langs } = useTranslation();
  const { pos, hovered, clicked } = useCursor();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor pos={pos} hovered={hovered} clicked={clicked} />
      <Navbar t={t} lang={lang} changeLang={changeLang} langs={langs} />
      <Home t={t} />
      <Footer t={t} />
    </ThemeProvider>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './components/routes/indexPage';
import { Footer } from './components/footer';
import { HistoryPage } from './components/routes/history/historyPage';
import { TypesPage } from './components/routes/typesPage';
import { SolvePage } from './components/routes/solving/solvePage';
import { ContactPage } from './components/routes/contactPage';
import { ImprintPage } from './components/routes/imprintPage';
import { Navbar } from './components/navbar/navbar';
import { VisitUpdater } from './components/favourites/mostVisited';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Comments } from './components/comments';
import { RegistrationPage } from './components/routes/registrationPage';
import { LoginPage } from './components/routes/loginPage';
import { useEffect, useState } from 'react';
import { darkModeTheme } from './components/themes/darkMode';
import { lightModeTheme } from './components/themes/lightMode';

import './App.css';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        min-height: 100%;
      
        margin: 0;
        padding: 0;
      
        font-family: "Roboto", sans-serif;
      
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.backgroundColor}
    }
    
    body {
        width: 100%;
    }
    
    kbd {
        font-size: large;
    }
`;

const Main = styled.main`
    width: max(70vw, 500px);
    
    margin-left: calc((100% - max(70vw, 500px)) / 2);
    margin-right: calc((100% - max(70vw, 500px)) / 2);
    
    display: grid;
    gap: 0 1em;
    grid-template-columns: 1fr 0.2fr 0.2fr;
    grid-auto-rows: fit-content(100%);
  
    a:link, a:visited {
        color: ${props => props.theme.linkColor};
        text-decoration: none;
    }
`;

const App = () => {
    const [isDarkMode, setDarkMode] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [theme, setTheme] = useState(lightModeTheme);

    useEffect(() => setTheme(isDarkMode ? darkModeTheme : lightModeTheme), [isDarkMode]);

    return (
        <ThemeProvider theme={ theme }>
            <div className="App">
                <GlobalStyle />
                <Navbar
                    isDarkMode={ isDarkMode }
                    setDarkMode={ setDarkMode } />
                <Main>
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/geschichte" element={<HistoryPage />} />
                        <Route path="/arten" element={<TypesPage />} />
                        <Route path="/loesen" element={<SolvePage />} />
                        <Route path="/kontakt" element={<ContactPage />} />
                        <Route path="/impressum" element={<ImprintPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/registrierung" element={<RegistrationPage />} />
                    </Routes>
                    <Comments />
                    <VisitUpdater />
                </Main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;

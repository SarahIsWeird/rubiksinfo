import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './components/routes/indexPage';
import { Footer } from './components/footer';
import { HistoryPage } from './components/routes/history/historyPage';
import { TypesPage } from './components/routes/typesPage';
import { SolvePage } from './components/routes/solving/solvePage';
import { ContactPage } from './components/routes/contactPage';
import { ImprintPage } from './components/routes/imprintPage';
import { Navbar } from './components/navbar/navbar';
import styled, { createGlobalStyle } from 'styled-components';
import {Comments } from './components/comments'

import './App.css';
import {RegistrationPage} from './components/routes/registrationPage';
import { LoginPage } from './components/routes/loginPage';
import { VisitUpdater } from './components/favourites/mostVisited';

import './App.css';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        min-height: 100%;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
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
        color: blue;
        text-decoration: none;
    }
`;

const App = () => (
    <div className="App">
        <GlobalStyle />
        <Navbar />
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
);

export default App;

import { Header } from './components/header';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './components/routes/indexPage';
import { Footer } from './components/footer';
import { HistoryPage } from './components/routes/history/historyPage';
import { TypesPage } from './components/routes/typesPage';
import { SolvePage } from './components/routes/solving/solvePage';
import { ContactPage } from './components/routes/contactPage';
import { ImprintPage } from './components/routes/imprintPage';

import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/geschichte" element={<HistoryPage />} />
                <Route path="/arten" element={<TypesPage />} />
                <Route path="/loesen" element={<SolvePage />} />
                <Route path="/kontakt" element={<ContactPage />} />
                <Route path="/impressum" element={<ImprintPage />} />
            </Routes>
        </main>
        <Footer />
    </div>
);

export default App;

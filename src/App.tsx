import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ReappearPage from './pages/ReappearPage';
import ResultsPage from './pages/ResultsPage';
import CertificatesPage from './pages/CertificatesPage';
import AccountStatementPage from './pages/AccountStatementPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reappear" element={<ReappearPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/account-statement" element={<AccountStatementPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

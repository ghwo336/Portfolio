import './App.css';
import {LanguageProvider} from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Affiliations from './components/Affiliations';
import Algorithms from './components/Algorithms';
import Awards from './components/Awards';
import Contact from './components/Contact';

function AppContent() {
  return (
    <div className="portfolio">
      <Navbar />
      <Header />
      <main className="main-content">
        <AboutMe />
        <TechStack />
        <Projects />
        <Affiliations />
        <Algorithms />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

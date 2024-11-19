
import Banner from './pages/Banner'
import './App.css';
import Header from './Components/header';
import Disciplines from './pages/Disciplines';
import RightPrograme from './pages/RightPrograme';
import Accrediation from './pages/Accrediation';
import GitamGlance from './pages/GitamGlance';
import Raankings from './pages/Raankings';
import VibrantCampus from './pages/VibrantCampus';
import KnowGitam from './pages/KnowGitam';
import Partnership from './pages/Partnership';
import HumanGitam from './pages/HumanGitam';
import Footer from './Components/Footer';
import UpcomingEvents from "./pages/UpcomingEvents"


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Disciplines/>
    <RightPrograme/>
    <Accrediation/>
    <GitamGlance/>
    <Raankings/>
    <VibrantCampus/>
    <KnowGitam/>
    <Partnership/>
    <HumanGitam/>
    <UpcomingEvents/>
    <Footer/>
    </>
  );
}

export default App;

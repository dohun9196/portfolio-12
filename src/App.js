
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Gnb, SlideText, BusiArea, PortList, Prologue, Q_menu } from './data/Data';
const App = () => {
  return (
    <>
      <Header Gnb={Gnb} />
      <Main SlideText={SlideText} BusiArea={BusiArea} PortList={PortList} Prologue={Prologue} Q_menu={Q_menu} />
      <Footer />
    </>
  );
}

export default App;

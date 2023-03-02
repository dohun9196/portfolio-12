import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sub01_01 from './components/Sub01_01';
import { Gnb, SlideText, BusText, BusiArea, PortList, Prologue, Q_menu, SubHeader } from './data/Data';

const App = () => {
  return (
    <>

      <Header Gnb={Gnb} />

      <Routes>
        <Route path="/" element={
          <Main SlideText={SlideText} BusText={BusText} BusiArea={BusiArea} PortList={PortList} Prologue={Prologue} Q_menu={Q_menu} />
        } />
        <Route path="/Sub01_0/:subId1" element={
          <Sub01_01 SubHeader={SubHeader} />} />
      </Routes>

      <Footer />

    </>
  );
};

export default App;

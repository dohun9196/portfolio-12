import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gnb, SlideText, BusText, BusiArea, PortList, Prologue, Q_menu, SubHeaderData, CeoTit, CeoDesc, CompanyTit, CompanyTable } from './data/Data';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sub01_01 from './components/Sub01_01';
import Sub01_02 from './components/Sub01_02';
import Sub01_03 from './components/Sub01_03';
import Sub01_04 from './components/Sub01_04';
import Sub01_05 from './components/Sub01_05';
import SubNav from './components/SubNav';
const App = () => {
  return (
    <>
      <Header Gnb={Gnb} />

      <Routes>
        <Route path="/" element={
          <Main SlideText={SlideText} BusText={BusText} BusiArea={BusiArea} PortList={PortList} Prologue={Prologue} Q_menu={Q_menu} />
        } />
        <Route path="/Sub01_01" element={
          <Sub01_01 SubHeaderData={SubHeaderData} CeoTit={CeoTit} CeoDesc={CeoDesc} />} />
        <Route path="/Sub01_02" element={
          <Sub01_02 SubHeaderData={SubHeaderData} CompanyTit={CompanyTit} CompanyTable={CompanyTable} />} />
        <Route path="/Sub01_03" element={
          <Sub01_03 SubHeaderData={SubHeaderData} />} />
        <Route path="/Sub01_04" element={
          <Sub01_04 SubHeaderData={SubHeaderData} />} />
        <Route path="/Sub01_05" element={
          <Sub01_05 SubHeaderData={SubHeaderData} />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

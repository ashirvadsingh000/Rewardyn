import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootP from "./RootP";
import Page1 from "./compages/Page1";
import Page2 from "./compages/Page2";
import Page3 from "./compages/Page3";
import Page4 from "./compages/Page4";
import Page5 from "./compages/Page5";
import Page6 from "./compages/Page6";
import Page7 from "./compages/Page7";
import Page8 from "./compages/Page8";
import Page9 from "./compages/Page9";
import Page10 from "./compages/Page10";
import Page11 from "./compages/Page11";
import Page12 from "./compages/Page12";
import Page13 from "./compages/Page13";
import Page14 from "./compages/Page14";
import Page15 from "./compages/Page15";
import Page16 from "./compages/Page16";
import Page17 from "./compages/Page17";
import Page18 from "./compages/Page18";
import Page19 from "./compages/Page19";
import Page20 from "./compages/Page20";
import Page21 from "./compages/Page21";
import Page22 from "./compages/Page22";
import Page23 from "./compages/Page23";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Auth from './compages/Auth';
import Signup from './compages/Signup';
import UserProfile from './compages/UserProfile'; 


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="*" element={<RootP />} />
        <Route exact path="/" element={<RootP />} />
        <Route exact path="/rootp" element={<RootP />} />
        <Route  path="/page1" element={<Page1 />} />
        <Route  path="/page2" element={<Page2 />} />
        <Route  path="/page3" element={<Page3 />} />
        <Route  path="/page4" element={<Page4 />} />
        <Route  path="/page5" element={<Page5 />} />
        <Route  path="/page6" element={<Page6 />} />
        <Route  path="/page7" element={<Page7 />} />
        <Route  path="/page8" element={<Page8 />} />
        <Route  path="/page9" element={<Page9 />} />
        <Route  path="/page10" element={<Page10 />} />
        <Route  path="/page11" element={<Page11 />} />
        <Route  path="/page12" element={<Page12 />} />
        <Route  path="/page13" element={<Page13 />} />
        <Route  path="/page14" element={<Page14 />} />
        <Route  path="/page15" element={<Page15 />} />
        <Route  path="/page16" element={<Page16 />} />
        <Route  path="/page17" element={<Page17 />} />
        <Route  path="/page18" element={<Page18 />} />
        <Route  path="/page19" element={<Page19 />} />
        <Route  path="/page20" element={<Page20 />} />
        <Route  path="/page21" element={<Page21 />} />
        <Route  path="/page22" element={<Page22 />} />
        <Route  path="/page23" element={<Page23 />} />
        <Route  path="/Auth" element={<Auth/>} />
        <Route  path="/login" element={<Auth/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
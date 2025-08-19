import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './shop/Shop';
import HomePage1 from './components/homePage1/HomePage1';
import Menu from './pages/Menu/Menu';
import Reward from './pages/Reward/Reward';
import Gift_card from './pages/Gift-card/Gift_card';
import Footer from './components/Footer/Footer';
import SignIn from './pages/sign_in/SignIn';
import JoinNow from './pages/join_now/joinNow';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/home' element={<HomePage1 />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reward' element={<Reward />} />
        <Route path='/gift-card' element={<Gift_card />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/join-now' element={<JoinNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

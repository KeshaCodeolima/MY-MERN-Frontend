import {Routes,Route } from 'react-router-dom';
import NavibarPage from './components/NavibarPage';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import HomePage from './components/Pages/HomePage';
import ForgetPage from './components/Pages/ForgetPage';
import AdminPage from './components/Pages/AdminPage';
import UserDetailsPage from './components/Pages/UserDetailsPage';
import ForgetPageEmail from './components/Pages/ForgetPageEmail';
import AboutPage from './components/Pages/AboutPage';

function App() {
  return (
    <div>
       <NavibarPage/>
       <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/forgetpage' element={<ForgetPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/userdetails' element={<UserDetailsPage/>} />
        <Route path='/forgetemail' element={<ForgetPageEmail/>} />
        <Route path ='/aboutus' element={<AboutPage/>}/>
       </Routes>
    </div>
  );
}

export default App;


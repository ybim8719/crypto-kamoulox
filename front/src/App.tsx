import { Layout } from 'antd';
import './App.css';
import HomePage from './pages/Homepage';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './pages/SearchArticles';
import Footer from './components/Layout/Footer';
import { useEffect, useContext } from 'react';
import AuthContextProvider from './store/AuthProvider';
import Memory from './pages/Memory';
import AuthContext from './store/auth-context';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    if (!ctx.isAuth) {
      ctx.searchLocalStorage();
    }
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className='app'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='main'>
            <Layout>
              <div className='routes'>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/auth" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/memory" element={<Memory/>} />
                  </Routes>
              </div>
              <Footer />
            </Layout>
          </div>
        </div>
      </AuthContextProvider>
     
    </BrowserRouter>
  )
}

export default App;

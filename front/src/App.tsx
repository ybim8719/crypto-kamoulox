import { Layout } from 'antd';
import './App.css';
import HomePage from './pages/Homepage';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout>
            <div className='routes'>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </Layout>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;

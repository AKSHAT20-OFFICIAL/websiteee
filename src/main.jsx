import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import BlogPage from './components/Blogs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Blogs" element={<BlogPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
    
  </StrictMode>,
)

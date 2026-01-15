import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './layout/Layout';

import Home from './pages/Home';
import Partnerships from './pages/Partnerships';
import Portfolio from './pages/Portfolio';
import PortfolioArticle from './pages/PortfolioArticle';
import Insights from './pages/Insights';
import InsightArticle from './pages/InsightArticle';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<PortfolioArticle />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightArticle />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

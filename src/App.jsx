import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

import Contact from './pages/Contact';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red', fontFamily: 'sans-serif' }}>
          <h2>Something went wrong!</h2>
          <pre>{this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/sastikeyan-construction/">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

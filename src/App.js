import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import NotFoundPage from './components/NotFoundPage'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/work" component={Work} exact/>
      <Route path="/work/:id" component={ProjectDetail} exact/>
      <Route path="/blog" component={Blog} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route component={NotFoundPage}/>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;

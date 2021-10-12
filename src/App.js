import React from 'react';
import './App.css';
//import { Admin, Resource} from 'react-admin'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './components/pages/ContactUs';
import Blog from './components/pages/Blog'
import Services from './components/pages/Services';
import Solutions from './components/pages/Solutions'
import About from './components/pages/About'
import Career from './components/pages/Career'
import Clients from './components/pages/Clients'
import Admin from './components/pages/Admin';
import AdminQuery from './components/AdminQuery';
import AdminBlogs from './components/AdminBlogs';
import AdminTestimonial from './components/AdminTestimonial';



function App() {


  return (
    <>
      <Router>
      {/* <Navbar /> */}
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/solutions' exact component={Solutions} />
          <Route path='/career' exact component={Career} />
          <Route path='/about' exact component={About} />
          <Route path='/clients' exact component={Clients} />
          <Route path='/contact-us' exact component={ContactUs} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/admin/testimonial' exact component={AdminTestimonial} />
          <Route path='/admin' exact component={AdminBlogs}/>
          <Route path='/admin/query' exact component={AdminQuery} />

        </Switch>
      <Footer/>
      </Router>
    </>
  );
}

export default App;

// default font Font font - GeoSlab703 Md BT


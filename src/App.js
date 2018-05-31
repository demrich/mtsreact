import React, { Component } from 'react';
import Header from './Components/Partials/Header';
import Home from './Components/Home';
import Learn from './Components/Learn';
import Shop from './Components/Shop';
import Footer from './Components/Partials/Footer';
import "./Assets/App.css";
import { HashRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import 'font-awesome/css/font-awesome.min.css';


  
  
class App extends Component {
    render() {       
        return(
            <Router>
                <div className="app">
                <div className="site-body fade-in">
                <Header />
                    <Route path='/' exact component={Home} />
                    <Route path='/learn' exact component={Learn} />
                    <Route path='/shop' exact component={Shop} />

                <Footer />
                </div>
                </div>
            </Router>
        )
    }
}

export default App;  

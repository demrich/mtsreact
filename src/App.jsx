import React, { Component } from 'react';
import Header from './Components/Partials/Header';
import Home from './Components/Home';
import Learn from './Components/Learn';
import Support from './Components/Support';
import Shop from './Components/Shop';
import NotFound from './Components/404';
import Footer from './Components/Partials/Footer';
import "./Assets/App.css";
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import 'font-awesome/css/font-awesome.min.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-120222233-1'); //Unique Google Analytics tracking number
ReactGA.pageview(window.location.pathname + window.location.search);


class App extends Component {
    componentDidMount() {
            window.scrollTo(0, 0)
    }
    
    render() {  
        function fireTracking() {
            ReactGA.pageview(window.location.hash);
        }
             
        return(
            <Router onUpdate={fireTracking}>
                <div className="app">
                <div className="site-body fade-in">
                <Header />
                <Switch>  
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    >
                        <Route path='/' exact component={Home} />
                        <Route path='/learn' exact component={Learn} />
                        <Route path='/shop' exact component={Shop} />
                        <Route path='/support' exact component={Support} />
                        <Route component={NotFound} />
                </AnimatedSwitch>
                </Switch>
                <Footer />

                </div>
                </div>
            </Router>
        )
    }
}

export default App;  

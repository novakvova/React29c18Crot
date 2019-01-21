import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Converter from './Converter';
import Home from './Home';


// import routes from '../routes';

class App extends React.Component {

    componentDidMount() {
        fetch('https://localhost:44347/api/values', 
            {
                method: 'get'
            })
            .then(res => {
                //console.log('---res---', res);
                return res.json();
                //console.log("---Propmis----", res.json());
            })
            .then(data => {
                console.log("------data--------",data);
            })
            .catch(er => {
                console.log('--error--', er.message);
            });
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-item nav-link" to="/convert">Converter</Link>
                        </div>
                    </div>
                </nav>


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/convert' component={Converter} />
                </Switch>
            </div>
        );
    }

   
}

export default App;




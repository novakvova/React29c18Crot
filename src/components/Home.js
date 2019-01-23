import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';

import store from '../store/';

class Home extends Component {
    // componentDidMount() {
    //     fetch('')
    // }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
        );
    }
}

export default Home; 
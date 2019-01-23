import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    onClickUpCounter=() =>
    {
        console.log('--btn click ++--');
        this.props.dispatch({ type: 'INCREMENT' });
    }
    render() {
        console.log('--this.props Counter--', this.props)
        return (
            <div>
                <h2>
                    Counter Page
                </h2>
                <button onClick={this.onClickUpCounter}>++</button>
            </div>
        );
    }
}


function mapStateProps(state)
{
    console.log('----map state by redux to props----', state);
    return {
        count: state.countRedux
    };
}

export default connect(mapStateProps)(Counter); //connect(mapStateProps,mapDispatchToProps)(Counter);
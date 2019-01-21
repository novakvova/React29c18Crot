import React from 'react';

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
            <h1>Hello ASP.NET Core</h1>
        );
    }

   
}

export default App;




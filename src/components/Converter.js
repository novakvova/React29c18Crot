import React from 'react';

class Converter extends React.Component {

    state = {
        ccy: [],
        summ: {},
        isLoad: false
    };

    componentDidMount() {
        this.setState({ isLoad: true });
        setTimeout(() => {
            fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    this.setState({ ccy: data });
                    //this.setState({ isLoad: false });
                })
                .catch(er => alert(`Проблем сервер ${er.message}`));
        }, 5);
    }

    render() {
        //console.log("---props---", this.props);
        console.log("--state---", this.state);
        const { slavik } = this.props;
        const { isLoad } = this.state;// ? "Loading ..." : "";
        const options=this.state.ccy.map((item)=>{
            return (
                <option key={item.ccy}>{item.ccy}</option>
            );
        });
        return (
            <div>
                {isLoad && <p>Loading...</p>}
                <h1>Hello {slavik}</h1>
                <label>Сума на обмін</label>
                <input type="text" onChange={this.onChange} />
                {!isLoad && <select onChange={this.onSelect}> 
                <option></option>
                {options} </select>
                }
            </div>
        );
    }
    onChange=(e) => {
        console.log("---e--", e.target.value);
        this.setState({summ: e.target.value});

    }
    onSelect = (e) => {
        const val =  e.target.value;
        //console.log("Select ", e.target.value);
        const ccy=this.state.ccy.find((item)=>item.ccy===val);
        if(ccy)
        {
            alert(this.state.summ* ccy.buy);
        }
        console.log('--ccy---', ccy);
        //alert()
    } 
}
export default Converter;
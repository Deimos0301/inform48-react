import React from "react";
import App from "../App";
import Employeers from "../Products"
import '../App.css'
import Emps from "./Emps";

class NewEmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            surename: 'surename',
            age: 'age',
            position: 'position'
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    onNewEmpCallback = () => {
        alert('fhe');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        console.log('!!!')
        event.preventDefault();
    }

    render() {
        const { name, surename, age, position } = this.props;
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <label className="formTitle">
                    Имя:
                    <input className='inputForm' type="text" value={name} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Фамилия:
                    <input className='inputForm' type="text" value={surename} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Возраст:
                    <input className='inputForm' type="text" value={age} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Профессия:
                    <input className='inputForm' type="text" value={position} onChange={this.handleChange} />
                </label>
                <input className='formSubmit' type="submit" value="Отправить" onClick={this.handleSubmit} />
            </form>
        )
    }
}
export default NewEmp;
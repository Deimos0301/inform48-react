import React from "react";
import App from "../App";
import Employeers from "../Products"
import '../App.css'
import Emps from "./Emps";
import { Keys } from "@blueprintjs/core";

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

    user = {
        name: '',
        surename: '',
        age: '',
        position: ''
    };



    onNewEmpCallback = () => {
        alert('fhe');
    }

    handleChange(event) {
        let val = event.target.value;
        this.setState({ value: val });
        switch(event.target.name){
            case 'name': 
                this.user.name = val;
                break;
            case 'surename':
                this.user.surename = val;
                break;
            case 'age':
                this.user.age = val;
                break;
            case 'position':
                this.user.position = val;
                break;
            default: ;
        }
    }

    handleSubmit = (event) => {
        console.log('!!!')
        event.preventDefault();
    }

    render() {
        const { name, surename, age, position, onAddNewUser } = this.props;
        return (
            <form className='form' onSubmit={(event) => { onAddNewUser(event, this.user) }}>
                <label className="formTitle">
                    Имя:
                    <input className='inputForm' name='name' type="text" value={name} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Фамилия:
                    <input className='inputForm' name='surename' type="text" value={surename} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Возраст:
                    <input className='inputForm' name='age' type="text" value={age} onChange={this.handleChange} />
                </label>
                <label className="formTitle">
                    Профессия:
                    <input className='inputForm' name='position' type="text" value={position} onChange={this.handleChange} />
                </label>
                <input className='formSubmit' type="submit" value="Отправить" />
            </form>
        )
    }
}
export default NewEmp;
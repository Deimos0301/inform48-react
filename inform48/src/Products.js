import React, { Component } from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Navbar, Alignment, Menu, MenuItem, MenuDivider, Button, Intent, NavbarGroup, ButtonGroup } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Link } from 'react-router-dom';
import Emps from './Components/Emps';
import NewEmp from './Components/NewEmp';


class Employeers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.Emps,
            index: 0
        };
    }

    handleClick = (newIndex) => {
        console.log(newIndex);
        this.setState({ index: newIndex })
    }

    Emps = [
        {
            name: 'Василий',
            surename: 'Петров',
            age: 12,
            position: 'Программист',
            ownership: [
                'пиво', 'марихуана', 'компьютер'
            ]
        },
        {
            name: 'Геннадий',
            surename: 'Семенов',
            age: 42,
            position: 'Продакт менеджер',
            ownership: [
                'книги', 'автомобиль'
            ]
        },
        {
            name: 'Игорь',
            surename: 'Шишкин',
            age: 22,
            position: 'Сейлз менеджер',
            ownership: [
                'кот', 'велосипед', 'клюшка для гольфа'
            ]
        },
        {
            name: 'Авдотья',
            surename: 'Иванова',
            age: 10,
            position: 'Клининг менеджер',
            ownership: [
                'семечки', 'газеты', 'лавочка у подъезда'
            ]
        },
    ];

    addNewUser = (event, user) => {
        user.ownership = [];
        if (!user.ownership) {
            console.log('yes!')
        } else {
            this.Emps.push(user);
            this.setState({
                nodes: this.Emps
            })
        }
        event.preventDefault();
    }


    render() {

        const { index } = this.state;

        return (
            <div className='EmpList'>
                <div className='EmpTitle'>Список сотрудников</div>
                {
                    this.Emps.map((item, index) => {
                        return (<Button key={`b${index}`} className='EmpBtn' text={`${item.surename} ${item.name}`} onClick={() => { this.handleClick(index) }} />)
                    })
                }
                <Emps
                    name={this.Emps[index].name}
                    surename={this.Emps[index].surename}
                    age={this.Emps[index].age}
                    position={this.Emps[index].position}
                    ownership={this.Emps[index].ownership}
                />
                <NewEmp onAddNewUser={this.addNewUser} />
            </div>
        );
    };
}



export default Employeers;
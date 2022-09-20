import React, { Component } from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Navbar, Alignment, Menu, MenuItem, MenuDivider, Button, Intent, NavbarGroup, ButtonGroup } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Link } from 'react-router-dom';
import Emps from './Components/Emps';


class Employeers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: this.Emps,
            index: 0
        };
    }

    handleClick = (newIndex) => {
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
        }
    ];



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
                {
                    this.Emps.map((item, index) => {
                        return (
                            <ul>
                                <li>{`${item.ownership[0]}`}</li>
                                <li>{`${item.ownership}`}</li>
                                <li>{`${item.ownership}`}</li>
                                <li>{`${item.ownership}`}</li>
                            </ul>
                        )
                    })
                }
                <Emps name={this.Emps[index].name} surename={this.Emps[index].surename} age={this.Emps[index].age} position={this.Emps[index].position} ownership={this.Emps[index].ownership} />
            </div>
        );
    };
}



export default Employeers;
import React, { Component } from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Navbar, Alignment, Menu, MenuItem, MenuDivider, Button, Intent, NavbarGroup, ButtonGroup } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";

class Employeers extends React.Component {

    constructor(props) {
        super(props);

        this.name = this.props.name;
        this.surename = this.props.surename;
        this.age = this.props.age;
        this.position = this.props.position;
    }

    employeers = [
        {
            name: 'Василий',
            surename: 'Петров',
            age: 32,
            position: 'Программист'
        },
        {
            name: 'Геннадий',
            surename: 'Семенов',
            age: 42,
            position: 'Продакт менеджер'
        },
        {
            name: 'Игорь',
            surename: 'Шишкин',
            age: 22,
            position: 'Сейлз менеджер'
        },
        {
            name: 'Авдотья',
            surename: 'Иванова',
            age: 52,
            position: 'Клининг менеджер'
        }
    ];

    render() {
        return () => {
            return <div>Hi, {this.employeers.name}</div>
        }
    }
};

export default Employeers;
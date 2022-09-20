import React, { Component } from "react";

class Emps extends Component {
    constructor(props) {
        super(props);
        this.props = props;

    }

    render() {
        const { name, surename, age, position, ownership } = this.props;
        let Btn = 'EmpItem'
        if (age < 18) {Btn = 'EmpItemRed'};

        return (
            <div className = {Btn}>
                <div className='EmpName'>{name}</div>
                <div className='EmpSurename'>{surename}</div>
                <div className='EmpAge'>{age}</div>
                <div className='EmpPosition'>{position}</div>
                <div className='EmpOwnership'>{ownership}</div>
            </div>
        )
    }
}

export default Emps;


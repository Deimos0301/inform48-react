import React, { Component, Fragment } from "react";
import NewEmp from './NewEmp.js'

class Emps extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { name, surename, age, position, ownership, callBack } = this.props;
        let Btn = 'EmpItem'
        if (age < 18) { Btn = 'EmpItemRed' };

        return (
            <Fragment >
                <div className={Btn}>
                    <div className='EmpName' onClick={() => { callBack(name) }}>{name}</div>
                    <div className='EmpSurename'>{surename}</div>
                    <div className='EmpAge' onClick={() => { callBack(age) }}>{age}</div>
                    <div className='EmpPosition'>{position}</div>
                </div>
                <ul>
                    {
                        ownership.map((item, index) => {
                            return (
                                <li className='EmpLi'key={`l${index}`}>{`${item}`}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )





    }
}

export default Emps;


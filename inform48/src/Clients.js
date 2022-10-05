import React, { Component, Fragment, useState, useEffect } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Button } from "@blueprintjs/core";
import './App.css';

class Clients extends Component {
    apiUrl = "https://rickandmortyapi.com/api/character/";

    state = {
        index: null,
        person: null,
    };


    handleClick = (index) => {
        const fetchUrl = async (id) => {
            const response = await fetch(`${this.apiUrl}${id}`);
            const result = await response.json();
            this.setState({ person: result });
        };

        const obj = this.personArray[index];
        const id = obj.id;
        fetchUrl(id);

    };


    loading = () => {
        return <div>Загрузка данных...</div>;
    };


    displayCard = () => {
        const { person } = this.state;
        if (!person) return (<div></div>);

        return (
            <Fragment>
                <div className="personInfo">Name: {person.name}</div>
                <div className="personInfo">Status: {person.status}</div>
                <div className="personInfo">Species: {person.species}</div>
                <div className="personInfo">Gender: {person.gender}</div>
                <img className="personImg child-active" src={person.image} alt="weee" />
            </Fragment >
        );
    }

    displayList = () => {
        if (!this.personArray) return (<div></div>);
        console.log(this.personArray);
        return (
            this.personArray.map((item, index) => {
                return (
                    <ul className='characterList'>
                        <li><Button className="characterItem" key={`C${index}`} onClick={() => this.handleClick(index)}>{item.name}</Button></li>
                    </ul>
                )
            })
        );
    };

    componentDidMount = () => {
        const fetchUrl = async () => {
            const response = await fetch(`${this.apiUrl}`);
            const result = await response.json();
            this.personArray = result.results;
        };
        fetchUrl();

    };




    // characterList = () => {
    //     results.map((item, index) => {
    //         return (Загрузка данных...
    //             <ul className='characterList'>
    //                 <Button className="characterItem" key={`c${index}`}>{index}{item.name}</Button>
    //             </ul>
    //         );
    //     });
    // };
    // get characterList() {
    //     return this.characterList;
    // }
    // set characterList(value) {
    //     this.characterList = value;
    // }

    render() {
        const { displayList } = this.displayList;
        const { displayCard } = this;


        return (
            <div className="rickAndMorty__item">
                <div className="displayList">
                    {this.displayList()}
                </div>
                <div className="displayCard">
                    {displayCard()}
                </div>
            </div>
        );
    };


}


export default Clients
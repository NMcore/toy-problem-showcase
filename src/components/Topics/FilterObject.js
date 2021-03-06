import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterEmployees = (filterThis) => {

        let employees = this.state.employees;
        let filteredEmployees = [];

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].hasOwnProperty(filterThis)) {
                filteredEmployees.push(employees[i]);
            }
        }

        this.setState({ filteredEmployees: filteredEmployees });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.employees)} </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredEmployees)} </span>
            </div>
        )
    }
}
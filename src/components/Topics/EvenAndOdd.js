import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChnage(val) {
        this.setState({ userInput: val });
    }
    //looked at the solution after I thought I solved this, clearly didn't understand what it was asking. 
    //did this again using .split unfortunatly I didn't understand that was a thing until now
    //also have not used parsedInt much so that is fun    
    assignEvenAndOdds = (userInput) => {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push((arr[i]));
            } else {
                odds.push(parseInt(arr[i]));
            }
        }

        this.setState({ evenArray: evens, oddArray: odds });
    }


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Even and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChnage(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox">Evens: {this.state.evenArray.toString()}</span>
                <span className="resultsBox">Odd: {(this.state.oddArray.toString())}</span>
            </div>
        )
    }
}


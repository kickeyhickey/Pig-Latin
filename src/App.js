import React, { Component } from 'react'
import './App.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear"
    }
  }

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ");
    console.log("userInput", userInput);


    let translatedWordsArray = userInput.map(currentWord => {
      console.log("currentWord", currentWord);

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray", vowelsArray);


      // Your code here!
      let vowels = [/aeiou/i]
      let vowelIndex = currentWord.match(/[aeiou]/i) || 0;
      let vowel = currentWord.indexOf(vowelIndex[0])
      let yChar = currentWord.indexOf('y')

      //search to see if the first letter of the current word is a vowel, if so, return the word + "way"
      if (vowel === 0) {
        return currentWord + "way"
      }
      //search to see if the first index of the word is "q", if so return the word, up to the 2nd vowel (this removes the q + u), and return current 
      else if (currentWord[0] === 'q' || currentWord[0] === 'q' && currentWord[1] === 'u') {
        return currentWord.substring(vowel + 1) + currentWord.substring(0, vowel + 1) + 'ay'
      }
      //search to see if the second letter of the current word is q, if so, return the current word up to the vowel + 1, and append const1 (usually s), q, and the next vowel
      else if (currentWord[1] === 'q') {
        return currentWord.substring(vowel + 1) + currentWord.substring(0, vowel + 1) + 'ay'
      }
      // search to see if the first letter of the current word is y
      //if so, return the substring up to the first vowel after y, and append to the end of the sliced currentWord the characters up to the yChar
      else if (yChar === 0) {
        return currentWord.substring(yChar + 1) + currentWord.substring(0, yChar) + 'ay'
      }
      //if the word does not contain values found in vowel, and does contain a y
      //return the substring up to the y character, and append the substring up to

      else if (currentWord.match('y') && currentWord.match(vowels) !== true) {
        return currentWord.substring(yChar) + currentWord.substring(0, yChar) + 'ay'
      }
      else { return currentWord.substring(vowel) + currentWord.substring(0, vowel) + 'ay' }

    })

    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords", translatedWords);

    this.setState({ phraseTranslated: translatedWords })
  }


  restartGame = () => {
    this.setState({
      phrase: "alpha through yummy squal queen fry",
      phraseTranslated: "this is where your translated sentence will appear"
    })
  }

  setUpPreventDefault = (e) => {
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleInput = (e) => {
    // this method takes the input and saves the value in the this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <div className="inputArea">
          <h4> Enter phrase to be translated:</h4>
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by Hickey</footer>
      </>
    )
  }
}

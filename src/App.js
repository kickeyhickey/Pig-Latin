import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ")
    console.log("userInput", userInput);


    // the variable "userInput" will contain the text input from the user modified into an array of words

    // no need to change this variable
    // now that we have an array of words, we can map over the array and access each word
    // ACTION ITEM: use "currentWord" as a starting point for your code
    let translatedWordsArray = userInput.map(currentWord => {
      console.log("currentWord", currentWord);
      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray", vowelsArray);


      let vowels = [/aeiou/i]
      let vowelIndex = currentWord.match(/[aeiou]/i) || 0;
      let vowel = currentWord.indexOf(vowelIndex[0])
      let yChar = currentWord.indexOf('y')



      // your code here!
      // create a variable using regular expressions with all of the vowels, that are case insensitive

      //search to see if the first letter of the current word is a vowel, if so, return the word + "way"
      if (vowel === 0) {
        return currentWord + "way"
      }

      //search to see if the first index of the word is "q", if so return the word, up to the 2nd vowel (this removes the q + u), and return current 

      //search to see if the second letter of the current word is q, if so, return the current word up to the vowel + 1, and append const1 (usually s), q, and the next vowel


      //search to see if the first letter of the current word is y
      //if so, return the substring up to the first vowel after y, and append to the end of the sliced currentWord the characters up to the yChar


      //if the word does not contain values found in vowel, and does contain a y
      //return the substring up to the y character, and append the substring up to





      // Remember: console.log is your friend :)
      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word


      // joining the array back to a string of translated words

      // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user

      // this method restarts the game by setting the original state
      // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
      return currentWord
    })

    let translatedWords = translatedWordsArray.join(" ")
    console.log("translated word", translatedWords);
    this.setState({ phraseTranslated: translatedWords })

  }
  restartGame = () => {
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // this method prevents React from refreshing the page unnecessarily
  setUpPreventDefault = (e) => {
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // this method takes the input and saves the value in this.state.phrase so we can use the input in our program

  handleInput = (e) => {
    this.setState({ phrase: e.target.value })
  }





  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img></img>
        <div className='inputArea'></div>
        <h1>This is where you put in your phrase to be translated</h1>
        <input
          type="text"
          className='userInput'
          onChange={this.handleInput}
          value={this.state.phrase}
        />
        <br />
        <button
          onClick={this.setUpPreventDefault}
        >Submit
        </button>
        <button
          onClick={this.restartGame}
        >Restart
        </button>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by Hickey</footer>
      </>
    )
  }
}

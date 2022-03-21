import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
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

  let vowelIndex = currentWord.search(/[aeiou]/i)
  let yIndex = currentWord.search(/[y]/i)
  let quIndex = currentWord.indexOf("qu")
  let testString = "squid"
  console.log("here", testString.toLowerCase().indexOf("qu") );

    return currentWord
})

  let translatedWords = translatedWordsArray.join(" ")
  console.log("translatedWords", translatedWords);

  this.setState({ phraseTranslated: translatedWords})
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

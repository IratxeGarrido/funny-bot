import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="chat"
export default class extends Controller {
  static targets = ["messages", "userMessage", "conversation", "button"]
  static values = {
    state: String,
    jokes: Object,
  }

  connect() {
    this.#startChat()
  }

  open() {
    this.buttonTarget.setAttribute('hidden', '')
    this.conversationTarget.classList.remove("hidden");
  }

  close() {
    this.conversationTarget.setAttribute('hidden', '')
    this.buttonTarget.classList.remove("hidden")
  }

  #startChat() {
    // state start
    let botText = `Welcome! Do you want to hear a joke?`
    this.#sendComputerMessage(botText)
    botText = `You can choose a category by typing its name:\n ${Object.keys(this.jokesValue).join("\n")}`
    this.#sendComputerMessage(botText)
    // state playing
    this.stateValue = "playing"
  }

  sendMessage(event){
    console.log(this.userMessageTarget)
    event.preventDefault()
    this.#sendUserMessage(this.userMessageTarget.value)
    if (this.stateValue == "end") {
      this.#checkEndState(this.userMessageTarget.value)
    }
    else if (this.stateValue == "playing") {
      this.#checkInput(this.userMessageTarget.value)
    }
    this.userMessageTarget.value = ""
  }

  #checkInput(userInput = "") {
    const loweCaseUserInput = userInput.toLowerCase()
    if (Object.keys(this.jokesValue).includes(loweCaseUserInput)) {
      // send joke
      this.#sendJoke(loweCaseUserInput)
      // do you want to keep playing?
      this.#keepPlaying()
      // end state
    }
    else {
      this.#continuePlaying()
    }
  }

  #continuePlaying() {
    const botText = `Please choose either ${Object.keys(this.jokesValue).join("\n")}`
    this.#sendComputerMessage(botText)
  }

  #sendJoke(category) {
    var joke = ""
    switch (category) {
      case Object.keys(this.jokesValue)[0]:
        joke = this.jokesValue.pun[Math.floor(Math.random() * this.jokesValue.pun.length)]
        break;
      case Object.keys(this.jokesValue)[1]:
        joke = this.jokesValue.programming[Math.floor(Math.random() * this.jokesValue.programming.length)]
        break;
      case Object.keys(this.jokesValue)[2]:
        joke = this.jokesValue["dad jokes"][Math.floor(Math.random() * this.jokesValue["dad jokes"].length)]
    }
    this.stateValue = "end"
    this.#sendComputerMessage(joke)
  }

  #keepPlaying() {
    this.#sendComputerMessage('Do you want to hear another joke?')
    this.#sendComputerMessage(`Just type 'yes' or 'no'.`)
  }

  #checkEndState(message) {
    if (message === 'yes') {
      this.stateValue = 'playing'
      this.#continuePlaying()
    }
    else if (message === 'no') {
      this.stateValue = "end"
      this.#endChat()
    }
  }
  #sendComputerMessage(message) {
      const messageElement = `
      <div class="mb-2 text-right">
        <p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block whitespace-break-spaces">${message}</p>
      </div>
      `
      this.messagesTarget.insertAdjacentHTML("beforeend", messageElement)
      this.messagesTarget.scrollTop = this.messagesTarget.scrollHeight
    }

  #sendUserMessage(message) {
    const messageElement = `
      <div class="mb-2">
        <p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>
      </div>
      `
      this.messagesTarget.insertAdjacentHTML("beforeend", messageElement)
    }

  #endChat() {
    this.#sendComputerMessage('See you next time!')
  }

}

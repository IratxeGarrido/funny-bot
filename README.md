# README

## Setup

```
bundle install
bin/dev
```

You can see the running app at `localhost:3000`

##  Learning journey
I first coded the challenge on ruby on the terminal. Since I wanted to challenge myself more a decided to create a rails app and also code the front-end. I find it easier to iterate over a working idea than create something big from the beginning.


The app has a controller `chats_controller.rb` with and index method and the `@jokes` and `@state` variables. The view `index.html.erb` is where you can see the HTML for the chat box. I've been learning a bit of tailwind recently, so I decided to do the front-end with it. I googled for a chat-bot template and I used that as the basic structure for this project. To get the user's input I used a form.

I created a stimulus controller `chat_controller.js` to manage the messages. When you click on `+ Chat with Funny Bot` the chat opens and you can select a joke category from the list. User's messages are grey and the computer's ones in blue.

I created a `state (start, playing, end)` for the chat to know when to ask the user if they want to keep playing or the list of categories. This took me a bit of time because the logic works differently from the terminal. I took the decision to have create a stimulus controller because I want to learn more JS, so this was a good opportunity.

I found the whole challenge quite entertaining and I really enjoyed going from my CLI ruby app to a rails app with a proper UI. I learned a bit more of JS and I learned that when you pass a hash value from rails to stimulus you need to add `.to_json` to the value so the stimulus controller can read it as an object. I got stuck on that for a while, but I found a solution in the end.

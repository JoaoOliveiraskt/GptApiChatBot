import { useState } from 'react'
import './Chat.css'

import Header from './Header'
import Footer from './Footer'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator}  from '@chatscope/chat-ui-kit-react'

const API_KEY = "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"


function Chat() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT"
    }
  ]) // []

const handleSend = async (message) => {
  const newMessage = {
    message: message,
    sender: "user",
    direction: "outgoing"
  }

  const newMessages = [...messages, newMessage];

  setMessages(newMessages)

  setTyping(true);

  await processMessageToChatGPT(newMessages)
}

async function processMessageToChatGPT(chatMessages) {
  
  let apiMessages = chatMessages.map((messageObject) => {
    let role = ""
    if(messageObject.sender === "ChatGPT") {
      role="assistant"
    } else {
      role = "user"
    }
    return { role: role, content: messageObject.message}
  })

  const systemMessage = {
    role: "system",
    content: 
    "Você é super inteligente que dá respostas criativas e inovadoras de forma totalmente amigável"
  }

  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,
      ...apiMessages
    ]
  }

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + API_KEY ,
      "Content-type": "application/json"
    },
    body: JSON.stringify(apiRequestBody)
  }).then((data) => {
    return data.json();
  }).then((data) => {
    console.log(data);
    console.log(data.choices[0].message.content);
    setMessages(
      [...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]
    );
    setTyping(false);
  })
}


  return (
    <div className="App">
        
        <Header />
      <div style={
        {
        position: "relative", 
        height: "700px", 
        top:"100px", 
        width:"800px",
        margin: "auto"
        
        }
        }>
        <MainContainer style={{color:"black"}}>
          <ChatContainer>
            <MessageList style={{color:"black"}}
            scrollBehavior='smooth'
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null }
            >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
            </MessageList>
            <MessageInput style={{color:"black"}} placeholder='Type message here!' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
      <Footer />
    </div>
  )
}

export default Chat;




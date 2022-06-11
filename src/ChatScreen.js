import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');


        const [messages, setMessages]  = useState([
            {
                name:'Jim',
                image: 'https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY317_CR22,0,214,317_AL_.jpg',
                message: 'YO whats up?!',

            },
            {
                name:'Jim',
                image: 'https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY317_CR22,0,214,317_AL_.jpg',
                message: 'you there?!',

            },
            {
                message: "hi",
            },
        ]);

        const handleSubmit = e => {
            e.preventDefault();
            setMessages([...messages, {message: input}]);
            setInput('');
        }


    return (
        <div className="chatScreen" >
                <p className="chatScreen__timestamp" >
                    YOU MATCHED WITH JIM ON 6/11/2022
                    </p>
                {messages.map(message => (
                    message.name ? (
                        <div className="chatScreen__message" >
                        <Avatar className="chatScreen__image" 
                        alt={message.name}
                        src={message.image} > 
                        </Avatar>
                         <p className="chatScreen__text" >{message.message}
                           </p>
                      </div>
                    ) : (
                        <div className="chatScreen__message" >
                         <p className="chatScreen__textUser" >{message.message}</p>
                      </div>
                    )
                    
                )
                )}
               
                    <form className="ChatScreen__input" >
                        <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message..." 
                        type="text" 
                        className="chatScreen__inputField" />
                        <button  onClick={handleSubmit} type="submit" className="chatScreen__inputButton" >SEND</button> 
                    </form>
                
        </div>
    );
}
export default ChatScreen;
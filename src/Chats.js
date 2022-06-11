import React from "react";
import './Chats.css';
import Chat from "./Chat";



function Chats() {
    return <div> 
        <Chat 
        name="Jim"
        message="YO whats up!"
        timestamp= "40 seconds ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY317_CR22,0,214,317_AL_.jpg">  
        </Chat>
        <Chat 
        name="Natalie"
        message="Hello do you want to get coffee?"
        timestamp= "5 minutes ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BOTIxMzc4NjI5NF5BMl5BanBnXkFtZTgwNjQ0NTUzNjM@._V1_UY317_CR131,0,214,317_AL_.jpg">  
        </Chat>
        <Chat 
        name="Bryan"
        message="Do you want to do a science experiment?"
        timestamp= "40 minutes ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg">  
        </Chat>
        <Chat 
        name="Anne"
        message="I think I like you..."
        timestamp= "2 days ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY317_CR20,0,214,317_AL_.jpg">  
        </Chat>
        
    </div>;
}





export default Chats;
/*Skapa ett nytt react projekt med hjälp av create react app
Rendera en greeting (ändra beroende på ifall personen är över 18 eller under)
Rendera all information i userData med hjälp av en komponent
Rendera ut lista med favorit artister*/

import React from "react";
import Greeting from "./components/Greeting";
import UserDataInfo from "./components/UserDataInfo";


function App() {

  const greetingText = "Hej och hå";

  const userData = {
    userName: "ninahovinmaa",
    firstName: "Nina",
    lastName: "Hovinmaa",
    yearOfBirth: 2005,
    location: "Stockholm",
  };

  const artists = [
    "I Am Karate",
    "Star Horse"
  ]


  return (
    <div>
      <Greeting 
        greeting={greetingText} 
        userName={userData.firstName}
        yearOfBirth={userData.yearOfBirth}
      />
      <UserDataInfo userData={userData.userName}/>
      <UserDataInfo userData={userData.firstName}/>
      <UserDataInfo userData={userData.lastName}/>
      <UserDataInfo userData={userData.yearOfBirth}/>
      <UserDataInfo userData={userData.location}/>
      <h2>My Favorite Artists</h2>
      <ul>
        {artists.map((artist,index) => {
         return <li key={index}>{artist}</li>
        })}
      </ul>
    </div>

  ) 
}

export default App;

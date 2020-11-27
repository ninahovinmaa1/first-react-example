import React from 'react'

function Greeting({ greeting, firstName, yearOfBirth }) {

    const age = new Date().getFullYear() - yearOfBirth;
    let ageSpecificGreeting = "";
    if (age > 18) {
        ageSpecificGreeting = greeting;
    } else {
        ageSpecificGreeting = greeting.replace("Hej", "Tja")
    }

    return (
        <h1>{ageSpecificGreeting}, {firstName}</h1>
    )
}


export default Greeting;
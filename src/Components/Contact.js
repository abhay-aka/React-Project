import React from 'react';

const Contacts = () => {
    const alertUser = (event) => {
        event.preventDefault(); // Prevents the form from submitting
        console.log("Mail Sent Successfully.");
    }

    return (
        <div>
            <h2>
                Contact Us
            </h2> 
            <div>
                <form onSubmit={alertUser}>
                    <label htmlFor="name">Enter your Name:</label>
                    <input type="text" id="name" name="name"></input>
                    
                    <label htmlFor="email">Enter your Email:</label>
                    <input type="email" id="email" name="email"></input>
                    
                    <label htmlFor="subject">Subject:</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default Contacts;

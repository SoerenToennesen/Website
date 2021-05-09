import React from 'react';
import '../../App.css';
import '../ContactMe.css';

export default function ContactMe() {
    function submitEmail(e){ 
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let subject = document.getElementById('subject');
        let message = document.getElementById('message');
        e.preventDefault();
        let formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        if (formData.name === '' || formData.email === ''
         || formData.subject === ''
         || formData.message === '') {
             alert('Please fill out all fields.')
         }
        else {alert('Not implemented yet! Although I can see:'
         + '\nName: '+ formData.name 
         + '\nEmail: ' + formData.email
         + '\nSubject: ' + formData.subject
         + '\nMessage: ' + formData.message
         )
        }
        /*let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function() {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
                alert('Email sent');
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            }
            else {
                alert('Something went wrong!')
            }
        }
        xhr.send(JSON.stringify(formData));*/
    }


    return (
        <>
            {/*<h1>CONTACT ME</h1>*/}
            <div className="form-container">
                <form className="contact-form">
                    <h2>Contact me</h2>
                    <input type="text" id="name" placeholder="Full name" /><br />
                    <input type="email" id="email" placeholder="Email" /><br />
                    <input type="test" id="subject" placeholder="Subject" /><br />
                    <textarea className="textareamessage" id="message" placeholder="Message" cols="30" rows="7" /><br />
                    <div type="submit" className="submit" onClick={(e) => submitEmail(e)}>
                        <div className="submit-meta">
                            Send Message
                        </div>
                    </div>
                    {/*<input type="submit" class="submit" value="Send Message"/>*/}
                </form>
            </div>

            
        </>
    );
}
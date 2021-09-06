import React from 'react';
import Form from '../images/form-img.png';



const Content = () => {






    return (
        <section className="section4">

            <h1 className="section-heading">
                Contact
            </h1>

            <div class="form-container">
                <img src={Form}  className=
                "form-img"/>


                <form className="contact-form">
                    <input type="text" placeholder="Your name"/>
                    
                    <input type="email" placeholder="Your email"/>


                    <textarea placeholder="Your message">

                    </textarea>
                    <input type="submit" value="send"/>

                </form>
            </div>
            <p class="copyright">
                Copyright &copy;
            </p>
        </section>
    )
}



export default Content;
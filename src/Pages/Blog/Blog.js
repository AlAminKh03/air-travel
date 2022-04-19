import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <h2>Difference between Authentication and Authorization  </h2>
                <p>Authentication: Authentication means verifying someone. In web it's vrified by email, password ,username etc many things. It's like if someone want to visit a country then he had to have passport ,visa id etc then he can visit , in Web it's exactly same </p>
                <p>Authrization: Authorization means if some is Authentic he can have some previlige in web site, it's the second proceess after Authentication</p>
            </div>
            <div className='blog'>
                <h2>Why Firebase? what other option do we have to implement Authentication?</h2>
                <p>Firebase Authentication provides us Email and password Authentication also it provides us Gmail,Github and Facebook authentication, mostly do backend things.

                    We also have some other option to implement Authentication thouh firebase is best as simple.
                    those are Parse,Back4App,Kinvey etc.

                </p>
            </div>
            <div className='blog'>
                <h2>What other services does firebase provide other than authentication?</h2>
                <p>As far we learn from firebase is Authentication But it provides more than that , It's also a Hosting website.Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps too. It provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
            </div>
        </div>
    );
};

export default Blog;
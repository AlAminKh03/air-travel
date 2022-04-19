import React from 'react';
import myself from "../../picture/myself.jpg"
import "./About.css"

const About = () => {
    return (
        <div className='text-center '>
            <h1 className='mt-5 mb-5'>About me and My Goal </h1>
            <div className='about-container'>
                <div className='about-img'>
                    <img src={myself} alt="" />
                </div>
                <div >
                    <div className='about'>
                        <p>Hello Everyone This is Al Amin Khan.My Goal is to become a Web developer. I've started this journey with simple HTML and CSS. It got my Attention and so i looked forward for it. Although there's huge resources about this section but there's no guideline about it. Also there's huge lack of resource in my own language and i found a perfect platform to help  me. It's almost 4 monthes since i joined in Programming hero. The journy is continuing, Let's see where the end going.</p>


                    </div>
                    <div className='about'>
                        <h2>About Hard Work</h2>
                        <p>I'm working hard to acquire my dream.Though everytime it seems like i'm not doing that hard work.I mean Coding can be furstrating sometimes.then when i think that i'm not doing hard work when i stuck on something. Then i remeber Hard work pay off and i've to be an more hard worker!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
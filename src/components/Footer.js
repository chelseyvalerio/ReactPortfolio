import React from 'react';

function Footer() {
const links = [
    {
        name: "gitHub",
        link: "https://github.com/chelseyvalerio"
    },
    {
        name: "linkedIn",
        link: "https://www.linkedin.com/in/chelsey-valerio-a331b1163/"
    }
]

    return (
        <footer>
            {links.map(links => 
                (
                    <a href= {links.link} key={links.name} target="_blank"><i className={links.name}></i></a>
                ))}
            <h4>Thank you for your Time</h4>
        </footer>
    );
}

export default Footer;
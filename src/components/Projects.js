import React from 'react';
// import Works from './Works.js';

import image1 from '../images/chicken serach.jpg'
import image2 from '../images/wallstreet-curiosity-watchlist.png'
import image3 from '../images/myboardgameshelf.png'

{/* <div><h4>Click on the image to visit the deployed application</h4></div> */}

const listProjects = [
    { image: image1, title: "Recipe Generator", text: "Tired of trying to figure out whats for dinner while accomdating everyone's different food preferences and allergies? Checkout the Recipe Generator where you can customize any meal to your families needs. Click on the picture to check out the deployed application", link: "https://agnellod.github.io/nutrition-recipies-/", repolink: "https://github.com/agnellod/nutrition-recipies-" },
    { image: image2, title: "Wall Street Watchlist", text: "Where you can track your owned stocks as well as strategize for your next investment. Real time updates anywhere you are. Click on the picture to check out the deployed application", link: "https://yoel211.github.io/Stock-Watchers-/", repolink: "https://github.com/Yoel211/Stock-Watchers-" },
    { image: image3, title: "My GameBoard Shelf", text:  "The easiest way to plan for a fun filled game night with family and friends. Complete with new ideas, instructions, number of players needed, and even search by game categories. Click on the picture to check out the deployed application", link: "https://peaceful-hollows-27199.herokuapp.com/", repolink: "https://github.com/chelseyvalerio/mygameshelf" },
]

function Projects() {

  return (
      <div className='projects'>
            {listProjects.map(({ image, title, text, link, repolink }, index) => (
                <section className="card" key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={image} alt={title} />
                    </a>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <a href={repolink} className="button" target="_blank" rel="noreferrer">{title} Repository Link</a>
                </section>
                )
                )}
    </div>
  );
}


export default Projects;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import RepoCard from './RepoCard';

// function RepositoryPage() {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(() => {
//     // Fetch repositories from the GitHub API
//     axios
//       .get('https://api.github.com/users/{your_github_username}/repos')
//       .then((response) => {
//         setRepositories(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {repositories.map((repository) => (
//         <RepoCard key={repository.id} repository={repository} />
//       ))}
//     </div>
//   );
// }

// export default RepositoryPage;
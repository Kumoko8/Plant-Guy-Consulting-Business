import * as React from 'react';
import ArtworkGallery from '../modules/views/ArtworkGallery';
import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import AppFooter from '../modules/views/AppFooter';
import DevProjects from '../modules/views/DevProjects';
import LearnSomethingNew from '../modules/views/LearnSomethingNew';
import VisionHero from '../modules/views/VisionHero';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Box from '@mui/material/Box';
import Paper from '../modules/components/Paper';
import ProductHero from '../modules/views/ProductHero';

const mainProjects = [
    {
      imageSrc: 'DnD.png',
      title: 'D&D Character Generator',
      description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
    },
    {
      imageSrc: 'NVZlogo.png',
      title: 'INVIZ Productivity',
      description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
    },
    {
      imageSrc: 'Collectibles.png',
      title: 'Collectibles',
      description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
    },
  ];

  const extraProjects = [
    {
        imageSrc: 'running.png',
        title: 'Fitness Tracker Design',
        description: 'Track your exercise progress from first step to finish '
    }
  ]

function Projects() {

  return (
    <React.Fragment>
      <DevProjects projects={mainProjects.concat(extraProjects)} sectionTitle='All Dev Projects'/>
      <AppAppBar />
      
      


    </React.Fragment>
)}
export default withRoot(Projects);







{/* <div>
            <div>
                <h1> Projects</h1>
            </div>
            <section>
                <img className="image-deco" src='../../DnD.png'></img>

            </section>
            <h2> DnD Character Generator</h2>
            <section>
                <a href="https://github.com/Kumoko8/Front-End-App-DnD-Character-Project.git" target="_blank"><button>Learn More</button></a>
                <a href="https://kumoko8.github.io/Front-End-App-DnD-Character-Project/" target="_blank"><button> View the Site </button> </a>
            </section>
            <section>

                <img className="image-deco" src='../../NVZlogo.png'></img>

            </section>
            <h2> INVIZ Productivity </h2>
            <section>
                <a href="https://github.com/Kumoko8/Front-End-App-DnD-Character-Project.git" target="_blank"><button>Learn More</button></a>
                <a href="https://invizproductivity4.wordpress.com/" target="_blank"> <button> View the Site </button> </a>
            </section>
            <h2> More Projects </h2>
            <section>

                <img className="image-deco" src='../../running.png'></img>

            </section>
            <section>
                <a href="../../Fitness-Tracker.pdf" target="_blank"> <button>Fitness Tracker Design</button></a>
            </section>



        </div> */}
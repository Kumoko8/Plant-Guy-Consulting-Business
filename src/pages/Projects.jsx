import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';


const mainProjects = [
  {
    imageSrc: 'images/dnd.webp',
    title: 'D&D Character Generator',
    description: 'Dive into a new world with your own role play character. Get ready to roll the dice.',
    url: 'https://kumoko8.github.io/Front-End-App-DnD-Character-Project/'
  },
  {
    imageSrc: 'images/Invizlogo.webp',
    title: 'INVIZ Productivity',
    description: 'Transform the everyday things you have to do into a wonderful journey you want to be a part of.',
    url: 'https://invizproductivity4.wordpress.com/'
  },
  {
    imageSrc: 'images/collectibles.webp',
    title: 'Collectibles',
    description: 'Keep all the antiques and novelties you treasure in one place and share them with others.',
    url: 'https://project-collections-cfb3d3b9c8f8.herokuapp.com/'
  },
];

const extraProjects = [
  {
    imageSrc: 'images/running.webp',
    title: 'Fitness Tracker Design',
    description: 'Track your exercise progress from first step to finish ',
    url: 'pdfs/Fitness-Tracker.pdf'
  },
  {
    imageSrc: 'images/weather-app.webp',
    title: 'Coming Soon'
  },
  {
    imageSrc: 'images/kumo-writes.webp',
    title: 'Coming Soon'
  }
]
const projectButton =
{
  label: 'Back',
  url: '/'
}

function Projects() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={mainProjects.concat(extraProjects)} sectionTitle='All Dev Projects' button={projectButton} />
    </React.Fragment>
  )
}
export default withRoot(withScrollToTop(Projects));



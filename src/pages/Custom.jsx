import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import withScrollToTop from '../modules/withScrollToTop';

const customWork = [

  {
    imageSrc: 'images/jadeparis.webp',
    title: 'Jade in Paris',
  },
  {
    imageSrc: 'images/major.webp',
    title: 'Major',
  },
  {
    imageSrc: 'images/super-saiyan.webp',
    title: 'Super Saiyan',
  },
  {
    imageSrc: 'images/kevs-bday.webp',
    title: 'Happy Birthday Kev',
  },
  {
    imageSrc: 'images/aly-bday.webp',
    title: 'Happy Birthday Aly',
  },
  {
    imageSrc: 'images/mrB-bday.webp',
    title: 'Happy Birthday Mr. B',
  },
  {
    imageSrc: 'images/tristan-reads.webp',
    title: 'Tristan FanFiction Commission',
  },
  {
    imageSrc: 'images/nolan-joker.webp',
    title: 'Joker Commission',
  },
  {
    imageSrc: 'images/hollow-knight.webp',
    title: 'Hollow Knight',
  },
  {
    imageSrc: 'images/heart-album.webp',
    title: 'Heart EP Cover',
  },
  {
    imageSrc: 'images/real-thing-single.webp',
    title: 'Real Thing Single',
  },
  {
    imageSrc: 'images/forevers-single.webp',
    title: 'A Million Forevers Single',
  },
  {
    imageSrc: 'images/broken-tears-single.webp',
    title: 'Broken Tears Single',
  },
  {
    imageSrc: 'images/runaway-single.webp',
    title: 'Run Away Single',
  },
  {
    imageSrc: 'images/self-portrait.webp',
    title: 'Self Portrait',
  },
];

const projectButton =
{
  label: 'Back',
  url: '/'
}

function Projects() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={customWork} sectionTitle='Custom Artwork' button={projectButton} />
    </React.Fragment>
  )
}
export default withRoot(withScrollToTop(Projects));

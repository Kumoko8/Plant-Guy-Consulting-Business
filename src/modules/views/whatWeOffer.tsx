import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import Button from '../components/Button';
import * as PropTypes from 'prop-types';


const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const imageContainer: SxProps<Theme> = {
  position: 'relative',
  // '&:hover img': {
  //   opacity: 0.5, // Increase the size on hover
  // },
};

function WhatWeOffer({ projects, sectionTitle, additionalProps, button }) {
  const mergedProjects = projects.map((project, index) => ({
    ...project,
    ...(additionalProps?.[index] || {}), // Check if additionalProps is defined
  }));

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" marked="center" component="h3" sx={{ mb: 1, mt: 3 }}>
              {sectionTitle}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'primary.light' }}>
        <div>
          <Container sx={{ mt: 10, mb: 30, display: 'flex', position: 'relative' }}>
            <Grid container spacing={5}>
              {mergedProjects.map((project, index) => (
                <Grid key={index} item xs={12}>
                  <Box sx={{ ...item, ...imageContainer } as SxProps<Theme>}>
                  <Typography variant="h3" sx={{ color: 'white', mb: 3 }}>
                      {project.title}
                    </Typography>
                  
                      <Box
                        component="img"
                        src={project.imageSrc}
                        alt={`plantImage-${index}`}
                        sx={{ width: '100%', mb: 1, maxHeight:'20rem',justifyContent: 'center'}}
                      />
              
                  </Box>
                    <Box sx={{ mt: -100, maxWidth: '35rem', justifyContent: 'center', margin: 'auto' }}>
                  
                    <Typography variant="body1" sx={{ my: 2, color: 'white' }}>{project.description}</Typography>

                    </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Box>
      {button && (
        <Button
          color="secondary"
          size="large"
          variant="contained"
         
          href={button.url}
          sx={{ mt: -40 }}
        >
          {button.label}
        </Button>
      )}
    </div>
  );
}

WhatWeOffer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  additionalProps: PropTypes.arrayOf(PropTypes.object),
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default WhatWeOffer;

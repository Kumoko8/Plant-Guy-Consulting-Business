import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import PropTypes from 'prop-types';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function DevProjects({ projects, sectionTitle, additionalProps }) {
  const mergedProjects = projects.map((project, index) => ({
    ...project,
    ...(additionalProps?.[index] || {}), // Check if additionalProps is defined
  }));

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" marked="center" component="h2" sx={{ mb: 1, mt: 10 }}>
              {sectionTitle}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}>
        <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            {mergedProjects.map((project, index) => (
              <Grid key={index} item xs={12} md={4}>
                <Box sx={item}>
                  <Box
                    component="img"
                    src={project.imageSrc}
                    alt={`project-${index}`}
                    sx={{ height: 205 }}
                  />
                  <Typography variant="h6" sx={{ my: 5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="h5">{project.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

DevProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  additionalProps: PropTypes.arrayOf(PropTypes.object), // Ensure additionalProps is an array of objects
};

export default DevProjects;


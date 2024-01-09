import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Grid, Card, CardMedia } from '@mui/material';

const PhotoGalleryButton: React.FC = () => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const handleGalleryToggle = () => {
    setGalleryOpen(!isGalleryOpen);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleGalleryToggle}>
        Open Photo Gallery
      </Button>

      <Dialog open={isGalleryOpen} onClose={handleGalleryToggle} maxWidth="md" fullWidth>
        <DialogTitle>Photo Gallery</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Add your gallery images here */}
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Gallery Image 1"
                  height="140"
                  image="/images/gallery/image1.jpg"
                />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Gallery Image 2"
                  height="140"
                  image="/images/gallery/image2.jpg"
                />
              </Card>
            </Grid>
            {/* Add more gallery images as needed */}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGalleryButton;

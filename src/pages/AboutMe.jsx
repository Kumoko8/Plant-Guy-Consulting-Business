import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function AboutMe() {
    return (
        <Grid container >

        <div>
            <Grid item >
            <Container >
                <img id="logo-image"className="image-deco"src='../../kiroLogo.PNG'></img>
            </Container>
            </Grid>
            <h2 className="read-the-docs">
                Software Developer, Educator, Illustrator, Dad
            </h2>
            <p>
                Thank you for visiting my page. Featured are some of my best and most enjoyable applications
                from my time in bootcamp and beyond. I first got into the tech field because of my interest in the intersection of
                technology, design, and education. I am passionate about using software development to create web services that make
                learning and communication more effective, enjoyable, and aesthetically pleasing.
            </p>
        </div>
        </Grid>

    );

}


import Grid from '@mui/material/Grid';

function Resume() {
    return (
      <Grid container spacing={2} justifyContent="center" >
        <Grid item xs={12} margin="3em" >
          <div >
            <img id="kiiro-light-img"src="../kiiro-lite.PNG"></img>
          </div>
          <div>
            <a id="resume" href="../../ResumeGeneral2.pdf" target="_blank" >
              View My Resume
            </a>
          </div>
        </Grid>
      </Grid>
    );
  }
  
  export default Resume;
    
    
    
    
    
    
    
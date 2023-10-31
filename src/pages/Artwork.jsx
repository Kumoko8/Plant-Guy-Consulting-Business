import { Link } from 'react-router-dom'

export default function Artwork() {
  return (
    <div>
      <Grid container >
      <h1>Artwork</h1>
        <Grid xs={12}>

          <h2>Wire Frames</h2>
        </Grid>
        <Grid xs={12}>

          <h2>Logos</h2>
        </Grid>
        <Grid xs={12}>

          <h2>Characters</h2>
        </Grid>
        <Grid xs={12}>
          <h2>Designs</h2>

        </Grid >
        <Grid xs={12}>
          <h2>Animation</h2>

        </Grid>
        <Grid xs={12}>
          <h2>Portraits</h2>

        </Grid>
        <Grid xs={12}>

          <h2>Stories/Scenes</h2>
        </Grid>
      </Grid>




      <Link to="/Projects">
        <button >
          Back
        </button>
      </Link>
    </div>

  );

}
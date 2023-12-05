import * as React from 'react';
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
import RFTextField from '../modules/form/RFTextField';
import FormFeedback from '../modules/form/FormFeedback';
import HubSpotForm from 'react-hubspot-form';




function Contact() {
    return (
        <React.Fragment>
        <AppAppBar />
        <div>
            <div>
                <h1> Contact</h1>
            </div>
            
            <div>
                <img class="image-deco"src="../Kumo_Writes.png"></img>
            </div>
            <div> <h2> Send a Message or Request </h2></div>
            <HubSpotForm
          portalId="44406398"
          formId="b8e767ed-bf30-47bc-b2e3-150d52611e2c"
          onSubmit={() => console.log('Form submitted')}
          onReady={(form) => console.log('Form ready:', form)}
          loading={<div>Loading...</div>}
        />
Contact form not working? Try <a href="https://share.hsforms.com/1uOdn7b8wR7yy4xUNUmEeLAqfs72" target="_blank"> this </a> link 
<div> 
  <h2> or Set Up a Time to Chat! </h2>
</div>

<div className="meetings-iframe-container">
          <iframe
            src="https://meetings.hubspot.com/taylor-golden?embed=true"
            width="800"
            height="600"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
          />
        </div>
Meeting form not working? Try <a href="https://meetings.hubspot.com/taylor-golden" target="_blank"> this </a> link 
            


        </div>
    
      </React.Fragment>
)};
export default withRoot(Contact);

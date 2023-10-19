
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    emailError: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'email') {
      this.setState({ emailRequiredError: '' });
    }
  };

  validateEmail = (email) => {
    // You can use a regular expression for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  handleEmailBlur = () => {
    const { email, emailRequiredError } = this.state;
    if (emailRequiredError && email) {
      this.setState({ emailRequiredError: '' });
    }

    if (!email && !emailRequiredError) {
      this.setState({ emailRequiredError: 'This field is required' });
    }

    if (email && !this.validateEmail(email)) {
      this.setState({ emailError: 'Invalid email address' });
    } else {
      this.setState({ emailError: '' });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // You can submit the form data or perform other actions here.
  };

  render() {
    const { name, email, message, emailError } = this.state;

    return (
<Grid container justifyContent={'center'}>

      <div>
        <Grid item>

        <form onSubmit={this.handleSubmit}>
          <Grid item>

          <div>
            <TextField 
            type="text"
             name="name" 
             placeholder="Type your name here"
              value={name} 
              onChange={this.handleChange} 
              required />
          </div>
          </Grid>
          <Grid item>
            
          <div>
            <TextField
              type="email"
              name="email"
              placeholder='Type your email here'
              value={email}
              onChange={this.handleChange}
              onBlur={this.handleEmailBlur}
              required
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          </Grid>
          <Grid item>

          <div>
            <TextField 
            name="message" 
            placeholder='Tell me a bit about yourself!' 
            value={message} 
            onChange={this.handleChange} 
            required />
          </div>
          </Grid>
          <Grid item>

          <Button type="submit">Submit</Button>
          </Grid>
        </form>
        </Grid>
      </div>
</Grid>
    );
  }
}

export default Contact;

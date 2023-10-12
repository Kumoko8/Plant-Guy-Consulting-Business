// class ContactForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: "Type your name here",
//         email: "Type your email here",
//         message: 'Tell me a bit about yourself!',

//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({message: event.target.message});
//     }

//     handleSubmit(event) {
//       alert('An essay was submitted: ' + this.state.message);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <h2> Contact</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea message={this.state.message} onChange={this.handleChange} />
//           </label>
//           <input type="submit" message="Submit" />
//         </form>
//       );
//     }
//   }

import React, { Component } from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder="Type your name here" value={name} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input
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
          <div>
            <label>Message:</label>
            <textarea name="message" placeholder='Tell me a bit about yourself!' value={message} onChange={this.handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;

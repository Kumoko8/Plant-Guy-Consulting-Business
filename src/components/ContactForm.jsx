class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Type your name here",
        email: "Type your email here",
        message: 'Tell me a bit about yourself!',

      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({message: event.target.message});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.message);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea message={this.state.message} onChange={this.handleChange} />
          </label>
          <input type="submit" message="Submit" />
        </form>
      );
    }
  }
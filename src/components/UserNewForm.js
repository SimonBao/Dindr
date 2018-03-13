import React from 'react';
import axios from 'axios';

class UserNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      skills: '',
      experience: '',
      bio: '',
      file: '',
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.skillChange = this.skillChange.bind(this);
    this.experienceChange = this.experienceChange.bind(this);
    this.bioChange = this.bioChange.bind(this);
    this.pictureUploadChange = this.pictureUploadChange.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  skillChange(e) {
    this.setState({
      skills: e.target.value
    });
  }

  experienceChange(e) {
    this.setState({
      experience: e.target.value
    });
  }

  bioChange(e) {
    this.setState({
      bio: e.target.value
    });
  }

  pictureUploadChange(e){
    this.setState({
      file:e.target.files[0]
    });
  }

  fileUpload(file) {
    const url = '/api/profile/new';
    const formData = new FormData();

    formData.append('file', file);
    formData.append('username', this.state.username);

    const config = {
      headers: {
        'content-type': 'multipart/ form-data'
      }
    };
    return axios.post(url, formData,config);
  }


  addToUsers = event => {
    event.preventDefault();

    axios.post('/api/users/new', {
      username: this.state.username,
      email: this.state.email,
      skills: this.state.skills,
      experience: this.state.experience,
      bio: this.state.bio,
    })

    .then(response => {
      console.log(response, 'User added');
      alert('User added');
      this.props.loadUsersFromServer()
    })
   .catch(err => {
     console.log(err, 'User not added, try again');
     alert(err,'User not added, try again');
   });

    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    });

    this.setState({
      username: '',
      email: '',
      skills: '',
      experience: '',
      bio: '',
      file: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit = {this.addToUsers}>
          <label>
          Username:
          <input type='text' onChange={this.usernameChange} value={this.state.username} required /></label>
          <label>
          Email:
          <input type='text' onChange={this.emailChange} value={this.state.email} required /></label>
          <label>
          Skills:
          <input type='text' onChange={this.skillChange} value={this.state.skills} required /></label>
          <label>
          Experience:
          <input type='text' onChange={this.experienceChange} value={this.state.experience} required /></label>
          <label>
          Tell us about yourself:
          <input type='text' onChange={this.bioChange} value={this.state.bio} required /></label>
          <label>
          Add profile pic
          <input type="file" name='file' onChange={this.pictureUploadChange} value={this.state.files}/></label>
          <input type="submit" value ="Submit" />
        </form>
      </div>
    );
  }
}

export default UserNewForm;

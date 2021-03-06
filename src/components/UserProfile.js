import React from 'react';
import LikeUserForm from './LikeUserForm';

class UserProfile extends React.Component {
  constructor () {
    super();
    this.state = {
      isHidden: true
    };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    return(
    <div className='user-profile'>
      <div className="experience"> Experience: {this.props.user.experience} </div>
      <div className="bio">Bio: {this.props.user.bio} </div>
      <button onClick={this.toggleHidden.bind(this)} >
      Click to send your deets to  {this.props.user.username} ...
      </button>
      {!this.state.isHidden && <LikeUserForm listNameFromUser={this.props.user.username} />}
    </div>);

  }
}

export default UserProfile;

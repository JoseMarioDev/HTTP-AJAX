import React, { Component } from 'react';

export default class FriendsList extends Component {
  render() {
    return (
      <div>
        <form action=''>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='age' />
          <input type='text' placeholder='email' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';

const imgStyle={
  width: '75px'
}


class Contact extends Component {
  render() {
    return (
    <tr key={this.props.index} >
      <td><img src={this.props.picture} style={imgStyle}></img></td>
      <td><p>{this.props.name}</p></td>
      <td><p>{parseFloat(this.props.popularity).toFixed(2)}</p></td>
      <th><button onClick={()=>this.props.delete(this.props.index)}>Delete</button></th>
    </tr>
    );
  }
}

export default Contact;

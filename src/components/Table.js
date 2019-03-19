import React, { Component } from 'react';

const tableStyle = {
  textAlign: 'center'
}


class Table extends Component {
  render() {
    return (
      <div style={tableStyle}>
        <h1>{this.props.title}</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.props.children}
        </table>
      </div>

    );
  }
}

export default Table;

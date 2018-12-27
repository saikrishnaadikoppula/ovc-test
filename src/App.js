import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import { fetchTableData } from './apiCall';

const cols = {
  name: 'Name',
  email: 'Email',
  city: 'City',
  company: 'Company'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      rows: []
    }
  }

  async componentDidMount() {
    try {
      const data = await fetchTableData()
      this.setState({rows: data})
    } catch(err) {
      this.setState({errorStatus: err.message})
    }
  }

  render() {
    return (
      <div>
        <Table columns={cols} rows={this.state.rows} />
        {this.state.errorStatus ? this.state.errorStatus : null}
      </div>
    );
  }
}

export default App;

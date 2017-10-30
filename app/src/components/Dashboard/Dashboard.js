import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo  } from '../../ducks/reducer';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      superheroes: [],
      name: '',
      power: ''
    }
  }

  componentDidMount() {
    this.props.getUserInfo();

    axios.get('http://localhost:3005/api/getsuperheroes').then(response => {
      this.setState({
        superheroes: response.data
      })
    })

    this.handleSuperheroName = this.handleSuperheroName.bind(this)
    this.handleSuperheroPower = this.handleSuperheroPower.bind(this)
    this.addNewSuperhero = this.addNewSuperhero.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e, inputName) {
    this.setState({
      [inputName]: e.target.value
    });
  }

  handleSuperheroName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSuperheroPower(e) {
    this.setState({
      power: e.target.value
    })
  }

  addNewSuperhero() {
    var hero = {
          name: this.state.name,
          power: this.state.power
        }
        axios.post('http://localhost:3005/api/addsuperhero', hero).then((res) => {
          if(res.status === 200){
            this.setState({
              superheroes: [...this.state.superheroes, hero]
            })
          }
        })
}
  render() {

    var heroes = this.state.superheroes.map((hero, i) => {
      return (
        <div key={i}>
          <h2> { hero.name } </h2>
          <h3> { hero.power } </h3>
        </div>
      )
    })

    return (
      <div className="dashboard-container">
        <div className="dash-header">
          <h2>Add SuperHeroes to your board!</h2>
        </div>
        <input placeholder='Name' onChange={ this.handleSuperheroName }/>
        <input placeholder='Power' onChange={ this.handleSuperheroPower }/>
        <button onClick={ this.addNewSuperhero }>Add</button>
        { heroes }

        <div className="button-div">
              <a href={ process.env.REACT_APP_LOGOUT }><button className="submit-button">Logout</button></a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { getUserInfo } )(Dashboard);
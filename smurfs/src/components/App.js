import React from 'react';
import { connect } from 'react-redux';
import { getData, addSmurfAction, deleteSmurfAction } from '../actions';
import Smurfs from './Smurfs';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends React.Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
   this.props.getData();
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurfAction(this.state.smurf);
  }
  handleChange = e => {
    e.persist();
    e.preventDefault();
    this.setState( prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
  };
  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurfAction(id);
  }

  render() {
    return (
      <div className="App">
    
      {
        this.props.smurfs.map(smurf => {
        return(
          <Smurfs
            smurf = {smurf}
            key = {smurf.id}
            deleteSmurf = {this.deleteSmurf}
          />
        )
        })
      } 
      <form onSubmit = {this.addSmurf}>
      <input
      type="text"
      name="name"
      value={this.state.name}
      onChange={this.handleChange}
      placeholder = 'name'
      />
      <input
      type="text"
      name="age"
      value={this.state.age}
      onChange={this.handleChange}
      placeholder = 'age'
      />
      <input
      type="text"
      name="height"
      value={this.state.height}
      onChange={this.handleChange}
      placeholder = 'height'
    />
    <button>Add To Village</button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});

export default connect(mapStateToProps, { getData, addSmurfAction, deleteSmurfAction })(App);



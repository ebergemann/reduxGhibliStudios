import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { itemsFetchData, 
selectPerson 
} from './state/actions';


class App extends Component {

  componentDidMount () {
    this.props.itemsFetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>Famous Ghibli People</h1>
        <div className="peopleList">
        {
          this.props.arePeopleLoaded === true && this.props.peopleList.length > 0 ?
           this.props.peopleList.map ( (person, idx) => {
             return (<button key={person.id} id={person.id} >
                      <img onClick={() => {return this.props.selectPerson(person.films)}} id={person.id} src={ require(person.gender === 'Female' ? './Female-Avatar.png' : './Male-Avatar.png') } />
                      </button>)
           })
           :
           <span><h1>LOADING</h1></span>
        }

        </div>
        <div className="filmDescription">
        { this.props.filmList.length > 0 &&
          <div>
              <div>Film Descrition(s)</div>
              <div>
              <h2>Title:</h2>
              <span>{this.props.filmList[0].title}</span>
              </div>
              <div>
              <h2>Description:</h2>
              <span>{this.props.filmList[0].description}</span>
              </div>
              <div><button onClick={this.props.clearDescription}>Clear</button></div>
          </div>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 console.log(state);
 return {
  peopleList : state.peopleList,
  selectedPerson : state.selectedPerson,
  filmList : state.filmList,
  arePeopleLoaded : state.arePeopleLoaded,
  areFilmsLoaded : state.areFilmsLoaded
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPerson: (films) => {console.log; dispatch(selectPerson(films))},
    itemsFetchData: () => dispatch(itemsFetchData()), 
    clearDescription: () => dispatch({type: 'CLEAR_DESCRIPTION'}) }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
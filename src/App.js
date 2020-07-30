import React, { Component } from 'react';
import './App.css';
import Input from './components/common/input';
import DisplayTable from './components/displayTable';

class App extends Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      allMovies: [],
      searchData: [],
      inputs: {},
      notFound: false
    }
  }
  validate = (value, field) => {
    if (field === 'nameInput') {
      return true;
    }
    if (field === 'ratingsInput') {
      return true;
    }
    if (field === 'durationInput') {
      return true;
    }
    if (field === 'searchInput') {
      return true;
    }
  }
  handleInputChange = ({currentTarget}) => {
    const valid = this.validate(currentTarget.value, currentTarget.name);
    const inputs = { ...this.state.inputs };
    inputs[currentTarget.name] = currentTarget.value;
    if (valid) {
      this.setState({ inputs }, () => {
        if (currentTarget.name === 'searchInput') {
          //do the search here
          if (inputs.searchInput.length >= 2) {
            this.searchMovie();
          } else {
            this.setState({notFound: false});
            this.setState({searchData: []});
          }
        }
      });
    }
  }

  searchMovie = () => {
    const searchChar = this.state.inputs.searchInput;
    const allMovies = this.state.allMovies;
    let searchData = []
    searchData = allMovies.filter(movie => {
      console.log(movie);
      return movie.name.indexOf(searchChar) > -1
    });
    if (searchData.length) {
      this.setState({searchData})     
    } else {
      this.setState({notFound: true});
    }
  }

  handleSubmit = (e) => {
    const { inputs } = this.state;
    const movieData = {
      name: inputs.nameInput,
      ratings: inputs.ratingsInput,
      duration: inputs.durationInput
    }
    console.log(movieData);
    if (!movieData.name.length || !movieData.ratings.length || !movieData.duration.length) {
      alert('please fill all the fields');
      return false;
    } else {
      this.setState({allMovies: [...this.state.allMovies, movieData]});
    }
  }
  render () {
    const getMoviesToDisplay = () => {
      if(this.state.searchData.length || this.state.notFound){
        return this.state.searchData;
      } else {
        return this.state.allMovies;
      }
    }
    return (
      <div className='mainClass'>
        <Input type='text' id='name-input' name='nameInput' label='Movie Name' value={this.state.inputs.nameInput} handleChange={this.handleInputChange} />
        <Input type='text' id='ratings-input' name='ratingsInput' label='Ratings' value={this.state.inputs.ratingsInput} handleChange={this.handleInputChange} />
        <Input type='text' id='duration-input' name='durationInput' label='Duration' value={this.state.inputs.durationInput} handleChange={this.handleInputChange} />
        <Input type='button' id='submit-button' name='submitInput' value='Submit' handleClick={this.handleSubmit} />
        <Input type='text' id='search-input' name='searchInput' label='Search' value={this.state.inputs.searchInput} handleChange={this.handleInputChange} />
        <DisplayTable data={getMoviesToDisplay()} />
      </div>
    );
  }
}

export default App;

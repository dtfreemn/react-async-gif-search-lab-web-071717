import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      term: ''
    }

    this.getGifs = this.getGifs.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  
  handleSearchSubmit(term) {
    this.setState({
      gifs: this.getGifs(term),
      term: term
    })
  }

  getGifs(searchTerm){
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(resp => resp.json())
      .then(gifsArr => {
        this.setState({
          gifs: gifsArr.data.slice(0,3)
        })
      })
  }

  render() {
    return (
      <div>
        <GifSearch handleSearchSubmit={this.handleSearchSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer;
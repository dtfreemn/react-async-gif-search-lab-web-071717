import React from 'react';


class GifSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSearchSubmit(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value} onChange={this.handleUserInput} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
// const GifSearch = (props) => {
//   return (
//     <form onSubmit={props.handleSearchSubmit}>
//       <input type='text' />
//       <button type='submit'>Submit</button>
//     </form>
//   )
  
// }

export default GifSearch;
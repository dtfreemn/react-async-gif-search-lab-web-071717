import React from 'react';
import GifItem from './GifItem'

const GifList = (props) => {
  let gifs
  if (props.gifs.length > 0) {
    gifs = props.gifs.map((gif, index) => <GifItem key={index} gif={gif} />)
  }
  return (
    <div>
      {gifs}
    </div>
  )
}

export default GifList;
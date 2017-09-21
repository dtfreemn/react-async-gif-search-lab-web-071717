import React from 'react';

const GifItem = (props) => {
  return (
    <div>
      <iframe src={props.gif.embed_url} />
    </div>
  )
}

export default GifItem;
import React from 'react'

const GifGrifItem = (props) => {
  const {url,title}=props
    console.log(props);
    return (
        <div className="card animate__animated animate__flip" >
        <img src={url} alt={title} />
        <p>{title} </p>
        </div>
    )
}

export default GifGrifItem

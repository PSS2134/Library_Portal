import React from 'react'
import Bookinfo from './Bookinfo'

function Bookdetails({ title, author, url,summary,genre}) 
{
  return (
    <div>
      <Bookinfo title={title} author={author} url={url} summary={summary} genre={genre}/>
    </div>
  )
}

export default Bookdetails

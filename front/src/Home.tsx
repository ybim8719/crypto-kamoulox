import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Link to="/about">Go to about</Link>
    </div>
  )
}

export default Home
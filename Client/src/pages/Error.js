import React from 'react'
import { notFound } from './Index'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper>
    <div>
      <img src={notFound} alt='not-found'/>
      <h3>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to={'/Landing'}><a>Back Home</a></Link>
    </div>
    </Wrapper>
  )
}

export default Error

import React from 'react'
import { Link} from 'react-router-dom'
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='main'>
        <Link to='/'><button>1</button></Link>
        <Link to='/1'><button>2</button></Link>
        <Link to='/2'><button>3</button></Link>
        <Link to='/3'><button>4</button></Link>
        <Link to='/4'><button>5</button></Link>
        <Link to='/5'><button>6</button></Link>
    </div>
  )
}

export default Footer

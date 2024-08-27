import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
        
        <ul className='social-icons'>
            <li><img src="/images/facebook.png" alt='facebook icon'></img></li>
            <li><a target='_blank' rel="noreferrer" href='https://www.instagram.com/fortune_code_/'><img src="/images/instagram.png" alt='instagram icon'></img></a></li>
            <li><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/fortune-akano-138448261/'><img src="/images/linkedin.png" alt='linkedin icon'></img></a></li>
            <li><a href='mailto:lorddakano@gmail.com' alt='mail icon'><img src="/images/mail.png"></img></a></li>
        </ul>
        
        <p>&copy; {new Date().getFullYear()} Fortunecode. All rights reserved.</p>
    </div>
  )
}

export default Footer
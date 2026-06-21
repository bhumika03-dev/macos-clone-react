import React from 'react'
import './Dock.scss'

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon calender"><img src="/docicons/calender.svg" alt="" /></div>
        <div className="icon note"><img src="/docicons/note.svg" alt="" /></div>
        <div className="icon github"><img src="/docicons/github.svg" alt="" /></div>
        <div className="icon spotify "><img src="/docicons/spotify.svg" alt="" /></div>
        <div className="icon mail"><img src="/docicons/mail.svg" alt="" /></div>
    </footer>
  )
}

export default Dock

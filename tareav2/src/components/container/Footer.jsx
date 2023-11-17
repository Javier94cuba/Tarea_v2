import React from 'react'
import Button from '../atomic/Button'
import github from "/src/assets/images/github.png"
function Footer() {
  return (
    <footer className="mt-20 text-blue-500 flex items-center justify-center">
        <a target="_blank" href="https://github.com/Javier94cuba/Tarea_v2">
        <Button  text={"Github"} img_alt={github}/>
        </a>
      </footer>
  )
}

export default Footer
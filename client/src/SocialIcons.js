import React from "react"
import './App.css';

function SocialIcons(props){
  return (
      <footer className="flex justify-around mx-20 md:mt-2 md:mx-2">
        <a href="https://www.facebook.com/harsha.honasoge" className="fa fa-facebook text-base md:text-xl px-1"></a>
        <a href="https://github.com/hhonasoge" className="fa fa-github text-base md:text-xl px-1"></a>
        <a href="https://www.linkedin.com/in/hhonasoge/" className="fa fa-linkedin text-base md:text-xl px-1"></a>
        <a href="mailto:harsha-dot-honasoge-at-gmail-dot-com" className="fa fa-envelope text-base md:text-xl px-1"></a>
      </footer>
  )
}


export default SocialIcons

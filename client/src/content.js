import React from "react"
import "./App.css"
import SocialIcons from "./SocialIcons.js"

function Content(props){

  const homeStr=`Hi! I'm Harsha. This is my website.`

  const aboutMeStr = `I am a person.`


  return (
      <div className="flex-row md:flex-row md:grid md:grid-cols-5">
          <div className="md:ml-4 md:flex-col text-blue-200 font-roboto">
            <img src={process.env.PUBLIC_URL + '/prof_pic.jpg'} className="h-24 w-24 m-auto md:h-auto md:w-auto md:p-4 rounded-full" alt="prof_pic"/>
            <h4 className="font-roboto-slab p-1 text-center text-base md:text-xl">Harsha Honasoge</h4>
            <SocialIcons/>
           </div>
          <div className="text-blue-200 font-roboto pt-10 text-center md:pr-0 md:pl-20 md:pr-4 md:col-span-3">
          <p style={{whiteSpace: 'pre-line'}} className="text-lg">{props.path === "about" ? aboutMeStr : homeStr}</p>
          </div>
      </div>
  )
}

export default Content;

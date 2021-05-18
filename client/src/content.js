import React from "react"
import "./App.css"
import SocialIcons from "./SocialIcons.js"

function Content(props){

  const homeStr=`Placeholder home page text`

  const aboutMeStr = `Placeholder about me text`


  return (
      <div className="flex-row grid grid-cols-5">
          <div className="ml-4 flex-col text-blue-200 font-roboto">
            <img src={process.env.PUBLIC_URL + '/prof_pic.jpg'} className="p-4 rounded-full" alt="prof_pic"/>
            <h4 className="font-roboto-slab p-1 text-center text-base md:text-xl">Harsha Honasoge</h4>
            <SocialIcons/>
           </div>
          <div className="text-blue-200 font-roboto pt-10 pl-20 md:pr-0 pr-4 md:col-span-3 col-span-4">
          <p style={{whiteSpace: 'pre-line'}} className="text-lg">{props.path === "about" ? aboutMeStr : homeStr}</p>
          </div>
      </div>
  )
}

export default Content;

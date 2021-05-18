import './App.css';
import React from "react"
import BlogFull from "./BlogFull.js"
import AllPosts from "./AllPosts.js"
import SocialIcons from "./SocialIcons.js"
import {Route, Switch, useRouteMatch } from "react-router-dom";


function BlogHome(props) {

  let match = useRouteMatch();

  return (
      <div className="flex-row grid grid-cols-5">
        <div className="ml-4 flex-col text-blue-200 font-roboto">
          <img src={process.env.PUBLIC_URL + '/prof_pic.jpg'} className="p-4 rounded-full" alt="prof_pic"/>
          <h4 className="font-roboto-slab p-1 text-center text-base md:text-xl">Harsha Honasoge</h4>
          <SocialIcons/>
         </div>
         <div className="text-blue-200 font-roboto pt-10 pl-20 md:pr-0 pr-4 md:col-span-3 col-span-4">
          <Switch>
            <Route path={`${match.url}/:slug`} component={(params) => (<BlogFull path={`${match.path}/:slug`} params={params} />)}/>
            <Route exact path={`${match.url}`} component={() => (<AllPosts path={`${match.url}/`}/>) }/>
          </Switch>
        </div>
      </div>
  )
}

export default BlogHome;

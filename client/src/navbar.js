import React from "react"
import { Link } from "react-router-dom";

function NavBar(props){

  return (
    <div>
      <ul className="flex justify-end font-roboto-slab p-4 pr-12 mb-4 bg-blue-100 rounded">
        <li className="mx-10">
          <Link className="text-indigo-500 font-bold hover:text-blue-900 text-lg" to="/">harshahonasoge.com</Link>
        </li>
        <li className="ml-auto pr-5">
          <Link className="text-indigo-500 font-bold hover:text-blue-900" to="/">Home </Link>
        </li>
        <div className="verticalLine"></div>
        <li className="ml-5 pr-5">
          <Link className="text-indigo-500 font-bold hover:text-blue-900" to="/blog">Blog</Link>
        </li>
        <div className="verticalLine"></div>
        <div className="vl"></div>
        <li className="ml-5 pr-5">
          <Link className="text-indigo-500 font-bold hover:text-blue-900" to="/about">About Me </Link>
        </li>
      </ul>
    </div>
    // <BrowserRouter>
    //     <ul className="flex justify-end font-roboto-slab divide-x divide-blue-500 p-4 pr-12 mb-4 bg-blue-100 rounded">
    //       <li className="ml-5 pl-5">
    //           <a href="/" className="text-indigo-500 font-bold hover:text-blue-900" to="/" exact>Home</a>
    //       </li>
    //       <li className="ml-5 pl-5">
    //           <NavLink className="text-indigo-500 font-bold hover:text-blue-900" to="/about" exact>About</NavLink>
    //       </li>
    //       <li className="ml-5 pl-5">
    //         <NavLink className="text-indigo-500 font-bold hover:text-blue-900" to="/blog">Blog</NavLink>
    //       </li>
    //       <li className="ml-5 pl-5">
    //         <NavLink className="text-indigo-500 font-bold hover:text-blue-900" to="/contact">Contact</NavLink>
    //       </li>
    //     </ul>
    // </BrowserRouter>
  )
}

export default NavBar

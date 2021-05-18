
import SocialIcons from "./SocialIcons.js"

function Login(){
  return(

    <div className="flex-row grid grid-cols-5">
      <div className="ml-4 flex-col text-blue-200 font-roboto">
        <img src={process.env.PUBLIC_URL + '/prof_pic.jpg'} className="p-4 rounded-full" alt="prof_pic"/>
        <h4 className="font-roboto-slab p-1 text-center text-base md:text-xl">Harsha Honasoge</h4>
        <SocialIcons/>
       </div>
       <div className="text-blue-200 font-roboto pt-10 pl-20 md:pr-0 pr-4 md:col-span-3 col-span-4">
       <form action="/login" method="POST">
         <div className="form-group m-2">
           <label htmlFor="email" className="pr-2">Email</label>
           <input type="email" className="form-control text-black rounded-full pl-2" name="email"/>
         </div>
         <div className="form-group m-2">
           <label htmlFor="password" className="pr-2">Password</label>
           <input type="password" className="form-control text-black rounded-full pl-2" name="password"/>
         </div>
         <button className="bg-blue-200 hover:bg-blue-300 text-black rounded-full p-2" type="submit" name="button">Login</button>
       </form>
      </div>
    </div>
    )
}

export default Login;

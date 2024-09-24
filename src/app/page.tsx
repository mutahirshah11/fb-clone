import Image from "next/image"
import facebook from "../images/fb-removebg-preview.png"

const Home = () => {
  return (
    <div>
     

    <div className="container pt-[80px] flex justify-center items-center mx-auto w-[710] h-[540px] ">
      
      <div className="w-1/3 mb-32 mr-28">
      
      <Image src={facebook} alt="facebook-logo" className="w-80 flex line-clamp-2 "/>
      <p className="font-medium text-[24px]  ">Facebook helps you connect and share with the people in your life.</p>
      
      </div>

      

      <div className="flex flex-col bg-white h-[355px] w-[396px] rounded-lg items-center py-3 shadow-xl shadow-gray-300 relative" >

         <input type="text" placeholder= "Email address or Phone number" className="h-[55px] my-2 w-[360px] border-gray-300 border rounded-md pl-3  shadow-md shadow-gray-100 outline-blue-400 " />
         <input type="password" placeholder= "Password" className="h-[55px] my-2 w-[360px]  border-gray-300 border rounded-md pl-3 shadow-md shadow-gray-100 outline-blue-600 " />
         <button className="bg-blue-600 hover:bg-blue-700 w-[350px]  h-[48px] text-white font-bold  my-2 rounded-md ">Log In</button>
         <span className="text-blue-600 hover:underline">Forgetten password?</span>

         <hr className="w-[90%] border-t border-gray-300 my-4 mt-6" />

         <button className="bg-[#42B72A] hover:bg-[#3dae26] font-bold h-12 w-44 text-white rounded-md py-3 ">Create new account </button>
        <span className="absolute -bottom-10 text-sm flex flex-wrap "> <p className="font-semibold mr-[4px] hover:underline "> Create a Page</p> for a celebrity, brand or business.</span>
         
         

      </div>

      


    </div>

    
 

  
 
  </div>
  )
}

export default Home
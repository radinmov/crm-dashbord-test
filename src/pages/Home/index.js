import Header from "../../componets/Header"
import useTitle from "../../componets/Hook/useTitle"
import { Style } from "./Style"

export default function Home() {
    const title = useTitle("Home(Dashboard)")
    return (
    <Style  className="flex">
         <Header /> 
         <div className="wrapper_home_start w-full">
            <div className="wrapper_home_start">
                <div className="upper_start flex">
                    <div className="int bg-white w-72 h-10 flex items-center rounded-md">
                    <img className="w-8 h-5 m-3" alt="search_icon" src="icons/png/serach.png" />
                    <input className="bg-inherit" placeholder="search" type="text" />
                    </div>
                    <div className="alert_icon w-10 h-10 bg-white rounded-md  items-center">
                        <img alt="alert_icon"  className="p-1.5" src="icons/png/aler.png" />
                    </div>
                    <div className="user_name flex items-center bg-white w-44 h-10 rounded-md ">
                        <img alt="person_avatar" className="h-10 w-10" src="icons/png/avatar.png" />
                        <p className="text-black p-1.5">jake moloeikoe  </p>
                    </div>
                </div>
                <div className="welcome_person_part">
                    <p className="text-slate-600 text-lg p-5">Welcome Back , jake</p>
                </div>
                <div className="starting_dash_part flex justify-around">
                    <p className="text-black text-3xl">Dashboard</p>     
                    <div className="claender  w-60 h-10 flex items-center bg-sky-500 rounded-md">
                        <img className="m-2" alt="calender_icon" src="icons/png/calender.png" />
                        <p>2023/12/23</p>
                        <span>-</span>
                        <p>2024/3/16</p>
                    </div>
                </div>
            </div>
         </div>
    </Style>
    )        
}
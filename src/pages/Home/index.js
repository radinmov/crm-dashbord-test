import Header from "../../componets/Header"
import useTitle from "../../componets/Hook/useTitle"
import { Style } from "./Style"

export default function Home() {
    const title = useTitle("Home(Dashboard)")
    return (
    <Style  className="flex">
         <Header />
         <div className="wrapper_home_start">
            <div className="wrapper_home_start">
                <div className="upper_start flex">
                    <div className="int flex">
                    <img alt="search_icon" src="icons/png/serach.png" />
                    <input type="text" />
                    </div>
                    <div className="alert_icon">
                        <img alt="alert_icon" src="icons/png/aler.png" />
                    </div>
                    <div className="user_name">
                        <img alt="person_avatar" src="icons/png/avatar.png" />
                        <p>person name </p>
                    </div>
                </div>
                <div className="welcome_person_part">
                    <p>Welcome Back person</p>
                </div>
                <div className="starting_dash_part flex">
                    <p>Dashboard</p>
                    <div className="claender flex ">
                        <img alt="calender_icon" src="icons/png/calender.png" />
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
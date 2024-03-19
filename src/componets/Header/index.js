import { Link } from "react-router-dom";
import { Style } from "./Style";


export default function Header() {
    return (
        <Style className="flex">
            <div className="wrapper-start w-48 h-dvh bg-white flex ">
                <div className="wrapper-inner">
                    <img alt="alborz_logo" className="w-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRG0dQYL8dorZDNiAS_zNS6TuOLvT_G3Xkc7DIpHtkQ&s" />
                    <div className="buttons pt-14 p-3">
                        <Link className="flex gap-5 text-center pt-5">
                            <img alt="img-1" className="w-8" src="icons/png/dashboard.png" />
                            <p className="text-black capitalize text-lg">Dashboard</p>
                        </Link>
                        <Link className="flex gap-5 text-center pt-5">
                            <img alt="img-1" className="w-8 " src="icons/png/projects.png" />
                            <p className="text-black capitalize text-lg">Projects</p>
                        </Link>
                        <Link className="flex gap-5 text-center pt-5">
                            <img alt="img-1" className="w-8 " src="icons/png/bookmark.png" />
                            <p className="text-black capitalize text-lg">Calender</p>
                        </Link>
                        <Link className="flex gap-5 text-center pt-5">
                            <img alt="img-1" className="w-8 " src="icons/png/vacation.png" />
                            <p className="text-black capitalize text-lg">vacation</p>
                        </Link>
                        <Link className="flex gap-5 text-center pt-5">
                            <img alt="img-1" className="w-8 " src="icons/png/messenger.png" />
                            <p className="text-black capitalize text-lg">maeseger</p>
                        </Link>
                    </div>
                    <div className="bottom-wrapper pt-48">
                        <Link className="flex items-center gap-5 text-center  w-44 h-14 bg-blue-500  rounded-xl">
                            <img alt="img-1" className="w-8 " src="icons/png/messenger.png" />
                            <p >Support</p>
                        </Link>
                        <Link className="flex  gap-2 text-center pt-5">
                            <img alt="img-1" className="w-8 " src="icons/png/LogOut.png" />
                            <p className="text-black">LogOut</p>
                        </Link>
                    </div>
                </div>
            </div>
        </Style>
    )
}
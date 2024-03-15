import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="wrapper-start">
            <div className="wrapper-inner">
                <img className="w-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRG0dQYL8dorZDNiAS_zNS6TuOLvT_G3Xkc7DIpHtkQ&s" />
                <div className="buttons">
                    <Link className="flex gap-5 text-center">
                        <img className="w-8" src="icons/png/dashboard.png" />
                        <p className="text-black capitalize text-base">Dashboard</p>
                    </Link>
                    <Link className="flex gap-5 text-center">
                        <img className="w-8 " src="icons/png/projects.png" />
                        <p className="text-black capitalize text-base">Projects</p>
                    </Link>
                    <Link className="flex gap-5 text-center">
                        <img className="w-8 " src="icons/png/bookmark.png" />
                        <p className="text-black capitalize text-base">Calender</p>
                    </Link>
                    <Link className="flex gap-5 text-center">
                        <img className="w-8 " src="icons/png/vacation.png" />
                        <p className="text-black capitalize text-base">vacation</p>
                    </Link>
                    <Link className="flex gap-5 text-center">
                        <img className="w-8 " src="icons/png/messenger.png" />
                        <p className="text-black capitalize text-base">maeseger</p>
                    </Link>
                </div>
                <div className="bottom-wrapper">
                    <Link className="flex">
                        <img className="w-8 " src="icons/png/messenger.png" />
                        <p >Support</p>
                    </Link>
                    <Link className="flex">
                        <img className="w-8 " src="icons/png/LogOut.png" />
                        <p className="text-black">LogOut</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
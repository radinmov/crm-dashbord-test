import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="wrapper-start">
            <div className="wrapper-inner">
                <img src="https://static.evand.net/images/organizations/logos/original/940c59562bf11bd4009ceed5477a6086.jpg?x-oss-process=image/resize,h_250" />
                <div className="buttons">
                    <Link>
                        <img src="icons/png/dashboard.png" />
                        <p>Dashboard</p>
                    </Link>
                    <Link>
                        <img src="icons/png/projects.png" />
                        <p>Projects</p>
                    </Link>
                    <Link>
                        <img src="icons/png/bookmark.png" />
                        <p>Calender</p>
                    </Link>
                    <Link>
                        <img src="icons/png/vacation.png" />
                        <p>vacation</p>
                    </Link>
                    <Link>
                        <img src="icons/png/messenger.png" />
                        <p>maeseger</p>
                    </Link>
                </div>
                <div className="bottom-wrapper">
                    <Link>
                        <img src="icons/png/messenger.png" />
                        <p>Support</p>
                    </Link>
                    <Link>
                        <img src="icons/png/LogOut.png" />
                        <p>LogOut</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
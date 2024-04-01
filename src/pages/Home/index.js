import Header from "../../componets/Header";
import useTitle from "../../componets/Hook/useTitle";
import { Style } from "./Style";

export default function Home() {
  const title = useTitle("Home(Dashboard)");
  return (
    <Style className="flex">
      <Header />
      <div className="wrapper_home_start w-full">
        <div className="wrapper_home_start">
          <div className="upper_start flex justify-between p-4">
            <div className="int bg-white w-72 h-10 flex items-center rounded-md">
              <img
                className="w-8 h-5 m-3"
                alt="search_icon"
                src="icons/png/serach.png"
              />
              <input
                className="bg-inherit outline-none text-black"
                placeholder="search"
                type="text"
              />
            </div>
            <div className="fasther_left flex  gap-2.5">
              <div className="alert_icon w-10 h-10 bg-white rounded-md  items-center">
                <img
                  alt="alert_icon"
                  className="p-1.5"
                  src="icons/png/aler.png"
                />
              </div>
              <div className="user_name flex items-center bg-white w-44 h-10 rounded-md ">
                <img
                  alt="person_avatar"
                  className="h-10 w-10"
                  src="icons/png/avatar.png"
                />
                <p className="text-black p-1.5">jake moloeikoe </p>
              </div>
            </div>
          </div>
          <div className="welcome_person_part">
            <p className="text-slate-600 text-lg p-5">Welcome Back , jake</p>
          </div>
          <div className="starting_dash_part flex justify-between">
            <p className="text-black text-3xl">Dashboard</p>
            <div className="claender  w-60 h-10 flex items-center bg-sky-500 rounded-md">
              <img
                className="m-2"
                alt="calender_icon"
                src="icons/png/calender.png"
              />
              <p>2023/12/23</p>
              <span>-</span>
              <p>2024/3/16</p>
            </div>
          </div>
          <div className="started_data w-full flex gap-12 m-12">
            <div className="started_left w-3/5 h-[540px] rounded-3xl  text-black bg-white">
              <div className="upper_txt flex justify-between p-5">
                <p className="text-xl font-bold">WorkLoad</p>
                <p className="text-sky-500 text-lg">View all</p>
              </div>
              <div className="persons">
                <div className="persons_inner flex gap-3  flex-wrap justify-center align-center">
                  <div className="person flex items-center gap-1.5 flex-col  w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3  ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                  <div className="person flex items-center gap-1.5 flex-col w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3 ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                  <div className="person flex items-center gap-1.5 flex-col w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3 ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?size=626&ext=jpg&ga=GA1.1.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                  <div className="person flex items-center gap-1.5 flex-col w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3 ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                  <div className="person flex items-center gap-1.5 flex-col w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3 ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-photo/handsome-happy-young-guy-with-glasses-posing_176420-30005.jpg?size=626&ext=jpg&ga=GA1.2.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                  <div className="person flex items-center gap-1.5 flex-col w-[210px] h-[210px] rounded-xl bg-cyan-400 p-3 ">
                    <img
                      alt="person_img"
                      className="w-20 h-20 bg-slate-400 rounded-full"
                      src="https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163958.jpg?size=626&ext=jpg&ga=GA1.2.1892136250.1702583252&semt=sph"
                    />
                    <p>jake ali</p>
                    <p>Ui /Ux Designer</p>
                    <button className="btn_for_persona w-[60px] text-slate-700">
                      junior
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="started_right  w-1/4 bg-sky-400 rounded-3xl">
              <div className="upper_txt w-full flex justify-between p-5">
                <p className="text-xl font-bold">Nereast Event</p>
                <p className="text-sky-500 text-lg">View all</p>
              </div>
              <div className="nearst p-3 flex-col flex align-center">
                <div className="near m-2 flex flex-col justify-evenly border-l-4 h-32 border-gray-950">
                  <div className="up font-bold text-black">
                    <p>Anna"s Birthday</p>
                  </div>
                  <div className="bottom flex justify-between text-slate-500">
                    <p>Today | 6:00 pm</p>
                    <div className="clock_time w-[50px] bg-slate-500 flex items-center gap-1 rounded-lg">
                      <img alt="clock_icon" src="icons/png/clock.png" />
                      <p className="text-white">4h</p>
                    </div>
                  </div>
                </div>
                <div className="near m-2 flex flex-col justify-evenly border-l-4 h-32 border-fuchsia-500">
                  <div className="up font-bold text-black">
                    <p>Anna"s Birthday</p>
                  </div>
                  <div className="bottom flex justify-between  text-slate-500">
                    <p>Today | 6:00 pm</p>
                    <div className="clock_time w-[50px] bg-slate-500 flex items-center gap-1 rounded-lg">
                      <img alt="clock_icon" src="icons/png/clock.png" />
                      <p className="text-white">4h</p>
                    </div>
                  </div>
                </div>
                <div className="near m-2 flex flex-col justify-evenly border-l-4 h-32 border-fuchsia-500">
                  <div className="up font-bold text-black">
                    <p>Anna"s Birthday</p>
                  </div>
                  <div className="bottom flex justify-between justify-between text-slate-500">
                    <p>Today | 6:00 pm</p>
                    <div className="clock_time w-[50px] bg-slate-500 flex items-center gap-1 rounded-lg">
                      <img alt="clock_icon" src="icons/png/clock.png" />
                      <p className="text-white">4h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_starter">
            <div className="bottom_start_inner w-full m-12">
              <div className="bottom_start_left w-3/5">
                <div className="bottom_left_inner">
                  <div className="upper_txt flex justify-between p-5">
                    <p className="text-black font-extrabold text-xl">
                      Projects
                    </p>
                    <p className="text-sky-500 font-extrabold text-lg">View all</p>
                  </div>
                  <div className="bottom_left w-full flex">
                    <div className="left w-6/12">
                      <div className="left_data   bg-white  w-full ">
                        <div className="up flex">
                          <img  alt="data_icon" className="w-[65px] rounded-lg h-[60px]" src="https://img.freepik.com/premium-photo/3d-icon-polaroid-camera-3d-illustration-3d-element-3d-rendering-graphic-elements-design_808921-654.jpg?w=1380" />
                          <div className="texts" >
                          <span className="text-stone-500">89257829572098</span>
                          <p className="text-black">Medical App(ios Navite)</p>
                            </div>
                        </div>
                        <div className="bottom flex text-black">
                          <img className="w-[20px]" alt="calend_icon" src="icons/png/calender.png" />
                          <p>2030/12/32 | 12:32</p>
                        </div>
                      </div>
                      <div className="left_data  bg-white w-full">
                        <div className="up flex">
                          <img alt="data_icon" className="w-[65px] rounded-lg h-[60px]" src="https://img.freepik.com/free-photo/red-roses-by-window-brought-touch-romance-room-generative-ai_8829-2925.jpg?w=900&t=st=1711574967~exp=1711575567~hmac=f43e3697deb16ff116ed156e2e59c665c5a93d645a5038e66895838ea75bf643" />
                          <div className="texts" >
                          <span className="text-stone-500">89257829572098</span>
                          <p className="text-black">Food Delivery Service</p>
                            </div>
                        </div>
                        <div className="bottom flex text-black">
                          <img className="w-[20px]" alt="calend_icon" src="icons/png/calender.png" />
                          <p>2030/12/32 | 12:32</p>
                        </div>
                      </div>
                      <div className="left_data  bg-white w-full">
                        <div className="up flex ">
                          <img alt="data_icon" className="w-[65px] rounded-lg h-[60px]" src="https://img.freepik.com/free-photo/picture-with-drawing-man-s-face_1122-1031.jpg?t=st=1711575125~exp=1711578725~hmac=b827b81a7e052f3177b2edd6d8177d0b89103e12bd75d2841291acf146e59fff&w=900" />
                          <div className="texts" >
                          <span className="text-stone-500">89257829572098</span>
                          <p className="text-black">Food deliverry Service </p>
                            </div>
                        </div>
                        <div className="bottom flex text-black">
                          <img className="w-[20px]" alt="calend_icon" src="icons/png/calender.png" />
                          <p>2030/12/32 | 12:32</p>
                        </div>
                      </div>
                    </div>
                    <div className="right w-6/12">
                      <div className="right_data w-full  bg-white ">
                        <div className="up">
                          <p>Projects Data</p>
                        </div>
                        <div className="bottom">
                          <div className="data_inner_1">
                            <p>All Taksks</p>
                            <span>34</span>
                          </div>
                          <div className="data_inner_2">
                            <p>Active Taks</p>
                            <span>13</span>
                          </div>
                        </div>
                      </div>
                      <div className="right_data bg-white ">
                        <div className="up">
                          <p>Projects Data</p>
                        </div>
                        <div className="bottom">
                          <div className="data_inner_1">
                            <p>All Taksks</p>
                            <span>34</span>
                          </div>
                          <div className="data_inner_2">
                            <p>Active Taks</p>
                            <span>13</span>
                          </div>
                        </div>
                      </div>
                      <div className="right_data bg-white ">
                        <div className="up">
                          <p>Projects Data</p>
                        </div>
                        <div className="bottom">
                          <div className="data_inner_1">
                            <p>All Taksks</p>
                            <span>34</span>
                          </div>
                          <div className="data_inner_2">
                            <p>Active Taks</p>
                            <span>13</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_start_right"></div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}

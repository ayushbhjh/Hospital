import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="h-screen w-full bg-white">
      <div className=" ">
        <Navbar />
      </div>
      <div
        className="h-[80%] w-[95%] mt-2 ml-10 "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/clean-empty-hospital-ward-ready-receive-patients-reflecting-modern-medical-care_91128-4460.jpg?t=st=1713644838~exp=1713648438~hmac=f99a9984003fd0c045e818fc6f2bae8d9c541b673042eca8a48a4c40008f45af&w=2000)",
          backgroundSize: "cover",
        }}
      >
        <div className="flex">
          <div className="flex-[40%] m-14">
            <h1 className="text-white text-5xl font-bold m-12">Dedicated Pediatric Care For Every stage of life</h1>
            <p className="text-2xl text-white font-thi ">
              In the hush of sterile halls, hope whispers soft, Where healing
              hands mend and hearts find solace aloft.
            </p>
            <div className="flex m-10 h-16 w-96 bg-white p-4">
              <input type="text" placeholder="Book a Date" className="h-10 w-[40%] bg-slate-300 p-2"/>
              <input type="text" placeholder="City" className="h-10 w-[40%] ml-2 bg-slate-300 p-2" />
              <img src="https://cdn-icons-png.freepik.com/256/54/54481.png?uid=R143719964&ga=GA1.1.2080634972.1712987199&semt=ais_hybrid" alt="remote" className="h-10 w-10 ml-4 bg-blue-400"/>
            </div>
          </div>

          <div className="flex-[60%]">

              <img src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?t=st=1713646194~exp=1713649794~hmac=d60412a5e34d2b34161708fc52961cd421c41a63e8b5dc81f2ea55d4a1bbecaa&w=1800" alt="remote" className="h-5/6 w-5/6 rounded-full m-12" />

          </div>
        </div>
      </div>
    </div>
  );
}

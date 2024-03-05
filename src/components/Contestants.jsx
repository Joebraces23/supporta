import React, { useState } from "react";
import PopupInfo from "./PopupInfo";
import IMG from "../assets/1.jpeg";
import IMGG from "../assets/2.jpeg";
import IMGGG from "../assets/3.jpeg";
import IMGGGG from "../assets/4.jpeg";
import IMGGGGG from "../assets/5.jpg";
import IMGGGGGG from "../assets/6.jpg";
import IMGGGGGGG from "../assets/7.jpg";

function Contestants() {
  const [choice, setChoice] = useState("1140c6f7-9964-4066-986d-1be168903d28");

  return (
    <section>
      <div className="md:text-center">
        <h1 className="text-4xl mb-10">Contestants</h1>
        <div className="flex items-center gap-3 text-black flex-wrap md:mx-auto w-fit">
          <span
            className={`px-6 cursor-pointer py-2 border-2 rounded-lg ${
              choice === "1140c6f7-9964-4066-986d-1be168903d28"
                ? "bg-blue-500 border-blue-500 text-white"
                : ""
            }`}
            onClick={() => setChoice("1140c6f7-9964-4066-986d-1be168903d28")}
          >
            All
          </span>
          <span
            className={`px-6 cursor-pointer py-2 border-2 rounded-lg ${
              choice === "ae711f4c-36fc-4d97-bdcf-5f8857dcdcca"
                ? "bg-blue-500 border-blue-500 text-white"
                : ""
            }`}
            onClick={() => setChoice("ae711f4c-36fc-4d97-bdcf-5f8857dcdcca")}
          >
            Fashion
          </span>
          <span
            className={`px-6 cursor-pointer py-2 border-2 rounded-lg ${
              choice === "0f71a6f7-bab4-4953-9edd-3c76f62b942c"
                ? "bg-blue-500 border-blue-500 text-white"
                : ""
            }`}
            onClick={() => setChoice("0f71a6f7-bab4-4953-9edd-3c76f62b942c")}
          >
            Beauty
          </span>
          <span
            className={`px-6 cursor-pointer py-2 border-2 rounded-lg ${
              choice === "43501d56-861d-41fb-9437-dc905824a1a1"
                ? "bg-blue-500 border-blue-500 text-white"
                : ""
            }`}
            onClick={() => setChoice("43501d56-861d-41fb-9437-dc905824a1a1")}
          >
            Entertainment
          </span>
        </div>
      </div>

      {persons && (
        <div className="mt-16 grid gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {persons.map((items, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <div className="h-[350px]">
                {items.img && (
                  <img
                    className="h-full w-full object-cover object-center"
                    src={items.img}
                    alt={items.vote}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="bg-[#F8F8F8] px-6 py-5 flex flex-col items-start">
                <h3 className="text-2xl font-bold capitalize">{items.title}</h3>
                <p className="text-[#000000] font-medium text-base mb-5">
                  {`Total Votes: ${items.vote}`}
                </p>
                <div className="w-full">
                  <PopupInfo value={`Vote ${items.name}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Contestants;

const persons = [
  {
    name: "Contestant 001",
    vote: "132",
    img: IMG,
  },
  {
    name: "Contestant 002",
    vote: "153",
    img: IMGG,
  },
  {
    name: "Contestant 003",
    vote: "160",
    img: IMGGG,
  },
  {
    name: "Contestant 004",
    vote: "98",
    img: IMGGGG,
  },
  {
    name: "Contestant 005",
    vote: "150",
    img: IMGGGGG,
  },
  {
    name: "Contestant 006",
    vote: "134",
    img: IMGGGGGG,
  },
  {
    name: "Contestant 007",
    vote: "190",
    img: IMGGGGGGG,
  },
];

import React, { useState } from "react";

function Event_selection() {
  const [info, setinfo] = useState([
    {
      id: 1,
      E_name: "Aibox",
      E_date: "4/10/2023",
    },
    {
      id: 2,
      E_name: "Kimia",
      E_date: "4/27/2023",
    },
    {
      id: 3,
      E_name: "Shufflester",
      E_date: "9/12/2022",
    },
    {
      id: 4,
      E_name: "Meembee",
      E_date: "10/13/2022",
    },
    {
      id: 5,
      E_name: "Mydeo",
      E_date: "9/4/2022",
    },
    {
      id: 6,
      E_name: "Quire",
      E_date: "2/24/2023",
    },
    {
      id: 7,
      E_name: "Yadel",
      E_date: "3/2/2023",
    },
    {
      id: 8,
      E_name: "Livetube",
      E_date: "11/23/2022",
    },
    {
      id: 9,
      E_name: "LiveZ",
      E_date: "7/28/2022",
    },
    {
      id: 10,
      E_name: "Centimia",
      E_date: "8/14/2022",
    },
    {
      id: 11,
      E_name: "Zoovu",
      E_date: "2/20/2023",
    },
    {
      id: 12,
      E_name: "Photobug",
      E_date: "5/16/2022",
    },
    {
      id: 13,
      E_name: "Bubblebox",
      E_date: "9/12/2022",
    },
    {
      id: 14,
      E_name: "Voonix",
      E_date: "1/2/2023",
    },
    {
      id: 15,
      E_name: "BlogXS",
      E_date: "7/16/2022",
    },
    {
      id: 16,
      E_name: "Dabtype",
      E_date: "3/8/2023",
    },
    {
      id: 17,
      E_name: "Zoomlounge",
      E_date: "1/26/2023",
    },
    {
      id: 18,
      E_name: "Dynabox",
      E_date: "11/30/2022",
    },
    {
      id: 19,
      E_name: "Zoomlounge",
      E_date: "8/12/2022",
    },
    {
      id: 20,
      E_name: "Zoomdog",
      E_date: "6/6/2022",
    },
    {
      id: 21,
      E_name: "Eadel",
      E_date: "10/18/2022",
    },
    {
      id: 22,
      E_name: "Tagcat",
      E_date: "1/7/2023",
    },
    {
      id: 23,
      E_name: "Skynoodle",
      E_date: "11/5/2022",
    },
    {
      id: 24,
      E_name: "Thoughtworks",
      E_date: "12/26/2022",
    },
    {
      id: 25,
      E_name: "Blogpad",
      E_date: "8/10/2022",
    },
    {
      id: 26,
      E_name: "Realcube",
      E_date: "8/1/2022",
    },
    {
      id: 27,
      E_name: "Yombu",
      E_date: "6/16/2022",
    },
    {
      id: 28,
      E_name: "Realmix",
      E_date: "10/24/2022",
    },
    {
      id: 29,
      E_name: "Innojam",
      E_date: "6/29/2022",
    },
    {
      id: 30,
      E_name: "Feedfish",
      E_date: "7/15/2022",
    },
    {
      id: 31,
      E_name: "Gigabox",
      E_date: "6/29/2022",
    },
    {
      id: 32,
      E_name: "Jaxworks",
      E_date: "6/3/2022",
    },
    {
      id: 33,
      E_name: "Jaloo",
      E_date: "4/4/2023",
    },
    {
      id: 34,
      E_name: "Twinder",
      E_date: "3/12/2023",
    },
    {
      id: 35,
      E_name: "Riffwire",
      E_date: "10/21/2022",
    },
    {
      id: 36,
      E_name: "Oozz",
      E_date: "3/4/2023",
    },
    {
      id: 37,
      E_name: "Fatz",
      E_date: "11/24/2022",
    },
    {
      id: 38,
      E_name: "Blogtag",
      E_date: "4/17/2023",
    },
    {
      id: 39,
      E_name: "Divape",
      E_date: "7/20/2022",
    },
    {
      id: 40,
      E_name: "Flashset",
      E_date: "5/5/2023",
    },
    {
      id: 41,
      E_name: "Avavee",
      E_date: "3/16/2023",
    },
    {
      id: 42,
      E_name: "Pixoboo",
      E_date: "2/20/2023",
    },
    {
      id: 43,
      E_name: "Wikibox",
      E_date: "10/30/2022",
    },
    {
      id: 44,
      E_name: "Meedoo",
      E_date: "11/28/2022",
    },
    {
      id: 45,
      E_name: "Katz",
      E_date: "1/26/2023",
    },
    {
      id: 46,
      E_name: "Feedspan",
      E_date: "2/15/2023",
    },
    {
      id: 47,
      E_name: "Divanoodle",
      E_date: "7/25/2022",
    },
    {
      id: 48,
      E_name: "Kaymbo",
      E_date: "9/9/2022",
    },
    {
      id: 49,
      E_name: "Rhyzio",
      E_date: "8/10/2022",
    },
    {
      id: 50,
      E_name: "Meevee",
      E_date: "12/23/2022",
    },
  ]);

  const[search,setsearch]=useState("")

  return (
    <>
      <h1>past event table</h1>
      <br />
      <br />
      {info.map((info) => {
        return (
          <div>
            <p>{info.E_name}</p>
            <p>Date: {info.E_date}</p>
          </div>
        );
      })}
      <h3>Create new Event </h3> <br />
      <input type="text" placeholder="search" onChange={(e) => {
          setsearch(e.target.value)
          // console.log(search)
      }} />
      <br />
      <br />
      <div>
        <h3>select Event </h3>
      </div>
      <br />
      {info.filter((info)=>{
        return search.toLowerCase() === ""
        ? info
        : info.E_name.toLocaleLowerCase().includes(search);
      }).map((info) => {
        return (
          <div>
            <p>{info.E_name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Event_selection;

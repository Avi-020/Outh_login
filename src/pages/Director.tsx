import Link from "next/link";
import React from "react";

function Director() {
  return (
    <>
 
    <div>
      <h1>Director 1</h1>
      <div><br />
        CIN <input type="text" />
        Director Name <input type="text" />
        Father/Spouse Name <input type="text" />
        Address <input type="text" />
        Mail id <input type="email" />
        Date of Appointment <input type="date" />
      </div>
    </div>

    <div>
        <button> <Link href="Other_details"> Next </Link></button>
    </div>
    </>
  );
}

export default Director;

import Link from "next/link";
import React from "react";

function CreateNewCompany() {
  return (
    <>
    <div>
      CREATE A NEW COMPANY
     <div>
      CIN <input type="text" /> <br /> <br />
      Company Name <input type="text" /> <br /> <br />
      ROC Code <input type="text" /> <br /> <br />
      Authorised Capital <input type="text" /> <br /> <br />
      Paid Up Capital <input type="text" /> <br /> <br />
      Date of Incorporation <input type="date" /> <br /> <br />
      Registered Office Address <input type="text" /> <br /> <br />
      City <input type="text" /> <br /> <br />
      E mail <input type="email" /> <br /> <br />
      Contact <input type="number" /> <br /> <br />
      </div>
    </div>
    <div>
      <button><Link href="/Director"> Next </Link></button>
    </div>
    </>
  );
}

export default CreateNewCompany;

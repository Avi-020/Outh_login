import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setuser] = useState();

  function handleCallbackResponse(response) {
    console.log("incoded id token", response.credential);
    var userobject = jwtDecode(response.credential);
    console.log(userobject);
    setuser(userobject);
    // console.log("user",user);

    // for hide the login button
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    // set user to emty
    setuser({});
    // show sign up div again
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "535655670203-4ur49bjnims0r7cen97ir36a5ff6tn18.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // if we have no user :sigin button
  // if have user : signout button

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div id="signInDiv"></div>

      {user && (
        <div>
          <img src={user.picture} />
          <h3>{user.name}</h3>
          <br />
          <input type="text" placeholder="Name" /> <br />
          <br />
          <input type="number" placeholder="Phone Number" />
          <br />
          <br />
          <button onClick={()=>{
            alert("working")
          }}>Submit</button>
        </div>
      )}

      {Object.keys(user || {}).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)} className="mb-3">
          Sign Out
        </button>
      )}
    </main>
  );
}

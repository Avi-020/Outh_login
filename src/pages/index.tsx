import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Homepage from "./Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setuser] = useState();
  const [login, setlogin] = useState(false);


  function handleCallbackResponse(response) {
    console.log("incoded id token", response.credential);
    var userobject = jwtDecode(response.credential);
    console.log(userobject);
    setuser(userobject);
    // console.log("user",user);

    // for hide the login button
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("loginform").hidden = true;
  }

  function handleSignOut(event) {
    // set user to emty
    setuser({});
    // show sign up div again
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("loginform").hidden = false;
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
    <>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* LOgin flow */}

      <div id="loginform">
        <input type="text" placeholder="User Name" id="User_name" /> <br />
        <br />
        <input type="text" placeholder="Password" id="Password" /> <br />
        <button onClick={()=>{
          let username=document.getElementById("User_name").value;
          let pass=document.getElementById("Password").value;
          if(username=="ABC" && pass=="123"){
            setuser([{
              name:"avi",

            }])
            // alert("right info")
            document.getElementById("loginform").hidden = true;
            document.getElementById("signInDiv").hidden = true;
          }
          else{
            alert("wrong info")
            setuser({});


          }
          
        }}>Login</button>
        <div>
          <button>Forgot Password</button>
        </div>
      </div>

      <div id="signInDiv"></div>

      {user && (
        <div id="info">
          {/* <img src={user.picture} />
          <h3>{user.name}</h3>
          <br /> */}

          {/* dont show form after sign out  */}
          { Object.keys(user || {}).length !== 0 && (
            <div>
              <Homepage />
            </div> 
          )}
        </div>
      )}

      {Object.keys(user || {}).length !== 0 && (
        <button onClick={(e) => handleSignOut(e)} className="mb-3">
          Sign Out
        </button>
      )}
    </main>
    </>
  );
}

import React from 'react'
import Link from "next/link";


function Homepage() {
  return (
    <div>
      <button>
             
             <Link href="/SelectCompany">Select Company</Link>
           </button>
           <br />
           <br />
           <button>
            
             <Link href="/CreateNewCompany">Create a New Company</Link>
           </button>
    </div>
  )
}

export default Homepage

import Link from "next/link";

function Navbar() {
    return(
         <div className ="bg-blue-700 text-white flex space-x-20 pl-10 gap-4  border-yellow-300">
            <h4 className= "mr-11">Mini website</h4>
            <Link href= '/'> Home</Link>
            <Link href= '/About'> About</Link>
            <Link href= '/jobs'> Jobs</Link>
            <Link href = '/jobs/teaching'> teachingJobs</Link>
            <Link href = '/contact'> Contact</Link>
            </div>      
    )
}

export default Navbar;
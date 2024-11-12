import Link from "next/link";
 async function Jobs() {
    await new Promise(resolve => {setTimeout(resolve ,5000)})
    return(
        <div>
        <div>This page is for jobs.</div>
        </div>
    )
}
export default Jobs;
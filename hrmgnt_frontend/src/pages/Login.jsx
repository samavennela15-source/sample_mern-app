import {useState} from "react"

function Login(){
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    
    return(
        <div>
            <form>
                <input type = "text" value = {emailid}
                onChange={(event)=>setEmailid(event.target.value)} placeholder="Enter emailid"></input><br/>
                <input type="password" value = {password}
                onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input><br/>
                <button type="submit">Login</button>
            </form>

        </div>
        
    )
}
export default Login;
import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css'


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3001/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/Dashbord",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details ")
                console.log(e);
            })
          

        }
        catch(e){
            console.log(e);

        }

    }
    return (
        <div>

            <form id="log" action="POST">
          
            <h3>Login Here</h3>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />

                <button className="B"  type="submit" onClick={submit}>  Log in</button>
        <div class="social">
          <div class="go"><i class="bi bi-google"></i> Google</div>
          <div class="fb"><i class="bi bi-facebook"></i> Facebook</div>
        </div>
        <br />
            <p className="PP">----------------OR-----------------</p>
            <br />

            <Link to="/signup">Signup Page</Link>
            </form>

         

        </div>
    )
}

export default Login;


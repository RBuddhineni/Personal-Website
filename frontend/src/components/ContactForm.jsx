import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState("");

  const handle=(e)=> setForm({...form, [e.target.name]: e.target.value});

  const submit=async(e)=>{
    e.preventDefault();
    setStatus("Sending...");
    try{
      const res = await axios.post("/api/send-email", form);
      setStatus(res.data.message);
      setForm({name:"", email:"", message:""});
    }catch(err){
      setStatus("Error.");
    }
  };

  return (
    <form onSubmit={submit} style={{maxWidth:"600px", margin:"0 auto", padding:"20px"}}>
      <h1 style={{color:"var(--purple)"}}>Feel free to contact me!</h1>
      <input name="name" placeholder="Name" value={form.name} onChange={handle} required style={{width:"100%", margin:"10px 0", padding:"10px"}}/>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handle} required style={{width:"100%", margin:"10px 0", padding:"10px"}}/>
      <textarea name="message" placeholder="Message" value={form.message} onChange={handle} required style={{width:"100%", margin:"10px 0", padding:"10px", height:"120px"}}/>
      <button type="submit" style={{padding:"10px 20px", background:"var(--purple)", color:"white", border:"none", borderRadius:"6px"}}>Send</button>
      <p>{status}</p>
    </form>
  );
}

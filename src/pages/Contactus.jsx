import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#020617,#0f172a)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"40px"
      }}>
        <div style={{
          width:"100%",
          maxWidth:"500px",
          background:"#111827",
          padding:"40px",
          borderRadius:"18px",
          boxShadow:"0 20px 50px rgba(0,0,0,0.6)",
          textAlign:"center",
          color:"white"
        }}>
          <h1 style={{color:"#22c55e"}}>Contact Us</h1>
          <p style={{color:"#9ca3af", marginBottom:"20px"}}>
            Send your message to CodiAi team
          </p>

          <form style={{
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>
            <input type="text" placeholder="Your Name" style={inputStyle}/>
            <input type="email" placeholder="Your Email" style={inputStyle}/>
            <textarea rows="4" placeholder="Your Message" style={inputStyle}></textarea>

            <button style={{
              background:"#22c55e",
              border:"none",
              padding:"14px",
              borderRadius:"10px",
              fontWeight:"bold",
              cursor:"pointer"
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

const inputStyle = {
  padding:"12px",
  borderRadius:"8px",
  border:"none",
  outline:"none",
  background:"#020617",
  color:"white"
};

export default ContactUs;

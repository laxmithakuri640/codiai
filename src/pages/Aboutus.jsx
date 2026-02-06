import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#0f172a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}>
        <div style={{
          maxWidth: "900px",
          width: "100%",
          background: "#111827",
          padding: "40px",
          borderRadius: "18px",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          color: "white"
        }}>
          <h1 style={{color:"#22c55e", marginBottom:"15px"}}>About CodiAi</h1>

          <p style={{color:"#cbd5e1", marginBottom:"30px"}}>
            CodiAi is an AI-powered learning platform designed to help students
            learn programming easily and build strong coding skills for the future.
          </p>

          <div style={{
            display:"flex",
            gap:"20px",
            justifyContent:"center",
            flexWrap:"wrap"
          }}>
            <div style={cardStyle}>
              <h3 style={{color:"#22c55e"}}>Our Mission</h3>
              <p>Make coding easy for all students.</p>
            </div>

            <div style={cardStyle}>
              <h3 style={{color:"#22c55e"}}>Our Vision</h3>
              <p>Build smart AI learning platform.</p>
            </div>

            <div style={cardStyle}>
              <h3 style={{color:"#22c55e"}}>Our Goal</h3>
              <p>Help beginners become developers.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const cardStyle = {
  background:"#020617",
  padding:"20px",
  borderRadius:"14px",
  width:"220px",
  color:"#e5e7eb"
};

export default Aboutus;

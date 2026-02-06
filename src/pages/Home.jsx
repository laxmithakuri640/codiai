import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Background */}
      <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-6">

        <div className="w-full max-w-5xl text-center">

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            What can I help with?
          </h1>

          <p className="text-zinc-400 mb-12 text-lg">
            Your smart coding assistant for programming, projects and assignments
          </p>

          {/* Suggestion Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="group bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg border border-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-3xl text-left shadow-lg hover:shadow-red-500/30">
              <h3 className="font-bold text-xl mb-2 text-red-400 group-hover:text-white">
                Explain React simply
              </h3>
              <p className="text-zinc-300 text-sm">
                Learn React in easy beginner-friendly way with examples.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-lg border border-purple-500/20 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-3xl text-left shadow-lg hover:shadow-purple-500/30">
              <h3 className="font-bold text-xl mb-2 text-purple-400 group-hover:text-white">
                Design a login page
              </h3>
              <p className="text-zinc-300 text-sm">
                Create modern and beautiful login UI design.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-3xl text-left shadow-lg hover:shadow-blue-500/30">
              <h3 className="font-bold text-xl mb-2 text-blue-400 group-hover:text-white">
                Fix my React error
              </h3>
              <p className="text-zinc-300 text-sm">
                Debug errors and improve your code fast.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-green-500/20 hover:scale-105 transition-all duration-300 cursor-pointer p-6 rounded-3xl text-left shadow-lg hover:shadow-green-500/30">
              <h3 className="font-bold text-xl mb-2 text-green-400 group-hover:text-white">
                Help with assignment
              </h3>
              <p className="text-zinc-300 text-sm">
                Get help with college assignments and projects.
              </p>
            </div>

          </div>

          {/* Footer text */}
          <p className="text-xs text-zinc-500 mt-16">
            CodiAi may produce inaccurate info. Always verify important details.
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

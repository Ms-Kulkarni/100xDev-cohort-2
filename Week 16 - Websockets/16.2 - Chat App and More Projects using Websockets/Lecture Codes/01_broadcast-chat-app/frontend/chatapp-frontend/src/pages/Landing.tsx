import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative ">
     <div >
      {/* Background decorative elements - subtle green glow */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-yellow-500 rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-500 rounded-full opacity-3 blur-2xl animate-pulse delay-500"></div>
       
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-doto">
          <span className="text-yellow-300 drop-shadow-[0_0_10px_rgba(212,212,212,0.3)]">
            Real-Time Rooms
          </span>
          <br />
          <span className="text-yellow-200 drop-shadow-[0_0_15px_rgba(74,222,128,0.4)]">
          Just Join In
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed font-doto">
          Create or join a chat room instantly and start messaging — powered by WebSockets.
        </p>

        {/* Feature Indicators */}
        <div className="flex justify-center items-center gap-6 mb-12 text-sm md:text-base">
          <span className="text-zinc-300 font-medium hover:text-yellow-400 transition-colors font-doto">Secure</span>
          <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
          <span className="text-zinc-300 font-medium hover:text-yellow-400 transition-colors font-doto">Fast</span>
          <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
          <span className="text-zinc-300 font-medium hover:text-yellow-400 transition-colors font-doto">Real-time</span>
        </div>

        {/* Buttons */}
       <div className="flex flex-col gap-4 justify-center items-center">
          <button
            onClick={handleGetStarted}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] font-doto">
              Get Started
          </button>
          <button className="px-8 py-4 border-2 border-zinc-600 hover:border-yellow-400 text-zinc-300 hover:text-yellow-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-doto">
            Learn More
          </button>
  
        </div>

    
       </div>
    </div>
  </div>

  );
};

export default Landing; 
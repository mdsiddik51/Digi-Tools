const Hero = () => {
  return (
    <div className="hero bg-white min-h-screen w-11/12 mx-auto pb-10 ">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <img src=".\src\assets\banner.png" alt="" />
        <div className="p-1.5">
          <div>
            <div className="mb-6">
              <span className="py-1 px-3 rounded-full bg-[#4F39F670]">
                <span className="  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  <i className="fa-regular fa-circle-dot"></i> New: AI-Powered
                  Tools Available
                </span>
              </span>
            </div>
            <h1 className="mb-4 text-2xl md:text-6xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
          </div>

          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all <br /> in one place. Start creating faster today.
            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <button className="btn p-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
              Explore Products
            </button>

            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-0.5 rounded-full">
              <div className="flex items-center gap-2 bg-white rounded-full h-full px-2">
                <img
                  src="./src/assets/play.png"
                />
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

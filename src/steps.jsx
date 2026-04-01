const Steps = () => {
  return (
    <div className="pt-10 md:pt-15 w-11/12 mx-auto pb-10 md:pb-15">
      <div>
        <div className="text-center pb-10">
          <h1 className="font-extrabold text-4xl md:text-5xl">Get Started in 3 Steps</h1>
          <p className="text-[#62738280] pt-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          <div className="relative p-6 border border-[#62738250] rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2  hover:border-[#9514FA] hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]">
            <span className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
              01
            </span>

            <div className="text-center">
              <div className="flex justify-center pt-22">
                <div className="bg-[#9514FA50] p-4 rounded-full">
                  <img src="src\assets\user.png" />
                </div>
              </div>
              <div className="space-y-4 pt-4 pb-4 md:pb-20">
                <h1 className="text-[#101727] font-bold text-2xl">
                  Create Account
                </h1>
                <p className="text-[#62738280]">
                  Sign up for free in seconds. No credit card <br /> required to
                  get started.
                </p>
              </div>
            </div>
          </div>

          {/* card - 2 */}
          <div className="relative p-6 border border-[#62738250] rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2  hover:border-[#9514FA] hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]">
            <span className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
              02
            </span>

            <div className="text-center">
              <div className="flex justify-center pt-22">
                <div className="bg-[#9514FA50] p-4 rounded-full">
                  <img src="src\assets\package.png" />
                </div>
              </div>
              <div className="space-y-4 pt-4 pb-4 md:pb-20">
                <h1 className="text-[#101727] font-bold text-2xl">
                  Choose Products
                </h1>
                <p className="text-[#62738280]">
                  Browse our catalog and select the tool <br /> sthat fit your needs.
                </p>
              </div>
            </div>
          </div>

          {/* card - 3 */}

          <div className="relative p-6 border border-[#62738250] rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2  hover:border-[#9514FA] hover:shadow-[0_0_20px_rgba(149,20,250,0.5)]">
            <span className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
              03
            </span>

            <div className="text-center">
              <div className="flex justify-center pt-22">
                <div className="bg-[#9514FA50] p-4 rounded-full">
                  <img src="src\assets\rocket.png" />
                </div>
              </div>
              <div className="space-y-4 pt-4 pb-4 md:pb-20">
                <h1 className="text-[#101727] font-bold text-2xl">
                  Start Creating
                </h1>
                <p className="text-[#62738280]">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

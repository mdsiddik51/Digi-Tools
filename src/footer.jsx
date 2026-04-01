const Footer = () => {
  return (
    <div className="bg-[#101727] pt-15 md:pt-30">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          <div className="space-y-3.5">
            <h1 className="font-bold pb-3 text-white text-4xl">DigiTools</h1>
            <p className="text-white/50">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="space-y-3.5">
            <h1 className="font-medium text-[20px] text-white">Product</h1>
            <p className="text-white/50">Features</p>
            <p className="text-white/50">Pricing</p>
            <p className="text-white/50">Templates</p>
            <p className="text-white/50">Integrations</p>
          </div>
          <div className="space-y-3.5">
            <h1 className="font-medium text-[20px] text-white">Company</h1>
            <p className="text-white/50">About</p>
            <p className="text-white/50">Blog</p>
            <p className="text-white/50">Careers</p>
            <p className="text-white/50">Press</p>
          </div>
          <div className="space-y-3.5">
            <h1 className="font-medium text-[20px] text-white">Resources</h1>
            <p className="text-white/50">Documentation</p>
            <p className="text-white/50">Help Center</p>
            <p className="text-white/50">Community</p>
            <p className="text-white/50">Contact</p>
          </div>
          <div className="space-y-3.5">
            <h1 className="font-medium text-[20px] text-white">
              Social Links
            </h1>
            <div className=" flex gap-5">
              <small className="bg-white text-black rounded-full flex items-center justify-center w-8 h-8">
                <i class="fa-brands fa-instagram text-lg"></i>
              </small>
              <span className="bg-white text-black rounded-full flex items-center justify-center w-8 h-8">
                <i class="fa-brands fa-square-facebook text-lg"></i>
              </span>
              <span className="bg-white text-black rounded-full flex items-center justify-center w-8 h-8">
                <i class="fa-brands fa-x-twitter text-lg"></i>
              </span>
            </div>
          </div>
        </div>
            <div className="pt-10 md:pt-20">
                <hr className="text-white/50" />
            </div>
        <div className="flex flex-col md:flex-row md:justify-between p-7.5">
            <div>
                <h4 className="text-white/50">© 2026 Digitools. All rights reserved.</h4>
            </div>
            <div className="text-white/50 flex text-center gap-5">
                <h4>Privacy Policy</h4>
                <h4>Terms of Service</h4>
                <h4>Cookies</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

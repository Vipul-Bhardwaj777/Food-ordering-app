const Footer = () => {
  return (
    <div className="footer-main border w-full h-[459px]  ">
      <div className="topf h-[104px] py-4 flex justify-around bg-[#f0f0f5] ">
        <h1 className="heading text-[25px] font-bold w-[410px] h-[64px]">
          For better experience,download the Swiggy app now
        </h1>

        <div className="footer-imgs flex gap-6 w-[435px] h-[64px] ">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt=""
            className="f-img"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt=""
            className="f-img"
          />
        </div>
      </div>

      <div className="bottomf text-white bg-[#02060c] px-[221px] h-full flex gap-[41px]">
        <div className="small mt-12  w-[174px] h-[313px] text-[14px]  ">
          <div className="logo">
            <h1 className="head text-[24px] font-bold mb-2 ">Swiggy</h1>
            <p className="par text-[#a7a4a4] text-[16px]  ">
              © 2023 Bundl Technologies Pvt. Ltd
            </p>
          </div>
        </div>
        <div className="small mt-12 w-[174px] h-[313px] text-[14px]  ">
          <h1 className="txth font-medium text-[18px] mb-4 ">Company</h1>
          <ul>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">About</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Careers</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Team</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Swiggy One
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Swiggy Instamart
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Swiggy Genie
            </li>
          </ul>
        </div>
        <div className="small mt-12 w-[174px] h-[313px] text-[14px]  ">
          <h1 className="txth font-medium text-[18px] mb-4 ">Company</h1>
          <ul>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Help & Support
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Partner with us
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Ride with us
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Terms & Conditions
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Cookie Policy
            </li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="small mt-12 w-[174px] h-[313px] text-[14px]  ">
          <h1 className="txth font-medium text-[18px] mb-4 ">Company</h1>
          <ul>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Bangalore</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Gurgaon</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Hyderabad</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Delhi</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Mumbai</li>
            <li className="stxt text-[#a7a4a4] text-[16px] mb-4 ">Pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

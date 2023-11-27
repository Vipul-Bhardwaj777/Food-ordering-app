import React from "react";

class HelpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="help-main bg-[#37718e] h-full ">
        <div className="heading">
          <h1 className="text-[32px] text-white font-bold pl-8 pt-[70px] ">
            Help & Support
          </h1>
          <p className="text-[16px] text-white pl-8 mb-[37px] ">
            Let's take a step ahead and help you better.
          </p>
        </div>

        <div className="body w-full bg-white p-[50px] ml-5 flex">
          <div className="left bg-[#e9ecf1] h-[731px] w-[401px] py-5 pl-5 ">
            <ul className="cursor-pointer ">
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Help with orders
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                General issues
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Partner Onboarding
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Legal, Terms & Conditions
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                FAQs
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Swiggy one FAQs
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Swiggy Money FAQs{" "}
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Swiggy Dineout FAQs{" "}
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Swiggy HDFC Bank Credit Card - Features{" "}
              </li>
              <li className="w-[381px] hover:bg-white h-[69px]  text-[14px] font-medium pl-[60px] py-[25px] ">
                Swiggy HDFC Bank Credit Card - Usage
              </li>
            </ul>
          </div>

          <div className="right  flex-center flex-col justify-center text-center h-[500px] w-full">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw"
              alt=""
              className="order mb-[35px] "
            />
            <h1 className="txt text-[20px] font-medium">No Orders</h1>
            <p className="text-[14px] text-smallText-color ">
              You haven't placed any order yet.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpPage;

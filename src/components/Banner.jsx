import Illustration1 from "../assets/Illustration1.png";

const Banner = () => {
  return (
    <div className="container max-w-6xl mx-auto">
      {/* banner */}
      <div className="grid grid-cols-2 gap-14">
        {/* grid 1 */}
        <div className="py-24">
          <img alt="ilustration-SatSetVPN" src={Illustration1} />
        </div>
        {/* end grid 1 */}
        {/* grid 2 */}
        <div className="py-32">
          <div className="text-5xl font-medium text-dark-blue">
            Want anything to be
            <br />
            easy with <strong>SatSetVPN.</strong>
          </div>
          <div className="text-lg font-normal mt-9 mb-12">
            Provide a network for all your needs with ease and fun using{" "}
            <strong>SatSetVPN</strong> {" "}
            discover interesting features from us.
          </div>
          <button className="px-16 py-4 bg-red-500 rounded-xl text-white text-base font-bold drop-shadow-xl">
            Get Started
          </button>
        </div>
        {/* end grid 2 */}
      </div>
      {/* end banner */}
    </div>
  );
};

export default Banner;

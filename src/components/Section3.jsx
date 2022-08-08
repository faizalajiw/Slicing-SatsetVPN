import Illustration2 from "../assets/Illustration2.png";
import { UisCheckCircle } from "@iconscout/react-unicons-solid";

const Section3 = () => {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];
  return (
    <div className="container max-w-6xl mx-auto">
      {/* banner */}
      <div className="grid grid-cols-2 gap-14">
        {/* grid 1 */}
        <div className="py-32">
          <div className="text-4xl font-medium text-dark-blue">
            We Provide Many Features You Can Use
          </div>
          <div className="text-lg font-normal my-5">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          {features.map((val, index) => {
            return (
              <div className="flex space-x-3 my-5" key={index}>
                <UisCheckCircle color="#F53838" size="30" />
                <div className="text-lg font-normal">{val}</div>
              </div>
            );
          })}
        </div>
        {/* end grid 1 */}
        {/* grid 2 */}
        <div className="py-24">
          <img alt="ilustration-SatsetVPN" src={Illustration2} />
        </div>
        {/* end grid 2 */}
      </div>
      {/* end banner */}
    </div>
  );
};

export default Section3;

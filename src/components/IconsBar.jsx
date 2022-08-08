import { UilUser, UilMapMarker, UilServerAlt } from "@iconscout/react-unicons";

const IconsBar = () => {
  return (
    <div className="container max-w-6xl mx-auto">
      {/* section icons */}
      <div className="grid grid-cols-3 gap-x-32 bg-white rounded-2xl drop-shadow-md shadow-gray-50">
        {/* card */}
        <div className="flex flex-row py-10 space-x-6 justify-center ">
          <div className="rounded-xl p-4 drop-shadow-lg bg-red-100">
            <UilUser color="#F53838" size="25" />
          </div>
          <div>
            <div className="font-bold text-xl">50+</div>
            <div className="text-lg">Users</div>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div className="flex flex-row py-10 space-x-6 justify-center ">
          <div className="rounded-xl p-4 drop-shadow-lg bg-red-100">
            <UilMapMarker color="#F53838" size="25" />
          </div>
          <div>
          <div className="font-bold text-xl">25+</div>
            <div className="text-lg">Location</div>
          </div>
        </div>
        {/* end card */}
        {/* card */}
        <div className="flex flex-row py-10 space-x-6 justify-center ">
          <div className="rounded-xl p-4 drop-shadow-lg bg-red-100">
            <UilServerAlt color="#F53838" size="25" />
          </div>
          <div>
          <div className="font-bold text-xl">10+</div>
            <div className="text-lg">Server</div>
          </div>
        </div>
        {/* end card */}
      </div>
      {/* end section icons */}
    </div>
  );
};

export default IconsBar;

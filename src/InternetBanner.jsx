// @ts-nocheck
import React from "react";
import GridCopy from "./GridCopy";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";

export const InternetBanner = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className=" max-w-4xl scale-110">
        <div className="grid grid-cols-11 gap-1 relative">
          <div>
            <GridAd img={"/banners/grid-ad-6.gif"} still={"/banners/grid-ad-6-STILL.png"} />
          </div>

          <div className="grid grid-row-3">
            <div className="flex justify-center">
              <GridAd img={"/banners/grid-ad-7.gif"} still={"/banners/grid-ad-7-STILL.png"} />
            </div>
          </div>
          <div className="row-span-4">
            <div className="flex justify-end ">
              <GridAd img={"/banners/zooAd.gif"} still={"/banners/zooAd-STILL.png"} className="" />
            </div>
            <div>
              <div className="flex justify-center">
                <GridAd img={"/banners/grid-ad-5.gif"} still={"/banners/grid-ad-5-STILL.png"} />
              </div>
              <div className="flex justify-center">
                <GridAd img={"/banners/grid-ad-11.gif"} still={"/banners/grid-ad-11-STILL.png"} />
              </div>
              <div className="flex justify-center">
                <GridAd img={"/banners/grid1.gif"} still={"/banners/grid1-STILL.png"} />
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-4 ">
            <div className="">
              <GridAd img={"/banners/bbWestAd.gif"} still={"/banners/bbWestAd-STILL.png"} />
            </div>
            <div className="p-0.5">
              <GridAd img={"/banners/grid-ad-9.gif"} still={"/banners/grid-ad-9-STILL.png"} />
            </div>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="flex justify-center">
              <GridAd img={"/banners/boskAd.gif"} still={"/banners/boskAd-STILL.png"} />
            </div>
          </div>

          <div className="col-span-6 row-span-2">
            <div className="pb-1">
              <GridAd img={"/banners/longWestAd.gif"} still={"/banners/longWestAd-STILL.png"} />
            </div>
            <div className="">
              <GridCopy />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div>
              <GridAd img={"/banners/rogersSquare.gif"} still={"/banners/rogersSquare-STILL.png"} />
            </div>
            <div className="grid grid-cols-2 pt-1">
              <div className="px-1">
                <GridAd img={"/banners/grid-ad-10.gif"} still={"/banners/grid-ad-10-STILL.png"} />
              </div>
              <div className="px-1">
                <GridAd img={"/banners/grid-ad-8.gif"} still={"/banners/grid-ad-8-STILL.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetBanner;

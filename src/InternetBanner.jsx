// @ts-nocheck
import React from "react";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";

export const InternetBanner = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className="max-w-4xl scale-110">
        {/* Long WestJet ad at the top, spanning all columns */}
        <div className="grid grid-cols-4 mb-6" style={{ alignItems: 'stretch' }}>
          <div className="col-span-4">
            <GridAd img={"/banners/longWestAd.gif"} still={"/banners/longWestAd-STILL.png"} />
          </div>
          {/* ZooCasa ad on the left, spanning 5 rows, full height */}
          <div className="row-span-5 flex items-stretch h-full">
            <div className="h-full w-full flex items-stretch">
              <GridAd img={"/banners/zooAd.gif"} still={"/banners/zooAd-STILL.png"} />
            </div>
          </div>
          {/* 4x5 Grid of grid ads in its own div, to the right of ZooCasa, scaled down 10% */}
          <div className="col-span-3 row-span-5 -ml-10 flex items-stretch h-full">
            <div className="grid grid-cols-4 grid-rows-4 gap-2 -ml-4 -mt-4 h-full content-stretch scale-90">
              {/* Rogers ad: top left, spans 2x2 */}
              <div className="col-span-2 row-span-2 col-start-1 row-start-1">
                <GridAd img={"/banners/rogersSquare.gif"} still={"/banners/rogersSquare-STILL.png"} />
              </div>
              {/* Top row, right of Rogers */}
              <div className="col-start-3 row-start-1">
                <GridAd img={"/banners/grid1.gif"} still={"/banners/grid1-STILL.png"} />
              </div>
              <div className="col-start-4 row-start-1">
                <GridAd img={"/banners/grid-ad-5.gif"} still={"/banners/grid-ad-5-STILL.png"} />
              </div>
              {/* Second row, right of Rogers */}
              <div className="col-start-3 row-start-2">
                <GridAd img={"/banners/grid-ad-6.gif"} still={"/banners/grid-ad-6-STILL.png"} />
              </div>
              <div className="col-start-4 row-start-2">
                <GridAd img={"/banners/grid-ad-7.gif"} still={"/banners/grid-ad-7-STILL.png"} />
              </div>
              {/* Third row, left two cells */}
              <div className="col-start-1 row-start-3">
                <GridAd img={"/banners/grid-ad-8.gif"} still={"/banners/grid-ad-8-STILL.png"} />
              </div>
              <div className="col-start-2 row-start-3">
                <GridAd img={"/banners/grid-ad-9.gif"} still={"/banners/grid-ad-9-STILL.png"} />
              </div>
              <div className="col-start-3 row-start-3">
                <GridAd img={"/banners/grid-ad-10.gif"} still={"/banners/grid-ad-10-STILL.png"} />
              </div>
              <div className="col-start-4 row-start-3">
                <GridAd img={"/banners/grid-ad-11.gif"} still={"/banners/grid-ad-11-STILL.png"} />
              </div>
              {/* Bosk ad: bottom right, spans 2x2 */}
              <div className="col-span-2 row-span-2 col-start-3 row-start-3">
                <GridAd img={"/banners/boskAd.gif"} still={"/banners/boskAd-STILL.png"} />
              </div>
              <div className="col-start-1 row-start-4">
                <GridAd img={"/banners/grid-ad-11.gif"} still={"/banners/grid-ad-11-STILL.png"} />
              </div>
              <div className="col-start-2 row-start-4">
                <GridAd img={"/banners/grid-ad-10.gif"} still={"/banners/grid-ad-10-STILL.png"} />
              </div>
            </div>
          </div>
        </div>
        {/* Row of other ads below the grid */}
        
      </div>
    </div>
  );
};

export default InternetBanner;

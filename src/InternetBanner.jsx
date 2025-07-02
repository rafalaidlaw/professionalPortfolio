// @ts-nocheck
import React, { useState } from "react";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";

export const InternetBanner = () => {
  const [animateStates, setAnimateStates] = useState({});
  const handleMouseEnter = (key) => {
    setAnimateStates((prev) => ({ ...prev, [key]: true }));
  };
  const handleMouseLeave = (key) => {
    setAnimateStates((prev) => ({ ...prev, [key]: false }));
  };
  return (
    <div className=" flex justify-center">
      <div className="max-w-4xl scale-120 -mt-6 ">
        {/* Long WestJet ad at the top, spanning all columns */}
        <div className="grid grid-cols-4" style={{ alignItems: 'stretch' }}>
          <div className="col-span-4">
            <GridAd img={"/banners/longWestAd.gif"} still={"/banners/longWestAd-STILL.png"}
              animate={!!animateStates['longWestAd']}
              onMouseEnter={() => handleMouseEnter('longWestAd')}
              onMouseLeave={() => handleMouseLeave('longWestAd')}
            />
          </div>
          {/* ZooCasa ad on the left, spanning 5 rows, full height */}
          <div className="row-span-5 flex items-stretch h-full">
            <div className="h-full w-full flex items-stretch origin-top-left ">
              <GridAd img={"/banners/zooAd.gif"} still={"/banners/zooAd-STILL.png"}
                animate={!!animateStates['zooAd']}
                onMouseEnter={() => handleMouseEnter('zooAd')}
                onMouseLeave={() => handleMouseLeave('zooAd')}
              />
            </div>
          </div>
          {/* 4x5 Grid of grid ads in its own div, to the right of ZooCasa, scaled down 10% */}
          <div className="col-span-3 row-span-5 -ml-10 flex items-stretch h-full">
            <div className="grid grid-cols-4 grid-rows-4  h-full content-stretch ">
              {/* Rogers ad: top left, spans 2x2 */}
              <div className="col-span-2 row-span-2 col-start-1 row-start-1">
                <GridAd img={"/banners/rogersSquare.gif"} still={"/banners/rogersSquare-STILL.png"}
                  animate={!!animateStates['rogersSquare']}
                  onMouseEnter={() => handleMouseEnter('rogersSquare')}
                  onMouseLeave={() => handleMouseLeave('rogersSquare')}
                />
              </div>
              {/* Top row, right of Rogers */}
              <div className="col-start-3 row-start-1">
                <GridAd img={"/banners/grid1.gif"} still={"/banners/grid1-STILL.png"}
                  animate={!!animateStates['grid1']}
                  onMouseEnter={() => handleMouseEnter('grid1')}
                  onMouseLeave={() => handleMouseLeave('grid1')}
                />
              </div>
              <div className="col-start-4 row-start-1">
                <GridAd img={"/banners/grid-ad-5.gif"} still={"/banners/grid-ad-5-STILL.png"}
                  animate={!!animateStates['grid-ad-5']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-5')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-5')}
                />
              </div>
              {/* Second row, right of Rogers */}
              <div className="col-start-3 row-start-2">
                <GridAd img={"/banners/grid-ad-6.gif"} still={"/banners/grid-ad-6-STILL.png"}
                  animate={!!animateStates['grid-ad-6']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-6')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-6')}
                />
              </div>
              <div className="col-start-4 row-start-2">
                <GridAd img={"/banners/grid-ad-7.gif"} still={"/banners/grid-ad-7-STILL.png"}
                  animate={!!animateStates['grid-ad-7']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-7')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-7')}
                />
              </div>
              {/* Third row, left two cells */}
              <div className="col-start-1 row-start-3">
                <GridAd img={"/banners/grid-ad-8.gif"} still={"/banners/grid-ad-8-STILL.png"}
                  animate={!!animateStates['grid-ad-8']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-8')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-8')}
                />
              </div>
              <div className="col-start-2 row-start-3">
                <GridAd img={"/banners/grid-ad-9.gif"} still={"/banners/grid-ad-9-STILL.png"}
                  animate={!!animateStates['grid-ad-9']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-9')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-9')}
                />
              </div>
              {/* Bosk ad: bottom right, spans 2x2 */}
              <div className="col-span-2 row-span-2 -mt-10 col-start-3 row-start-3 flex flex-col items-center justify-center">
                <GridAd img={"/banners/boskAd.gif"} still={"/banners/boskAd-STILL.png"}
                  animate={!!animateStates['boskAd']}
                  onMouseEnter={() => handleMouseEnter('boskAd')}
                  onMouseLeave={() => handleMouseLeave('boskAd')}
                />
                <span className="block text-xs text-white text-center mt-1"> * * * </span>
              </div>
              <div className="col-start-1 row-start-4">
                <GridAd img={"/banners/grid-ad-11.gif"} still={"/banners/grid-ad-11-STILL.png"}
                  animate={!!animateStates['grid-ad-11']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-11')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-11')}
                />
              </div>
              <div className="col-start-2 row-start-4">
                <GridAd img={"/banners/grid-ad-10.gif"} still={"/banners/grid-ad-10-STILL.png"}
                  animate={!!animateStates['grid-ad-10']}
                  onMouseEnter={() => handleMouseEnter('grid-ad-10')}
                  onMouseLeave={() => handleMouseLeave('grid-ad-10')}
                />
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

import React from "react";

export const GridAd = ({ img, still }) => {
  return (
    <div>
      <article className=" p-1">
        <div className="border-b-2 border-gray-700">
          <div className="border-t-2 border-gray-500">
            <div className="border-l-2 border-gray-600">
              <div className="border-r-2 border-gray-600">
                <div className="border-b-2 border-gray-700">
                  <div className="border-t-2 border-gray-500">
                    <div className="border-l-2 border-gray-600">
                      <div className="border-r-2 border-gray-600">
                        <div className="border-b-2 border-gray-700">
                          <div className="border-t-2 border-gray-500">
                            <div className=" relative">
                              <div className="bg-gray-400">
                                <img
                                  src={still}
                                  alt="Rafael in Packaging"
                                  className="opacity-25 transition-opacity hover:opacity-0"
                                />
                                <img
                                  src={img}
                                  alt="Rafael in Packaging"
                                  className="absolute top-0 left-0 opacity-0 w-full object-cover  transition-opacity hover:opacity-100 hover:animate-box3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default GridAd;

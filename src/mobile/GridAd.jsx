import React from "react";

export const GridAd = ({ img, still, animate, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <article className="p-1">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div className="relative">
                              <div className="bg-gray-400">
                                <img
                                  src={still}
                                  alt="Rafael in Packaging"
                                  className="opacity-25 transition-opacity hover:opacity-0 grayscale"
                                />
                                <img
                                  src={img}
                                  alt="Rafael in Packaging"
                                  className={`absolute top-0 left-0 opacity-0 w-full object-cover  transition-opacity hover:opacity-100 hover:animate-box3 ${animate ? 'scale-up-down z-20' : ''}`}
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

import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import RetroFont from "./RetroFont";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { colors } = useTheme();
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <div className="scale-75  max-w-4xl pb-2 md:w-10/12">
          <div className="grid grid-flow-col-dense pb-4">
            <RetroFont txt={"E"} />
            <RetroFont txt={"-"} />
            <RetroFont txt={"C"} />
            <RetroFont txt={"O"} />
            <RetroFont txt={"M"} />
            <RetroFont txt={"M"} />
            <RetroFont txt={"E"} />
            <RetroFont txt={"R"} />
            <RetroFont txt={"C"} />
            <RetroFont txt={"E"} />
          </div>
          <div className="grid grid-flow-col-dense">
            <RetroFont txt={"W"} />
            <RetroFont txt={"E"} />
            <RetroFont txt={"B"} />
            <RetroFont txt={"S"} />
            <RetroFont txt={"I"} />
            <RetroFont txt={"T"} />
            <RetroFont txt={"E"} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3  ">
        <section className="md:col-span-2 align-element " id="projects">
          <div className={`${colors.bg[600]} rounded-lg py-1 px-1 grid grid-flow-row`}>
            <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
              <div className={`${colors.bg[400]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[300]} rounded-lg  py-1 px-1`}>
                  <article className={`${colors.bg[200]} rounded-lg `}>
                    <div className="flex justify-center">
                      <div className="pt-5 grid md:grid-cols-1 w-11/12">
                        {projects.map((project) => {
                          return <ProjectsCard key={project.id} {...project} />;
                        })}
                      </div>
                    </div>
                    <div>
                      <h2 className={`text-lg text-center  font- ${colors.text[400]}  tracking-wider py-1`}>
                        Hover to Play || Click to Visit.
                      </h2>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scale-75 md:scale-100">
          <section className="col-span-1" id="projects ">
            <div className="flex justify-center pb-4">
              <h1 className={`text-4xl font-Caprasimo tracking-wider ${colors.text[300]} drop-shadow `}>
                MADE WITH
              </h1>
            </div>
            <article className="grid grid-cols-3 gap-2 ">
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          REACT
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-span-2">
                <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                  <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                    <article className={`${colors.bg[400]} rounded-lg px-2`}>
                      <div className="flex justify-center">
                        <div className="">
                          <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                            TYPESCRIPT
                          </h1>
                          <div></div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                  <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                    <article className={`${colors.bg[400]} rounded-lg px-2`}>
                      <div className="flex justify-center">
                        <div className="">
                          <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                            GRAPHQL
                          </h1>
                          <div></div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          HOOKS
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          STRIPE
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-span-2">
                <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                  <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                    <article className={`${colors.bg[400]} rounded-lg px-2`}>
                      <div className="flex justify-center">
                        <div className="">
                          <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                            FIREBASE
                          </h1>
                          <div></div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          REDUX
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          THUNK
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                  <article className={`${colors.bg[400]} rounded-lg px-2`}>
                    <div className="flex justify-center">
                      <div className="">
                        <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                          SAGA
                        </h1>
                        <div></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-span-3">
                <div className={`${colors.bg[600]} rounded-lg py-1 px-1`}>
                  <div className={`${colors.bg[500]} rounded-lg py-1 px-1`}>
                    <article className={`${colors.bg[400]} rounded-lg px-2`}>
                      <div className="flex justify-center">
                        <div className="">
                          <h1 className={`text-lg font-Monoton tracking-wider ${colors.text[200]} drop-shadow`}>
                            REACT-HOOK-FORM
                          </h1>
                          <div></div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
      <section className="md:p-5 flex justify-center ">
        <div className={`${colors.bg[600]} rounded-lg py-1 px-1  md:max-w-5xl max-w-96`}>
          <div className={`${colors.bg[400]} rounded-lg py-1 px-1`}>
            <article className={`${colors.bg[200]} rounded-lg `}>
              <div className="  py-5 px-7 ">
                <h2 className={`text-lg text-center relative font-mono ${colors.text[500]}  tracking-wider drop-shadow`}>
                  React storefront for local Toronto vendor. Google Firebasebase
                  to create the distribution API. React-Hook-Form for building
                  out the customer check out form, and integrates with Stripe
                  for payment. Modern web practices to ensure a seamless user
                  experience across all devices. Additionally, it demonstrates a
                  solid understanding of version control systems, the ability to
                  scaffold out and bring to completion a fully realized product.
                </h2>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;

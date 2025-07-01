import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import MovingImage from "../assets/Retro_Mod_Site.gif";
import StillImage from "../assets/Retro_Still_Image.png";
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <a href={url}>
      <div className="bg-orange-300 hover:bg-orange-100 hover:animate-box4 rounded-lg shadow-md block hover:shadow-xl relative">
        <article className=" text-orange-700   duration-300">
          <img
            // src={img}
            src={StillImage}
            alt={title}
            className="w-full object-cover rounded-lg transition-opacity hover:opacity-0"
          />
          <img
            // src={img}
            src={MovingImage}
            alt={title}
            className="absolute top-0 left-0 opacity-0 w-full object-cover rounded-lg  transition-opacity hover:opacity-100"
          />
          {/*  <div className="capitalize p-8">
            <h2 className="text-xl tracking-wide font-medium">{title}</h2>
            <p className="mt-4 text-orange-700 leading-loose">{text}</p>
            <div className="mt-4 flex gap-x-4">
            <TbWorldWww className="h-8 w-8 text-orange-700 hover:text-orange-200 duration-300" />

            <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-orange-700 hover:text-orange-200 duration-300" />
          </a>
          </div> 
          </div>*/}
        </article>
      </div>
    </a>
  );
};
export default ProjectsCard;

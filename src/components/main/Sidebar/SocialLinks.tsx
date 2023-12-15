import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const linkedinLink = "";
const githubLink = "";

export default async function SocialLinks() {
  return (
    <div className="flex justify-center w-9/12 gap-4 mx-auto my-5 text-main-pink md:w-full">
      <a href={githubLink} target="_blank">
        <AiFillGithub className="w-8 h-8 transition duration-300 cursor-pointer hover:text-pink-600" />
      </a>
      <a href={linkedinLink} target="_blank">
        <AiFillLinkedin className="w-8 h-8 transition duration-300 cursor-pointer hover:text-pink-600" />
      </a>
    </div>
  );
}

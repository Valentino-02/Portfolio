import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const linkedinLink = "https://linkedin.com/in/valentino-collazo-1b9551236";
const githubLink = "https://github.com/Valentino-02";
const CVlink = "https://cv-beta-sepia.vercel.app";

export default async function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 py-8 text-main-pink ">
      <a
        href={CVlink}
        target="_blank"
        aria-label="Curriculum Vitae"
        title="Curriculum Vitae"
      >
        <p className="w-8 h-8 text-2xl font-bold transition duration-300 cursor-pointer hover:text-pink-600">
          CV
        </p>
      </a>
      <a
        href={linkedinLink}
        target="_blank"
        aria-label="Linkedin"
        title="Linkedin"
      >
        <AiFillLinkedin className="w-8 h-8 transition duration-300 cursor-pointer hover:text-pink-600" />
      </a>
      <a href={githubLink} target="_blank" aria-label="Github" title="Github">
        <AiFillGithub className="w-8 h-8 transition duration-300 cursor-pointer hover:text-pink-600" />
      </a>
    </div>
  );
}

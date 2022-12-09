import React, { useRef } from "react";

import mail from "../public/assets/mail.json";
import github from "../public/assets/github.json";
import linkedin from "../public/assets/linkedin.json";
import download from "../public/assets/download.json";

import { Player } from "@lottiefiles/react-lottie-player";

const Nav = () => {
  const mailRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const downloadRef = useRef(null);

  const onIconHover = (ref: React.MutableRefObject<Player>) => {
    ref.current!.setPlayerDirection(1);
    ref.current!.play();
  };
  const onIconLeave = (ref: React.MutableRefObject<Player>) => {
    ref.current!.setPlayerDirection(-1);
    ref.current!.play();
  };

  return (
    <nav className="flex absolute p-4 right-8 top-8 rounded-lg justify-evenly items-center bg-theme-main border-solid border">
      <a
        onMouseEnter={() => onIconHover(mailRef)}
        onMouseLeave={() => onIconLeave(mailRef)}
        className="mx-4"
        href="mailto:ivanaudouard1@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Player
          ref={mailRef}
          src={mail}
          style={{ height: "2rem", width: "2rem" }}
          keepLastFrame
        ></Player>
      </a>

      <a
        onMouseEnter={() => onIconHover(githubRef)}
        onMouseLeave={() => onIconLeave(githubRef)}
        className="mx-4"
        href="https://github.com/fusunnn"
        target="_blank"
        rel="noreferrer"
      >
        <Player
          ref={githubRef}
          src={github}
          style={{ height: "2rem", width: "2rem" }}
          keepLastFrame
        ></Player>
      </a>
      <a
        onMouseEnter={() => onIconHover(linkedinRef)}
        onMouseLeave={() => onIconLeave(linkedinRef)}
        className="mx-4"
        href="https://www.linkedin.com/in/ivan-audouard-8073b7211/"
        target="_blank"
        rel="noreferrer"
      >
        <Player
          ref={linkedinRef}
          src={linkedin}
          style={{ height: "2rem", width: "2rem" }}
          keepLastFrame
        ></Player>
      </a>
      <a
        onMouseEnter={() => onIconHover(downloadRef)}
        onMouseLeave={() => onIconLeave(downloadRef)}
        className="mx-4"
        href="/assets/Ivan_Audouard_CV.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Player
          ref={downloadRef}
          src={download}
          style={{ height: "2rem", width: "2rem" }}
          keepLastFrame
        ></Player>
      </a>
    </nav>
  );
};

export default Nav;

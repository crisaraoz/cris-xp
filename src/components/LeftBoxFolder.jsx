import { AiFillGithub } from "react-icons/ai";
import { Man, Date, Pointer } from "../../public/img/Index";
import { BoxFolder } from "./BoxFolder";
import { GrLinkedinOption } from "react-icons/gr";

export const LeftBoxFolder = () => {
    return (
        <div className="flex-[20%] flex h-full bg-xp-folder-blue p-2 flex-col gap-4">
            <BoxFolder title="About me">
                <span className="flex items-center gap-2">
                    <img src={Man} width={20} alt="" />
                    Cristian Araoz
                </span>
                <span className="flex items-center gap-2">
                    <img src={Date} width={20} alt="" />
                    32 años
                </span>
                <span className="flex items-center gap-2">
                    <img src={Pointer} width={20} alt="" />
                    Buenos Aires, Argentina.
                </span>
            </BoxFolder>
            <BoxFolder title="My Skills">
                <span>HTML5, Css, TailWind, Chakra UI</span>
                <span>JavaScript, React, Directus</span>
                <span>Firebase, MongoDB, TypeScript, Vue</span>
            </BoxFolder>
            <BoxFolder title="Details">
                <span className="font-bold">My computer</span>
                <a
                    href="https://github.com/crisaraoz"
                    target="__blank"
                    className="cursor-pointer flex gap-1 items-center"
                >
                    <AiFillGithub className="text-base" />
                    <span>my Github</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/cris-araoz/"
                    target="__blank"
                    className="cursor-pointer flex gap-1 items-center"
                >
                    <GrLinkedinOption className="text-base" />
                    <span>my Linkedin</span>
                </a>
            </BoxFolder>
        </div>
    );
};

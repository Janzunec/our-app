import React from 'react';
import Slider from '../../components/Slider';

interface ProjectsJanProps {}

const ProjectsJan: React.FC<ProjectsJanProps> = () => {
  return (
    <div className=" w-screen pt-4 tablet:pt-20 mb-4 z-10">
      <div className="flex justify-center items-center">
        <Slider site="projects" />
      </div>
      <div className="w-screen h-auto flex flex-col gap-4 text-8xl font-bold font-jtm p-10 animate-fade-in">
        <div className=" transform-gpu duration-100 hover:translate-x-[20vw] hover:text-secondary">
          <a href="https://koyo.finance" target="_blank">
            Kōyō Finance
          </a>
        </div>
        <div className=" transform-gpu duration-100 hover:translate-x-[20vw] hover:text-secondary">
          <a href="https://naicha.finance" target="_blank">
            Naicha Finance
          </a>
        </div>
        <div className=" transform-gpu duration-100 hover:translate-x-[20vw] hover:text-secondary">
          <a href="https://covstats-19.pages.dev/" target="_blank">
            Covstats-19
          </a>
        </div>
        <div className=" transform-gpu duration-100 hover:translate-x-[20vw] hover:text-secondary">
          <a href="https://revolucijavodenja.si/" target="_blank">
            Revolucija vodenja
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsJan;

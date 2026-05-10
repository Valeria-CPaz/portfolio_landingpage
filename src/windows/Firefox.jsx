import { ChevronLeft, ChevronRight, MoveRight, Menu, PanelLeft, RefreshCw, ShieldCheck, UserCircleIcon, Puzzle } from "lucide-react";

import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";


const Firefox = () => {
  return <>
  <div id="window-header">
    <WindowControls target="firefox" />
    <PanelLeft className="ml-1 icon" />

    <div className="flex items-center gap-2 ml-2 ">
        <ChevronLeft className="icon" />
        <ChevronRight className="icon" />
        <RefreshCw className="icon" />
    </div>

    <div className="flex-1 flex-center gap-3 ml-">  

      <div className="search">
        <ShieldCheck className="icon" />

        <input type="text" placeholder="Search or enter website name" className="flex-1"/>
      </div>
    </div>

    <div className="flex items-center gap-3 px-3">
      <UserCircleIcon className="icon" />
      <Puzzle className="icon" />
      <Menu className="icon" />
    </div>
  </div>

  <div className="blog">
    <h2>My Developer Blog</h2>

    <div className="space-y-8">
      {blogPosts.map(({ id, image, title, date, link }) => (
        <div key={id} className="blog-post">
          <div className="col-span-2">
            <img src={image} alt={title} />        
          </div>

          <div className="content">
            <p>{date}</p>
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Check out the full post <MoveRight className="icon-hover" />
            </a>
          </div>

        </div>
      ))}
    </div>

  </div>
  </>
};

const FirefoxWindow = WindowWrapper(Firefox, "firefox");

export default FirefoxWindow;

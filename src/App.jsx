import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { NavBar, Welcome, Dock } from "#components";
import { Files, Firefox, Resume, Terminal, Text, Image, Contact } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Firefox />
      <Resume />
      <Files />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;

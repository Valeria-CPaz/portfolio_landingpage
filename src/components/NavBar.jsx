import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";


const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/images/fedora-dash.svg" alt="dash" className="h-10px w-auto"/>
        <p className="font-bold">Activities</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
         <time>{dayjs().format("MMM D H:mm")}</time>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-white" alt={`ìcon-${id}`} />
            </li>
          ))}
        </ul>
        <p className="font-bold ml-2">Valeria Paz</p>       
      </div>
    </nav>
  )
};

export default NavBar;
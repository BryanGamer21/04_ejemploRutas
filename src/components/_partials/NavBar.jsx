import {BsFillMoonStarsFill} from "react-icons/bs"
function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center p-5 bg-slate-800 dark:bg-stone-800">
      <div className="flex flex-row items-center text-white text-2xl font-bold uppercase">
        <p className="block mr-4">DLICIOUS</p>
        <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}/>
      </div>
      <ul className="flex list-none m-0 p-0">
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            INICIO
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            ACERCA
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            CARACTERISTICAS
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            PERSONAL
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            MENU
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            RESERVAS
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            PAGINAS
          </a>
        </li>
        <li className="">
          <a className="ml-5 text-slate-300 hover:text-white" href="#">
            CONTACTENOS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
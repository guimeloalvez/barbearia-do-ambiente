import { MdAddCircleOutline } from "react-icons/md";
import Button from "../../components/Button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-20 py-6 flex items-center justify-between border-b border-b-black/10">
      <div className="flex items-center gap-3">
        <img
          src="/barberlogo.png"
          alt="Barbearia do Ambiente"
          className="w-10 h-10 object-contain"
        />

        <div className="flex items-center gap-1 font-black uppercase">
          <p className="text-[#111111]">barbearia</p>
          <p className="text-[#D90000]">do</p>
          <p className="text-[#111111]">ambiente</p>
        </div>
      </div>

      <nav>
        <ul className="flex items-center gap-5 md:gap-10">
          <li>
            <a href="" className="text-xs md:text-base text-[#111111]">
              Inicio
            </a>
          </li>

          <li>
            <a href="" className="text-xs md:text-base text-[#111111]">
              Funcionalidades
            </a>
          </li>

          <li>
            <a href="" className="text-xs md:text-base text-[#111111]">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <Button
        text={"Agendar"}
        backgroundColor={"bg-[#111111]"}
        textColor={"text-white"}
        fontSize={"text-sm"}
        link=""
      />

      <a href="" className="block md:hidden bg-[#111111] p-1.5 rounded-full">
        <MdAddCircleOutline color="#fff" size={14} />
      </a>
    </header>
  );
}

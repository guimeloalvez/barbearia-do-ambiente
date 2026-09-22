import { FaPlus } from "react-icons/fa";
import { HairPickIcon } from "gitlab:iconify-icons/react#fluent-emoji-high-contrast/hair-pick";
import { IoMdStar } from "react-icons/io";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <div className="flex items-center gap-2 bg-[#E5E3DF] p-2.5 rounded-full">
        <HairPickIcon size={18} color="#111111" />
        <p className="text-[#111111] text-sm font-bold">
          Por isso tomamos as ruas
        </p>
      </div>

      <h1 className="mt-6 text-5xl max-w-160 font-black text-center text-[#111111]">
        Seu corte, <span className="text-[#D90000]">do seu jeito</span>
      </h1>

      <p className="mt-6 max-w-120 text-center gap-4">
        Corte, barba e aquele acabamento que faz a diferença. Na Barbearia do
        Ambiente, você encontra um espaço descontraído, atendimento de qualidade
        e o estilo que combina com você.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Button
          text={"Agendar horário"}
          backgroundColor={"bg-[#D90000]"}
          textColor={"text-white"}
          fontSize={"text-sm"}
          link=""
          isBorder={false}
        />

        <Button
          text={"Conhecer a barbearia"}
          backgroundColor={"bg-transparent"}
          textColor={"text-[#111111]"}
          fontSize={"text-sm"}
          link=""
          isBorder={true}
          border={"border border-[#CCC9C4]"}
        />
      </div>

      <div className="flex items-center gap-5 mt-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center">
            <p className="font-bold">500+ </p> {/*<FaPlus size={14} /> */}
          </div>
          <p className="text-[12px]">clientes atendidos</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center">
            <p className="font-bold">4.9 </p>
            <IoMdStar size={14} />
          </div>
          <p className="text-[12px]">avaliação média</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <p className="font-bold">Seg–Sáb</p>
          <p className="text-[12px]">atendimento</p>
        </div>
      </div>
    </section>
  );
}

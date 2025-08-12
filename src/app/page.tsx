import { Video } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-3" style={{ padding: "8rem 7% 2rem" }}>
      <h1 className="font-semibold text-6xl text-[#8F8F8F]">Bem vindo à Transmissiva</h1>
      <h2 className="text-[#696A65] font-medium text-3xl">Nossa missão</h2>
      <p className="w-100 text-[#D8D8D8]">Oferecemos suporte tecnico e tecnológico, usando especialistas e inovação para ajudar os nossos clientes a alcançarem os seus objectivos de mercado.</p>
      <button className="py-4 mt-4 rounded-full text-[#8F8F8F] font-medium flex items-center justify-between cursor-pointer px-7 w-80 bg-[#2F2F2F]" type="button">
        Ver videos
        <Video />
      </button>

      <div>

        <div>
          <p>74.000</p>
          <span>Subscritos</span>
        </div>

        <div>
          <p>1931</p>
          <span>Videos</span>
        </div>

        <div>
          <p>15%</p>
          <span>Engajamento</span>
        </div>
        
      </div>

    </div>
  );
}

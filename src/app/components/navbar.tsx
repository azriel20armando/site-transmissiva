"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SocialModal } from "./social";
import { AgendarModal } from "./agendar";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-[#2F2F2F] px-3 py-3 font-medium text-[#8F8F8F]">
      <span>Transmissiva.ao</span>

      {/* Botão menu mobile */}
      <button 
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu desktop */}
      <div className="hidden md:flex items-center" style={{ padding: "0.5rem" }}>
        <nav className="flex items-center">
          <Link href="/" style={{ marginRight: "2rem" }}>Início</Link>
          <Link href="/sobre" style={{ marginRight: "2rem" }}>Sobre</Link>
          <Link href="/servicos" style={{ marginRight: "2rem" }}>Serviços</Link>
          <Link href="/videos" style={{ marginRight: "2rem" }}>Vídeos</Link>
          <Link href="/contatos" style={{ marginRight: "2rem" }}>Contatos</Link>
        </nav>
          <div className="flex gap-3">
            <AgendarModal />
            <SocialModal />
          </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-[#2F2F2F] flex flex-col items-center md:hidden z-50">
          <nav className="flex flex-col items-center">
            <Link href="/" className="py-2" onClick={() => setOpen(false)}>Início</Link>
            <Link href="/sobre" className="py-2" onClick={() => setOpen(false)}>Sobre</Link>
            <Link href="/servicos" className="py-2" onClick={() => setOpen(false)}>Serviços</Link>
            <Link href="/videos" className="py-2" onClick={() => setOpen(false)}>Vídeos</Link>
            <Link href="/contatos" className="py-2" onClick={() => setOpen(false)}>Contatos</Link>
          </nav>
          <div className="py-3 flex gap-3">
            <AgendarModal />
            <SocialModal />
          </div>
        </div>
      )}
    </div>
  );
}



'use client';
import Link from 'next/link';
import { SocialModal } from './social';

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-[#2F2F2F] px-6 py-5 font-medium text-[#8F8F8F]">
      Ecommerce
      <nav style={{ padding: '0.5rem'}}>
        <Link href="/" style={{ marginRight: '2rem' }}>Início</Link>
        <Link href="/sobre" style={{ marginRight: '2rem' }}>Sobre</Link>
        <Link href="/servicos" style={{ marginRight: '2rem' }}>Serviços</Link>
        <Link href="/videos" style={{ marginRight: '2rem' }}>Vídeos</Link>
        <Link href="/contatos" style={{ marginRight: '2rem' }}>Contatos</Link>
      </nav>
      <SocialModal />
    </div>
  );
}

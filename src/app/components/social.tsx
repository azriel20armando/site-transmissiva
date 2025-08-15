import * as Dialog from '@radix-ui/react-dialog';
import { Instagram, Facebook, Twitter, X, Warehouse, MessageCircle, Youtube } from 'lucide-react';

export function SocialModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer rounded-full bg-[#212121] px-5 py-3 w-40 text-white transition hover:bg-[#4E4E4E]">
        Redes sociais
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-[90%] max-w-sm space-y-4 rounded-2xl bg-[#2F2F2F] p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-bold text-lg text-zinc-100">Social</Dialog.Title>
            <Dialog.Close className="cursor-pointer text-zinc-100 transition hover:text-red-500">
              <X className="h-5 w-5" />
            </Dialog.Close>   
          </div>

          <ul className="space-y-3">
            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-[#696A65] bg-[#474845] px-3 py-2 transition hover:border-pink-500">
              <Instagram className="text-pink-500" />
              <a href="https://instagram.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Instagram
              </a>
            </li>

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-[#696A65] bg-[#474845] px-3 py-2 transition hover:border-blue-600">
              <Facebook className="text-blue-600" />
              <a href="https://facebook.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Facebook
              </a>
            </li>

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-[#696A65] bg-[#474845] px-3 py-2 transition hover:border-sky-400">
              <Twitter className="text-sky-400" />
              <a href="https://twitter.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Twitter
              </a>
            </li>

            {/* YouTube */}
            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-[#696A65] bg-[#474845] px-3 py-2 transition hover:border-red-600">
              <Youtube className="text-red-600" />
              <a
                href="https://youtube.com/seucanal" // substitua pelo link do seu canal
                target="_blank"
                className="pr-1 text-zinc-100"
                rel="noopener"
              >
                YouTube
              </a>
            </li>

          </ul>

          {/* Botão para abrir o WhatsApp */}
          <div className="pt-2">
            <a
              href="https://wa.me/932101903" // substitua pelo seu número
              target="_blank"
              rel="noopener"
              className="block w-full rounded-xl bg-green-500 px-4 py-2 text-center font-semibold text-white shadow-md transition hover:bg-green-600"
            >
              Abrir WhatsApp
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import * as Dialog from '@radix-ui/react-dialog';
import { Instagram, Facebook, Twitter, X } from 'lucide-react';

export function SocialModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700">
        Redes Sociais
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-[90%] max-w-sm space-y-4 rounded-2xl bg-cyan-900 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-bold text-lg text-zinc-100">Siga-nos</Dialog.Title>
            <Dialog.Close className="cursor-pointer text-zinc-100 transition hover:text-red-500">
              <X className="h-5 w-5"/>
            </Dialog.Close>
          </div>

          <ul className="space-y-3">

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-cyan-950 bg-cyan-800 px-3 py-2 transition hover:border-pink-500">
              <Instagram className="text-pink-500" />
              <a href="https://instagram.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Instagram
              </a>
            </li>

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-cyan-950 bg-cyan-800 px-3 py-2 transition hover:border-blue-600">
              <Facebook className="text-blue-600" />
              <a href="https://facebook.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Facebook
              </a>
            </li>

            <li className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border-2 border-cyan-950 bg-cyan-800 px-3 py-2 transition hover:border-sky-400">
              <Twitter className="text-sky-400" />
              <a href="https://twitter.com" target="_blank" className="pr-1 text-zinc-100" rel="noopener">
                Twitter
              </a>
            </li>

          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import * as Dialog from '@radix-ui/react-dialog';
import { X, CalendarDays } from 'lucide-react';
import { useState } from 'react';

export function AgendarModal() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    hora: '',
    servico: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.email || !formData.telefone || !formData.data || !formData.hora || !formData.servico) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Dados do agendamento:", formData);
    alert("Agendamento enviado com sucesso!");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="cursor-pointer flex items-center justify-between rounded-full bg-[#212121] w-40 px-6 py-4 text-white transition hover:bg-[#4E4E4E]">
        Agendar
        <CalendarDays className="text-[#8F8F8F]" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-[90%] max-w-sm space-y-4 rounded-2xl bg-[#2F2F2F] p-6 shadow-xl">
          
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-bold text-lg text-zinc-100">
              Agendamento
            </Dialog.Title>
            <Dialog.Close className="cursor-pointer text-zinc-100 transition hover:text-red-500">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              autoComplete='off'
              value={formData.nome}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-[#474845] border-2 text-[#8F8F8F] font-medium  border-[#696A65] focus:border-blue-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete='off'
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-[#474845] border-2 text-[#8F8F8F] font-medium border-[#696A65] focus:border-blue-500 outline-none"
              required
            />

            <input
              type="tel"
              name="telefone"
              placeholder="Telefone"
              autoComplete='off'
              value={formData.telefone}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-[#474845] text-[#8F8F8F] border-2 font-medium border-[#696A65] focus:border-blue-500 outline-none"
              required
            />

            <div className="flex gap-2">
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                className="w-1/2 rounded-lg px-3 py-2 bg-[#474845] text-white border border-[#696A65] focus:border-blue-500 outline-none"
                required
              />
              <input
                type="time"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="w-1/2 rounded-lg px-3 py-2 bg-[#474845] text-white border border-[#696A65] focus:border-blue-500 outline-none"
                required
              />
            </div>

            <select
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-[#474845] text-white border border-[#696A65] focus:border-blue-500 outline-none"
              required
            >
              <option value="">Selecione o serviço</option>
              <option value="consultoria">Consultoria</option>
              <option value="instalacao">Instalação</option>
              <option value="manutencao">Manutenção</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Confirmar Agendamento
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}


"use client";
import { Phone, Send, UserRound } from "lucide-react";
import React, { useState } from "react";

export default function FormularioContato() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      const result = await response.json();
      alert(result.message);
      setFormData({ nome: "", numero: "", mensagem: "" }); // Resetar formulário
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      alert("Erro ao enviar o formulário: " + errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl px-9">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Nome */}
        <label className="text-[#8F8F8F] font-medium ml-0.5">Nome:</label>
        <div className="flex items-center gap-2 bg-[#474845] border-2 text-[#8F8F8F] font-medium border-[#2F2F2F] rounded-xl px-3.5 focus-within:border-[#212121]">
          <UserRound className="text-[#8F8F8F] w-5.5 h-5.5" />
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            autoComplete="off"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full py-3 outline-none bg-transparent placeholder:text-[696A65]"
          />
        </div>

        {/* Número */}
        <label className="text-[#8F8F8F] font-medium ml-0.5">Número:</label>
        <div className="flex items-center bg-[#474845] gap-2 border-2 border-[#2F2F2F] rounded-xl px-3.5 text-[#8F8F8F] font-medium  focus-within:border-[#212121]">
          <Phone className="text-[#8F8F8F]" />
          <input
            type="tel"
            name="numero"
            placeholder="Digite seu número"
            autoComplete="off"
            value={formData.numero}
            onChange={handleChange}
            required
            className="w-full py-3 outline-none bg-transparent placeholder:text-[696A65]"
          />
        </div>

        {/* Mensagem */}
        <label className="text-[#8F8F8F] font-medium ml-0.5">Mensagem:</label>
        <div className="flex items-start bg-[#474845] gap-2 border-2 text-[#8F8F8F] font-medium border-[#2F2F2F] rounded-xl px-3.5 focus-within:border-[#212121]">
          <textarea
            name="mensagem"
            placeholder="Digite sua mensagem"
            autoComplete="off"
            value={formData.mensagem}
            onChange={handleChange}
            required
            className="w-full py-3 outline-none bg-transparent placeholder:text-[696A65] resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="py-4 cursor-pointer mt-3 flex justify-between px-7 font-medium items-center bg-[#212121] text-white rounded-xl hover:bg-[#4E4E4E] transition disabled:bg-cyan-400"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
          <Send />
        </button>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
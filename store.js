import create from 'zustand';

export const useStore = create((set) => ({
  alimentos: [],
  adicionarAlimento: (alimento) => set((state) => ({ alimentos: [...state.alimentos, alimento] })),
  removerAlimento: (index) => set((state) => ({ alimentos: state.alimentos.filter((_, i) => i !== index) })),
  incrementarContador: (index) => set((state) => {
    const alimentosAtualizados = [...state.alimentos];
    alimentosAtualizados[index].contador += 1;
    return { alimentos: alimentosAtualizados };
  }),
  decrementarContador: (index) => set((state) => {
    const alimentosAtualizados = [...state.alimentos];
    alimentosAtualizados[index].contador -= 1;
    return { alimentos: alimentosAtualizados };
  }),
}));

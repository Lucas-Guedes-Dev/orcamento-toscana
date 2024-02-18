import createStore from 'zustand';

interface LoginState {
  token: string;
  logado: boolean;
  saveToken: (token: string) => void;
  clearToken: () => void;
  saveLogado: (logado: boolean) => void;
  clearLogado: () => void;
}

export const useStore = createStore<LoginState>((set) => ({
  token: '',
  logado: false,
  saveToken: (token) => set({ token: token }),
  saveLogado: (logado: boolean) => set({ logado: logado }),
  clearToken: () => set({ token: '' }),
  clearLogado: () => set({ logado: false }),
}));

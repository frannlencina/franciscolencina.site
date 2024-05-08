import { create } from 'zustand';

export const useThemeModes = create((set) => {
  // Verifica la preferencia de tema del sistema del usuario
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Define el estado inicial basado en la preferencia del sistema
  const initialMode = systemTheme ? 'dark' : 'light';

  return {
    state: initialMode,
    setDarkTheme: () => set({ state: 'dark' }),
    setLightTheme: () => set({ state: 'light' }),
    setSystemTheme: () => {
      // Establece el tema según la preferencia del sistema
      const newMode = systemTheme ? 'dark' : 'light';
      set({ state: newMode });
    },
  };
});

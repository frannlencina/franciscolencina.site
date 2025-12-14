import { create } from 'zustand';

export const useThemeModes = create((set) => {
  // Verifica la preferencia de tema del sistema del usuario
  const getSystemTheme = () => {
    if (typeof window === 'undefined') return 'light';

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  return {
    state: getSystemTheme(),
    setDarkTheme: () => {

      localStorage.setItem('theme', 'dark'),
        document.documentElement.className = "dark"
      set({ state: 'dark' })

    },
    setLightTheme: () => {

      localStorage.setItem('theme', 'light')

      document.documentElement.className = ""
      set({ state: 'light' })
    },
    setSystemTheme: () => {
      // Establece el tema según la preferencia del sistema
      const newMode = systemTheme ? 'dark' : 'light';
      localStorage.setItem('theme', 'system')
      location.reload();
      set({ state: newMode });
    },
  };
});

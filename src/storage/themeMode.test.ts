import { describe, it, expect, beforeEach, vi } from "vitest";
import { useThemeModes } from "./themeModes";

const resetStore = () => {
  useThemeModes.setState({ state: "light" });
};

describe("useThemeModes store", () => {
  beforeEach(() => {
    resetStore();

    vi.stubGlobal("localStorage", {
      setItem: vi.fn(),
      getItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    });

    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({
      matches: true,
    }));

    vi.stubGlobal("document", {
      documentElement: {
        className: "",
      },
    });
  });

  it("el estado cambia a dark", () => {
    useThemeModes.getState().setDarkTheme();

    expect(useThemeModes.getState().state).toBe("dark");

    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "dark");
  });

  it("el estado cambia a light", () => {
    useThemeModes.getState().setLightTheme();

    expect(useThemeModes.getState().state).toBe("light");

    expect(localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });
});

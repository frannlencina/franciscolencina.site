import { useThemeModes } from "../storage/themeModes"

export default function ThemeMdsbtn() {

    const { setLightTheme, setDarkTheme, setSystemTheme} = useThemeModes();
    const btnStyle = 'opacity-50 hover:opacity-100'

    return (
        <div className="text-black dark:text-white text-xl p-3 flex gap-2">
            <button className={btnStyle} onClick={() => { setDarkTheme() } } aria-label="Modo Oscuro" > <i className="ri-moon-line"></i> </button>
            <button className={btnStyle} onClick={() => { setLightTheme() }} aria-label="Modo Claro" > <i className="ri-sun-line"></i> </button>
            <button className={btnStyle} onClick={() => { setSystemTheme() }} aria-label="Modo del Sistema" > <i className="ri-computer-line"></i> </button>
        </div>
    )
}
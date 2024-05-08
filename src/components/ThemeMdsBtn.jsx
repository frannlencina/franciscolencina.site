import { useThemeModes } from "../storage/themeModes"

export default function ThemeMdsbtn() {

    const { setLightTheme, setDarkTheme, setSystemTheme} = useThemeModes();
    const btnStyle = 'opacity-50 hover:opacity-100'
    return (
        <>
            <button className={btnStyle} onClick={() => { setDarkTheme() } }> <i class="ri-moon-line"></i> </button>
            <button className={btnStyle} onClick={() => { setLightTheme() }}> <i class="ri-sun-line"></i> </button>
            <button className={btnStyle} onClick={() => { setSystemTheme() }}> <i class="ri-computer-line"></i> </button>
        </>
    )
}
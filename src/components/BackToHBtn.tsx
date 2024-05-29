interface Props{
    text: string;
    website: string;
}

export const BackToHBtn = (props: Props) => {
    return (
        <a
        className="flex text-black dark:text-white gap-2 mt-4 px-3 py-1 rounded-xl font-regular border border-stone-400 dark:border-stone-200 text-lg bg-transparent opacity-50 hover:opacity-100 trainsition-all duration-200"
        href={props.website}
    >
        <i className="ri-arrow-left-s-line"></i> {props.text}</a>
    )
}
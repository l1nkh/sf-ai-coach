const Button = ({ className, innerClassName, href, onClick, children, px, white }) => {

    const classes = `button relative inline-flex items-center
        justify-center h-11 transition-colors
        rounded-xl bg-conic-gradient
        ${white ? "text-n-8" : "text-n-1 p-[.09rem]"}
        ${className || ""}`

    const innerClasses = `relative flex items-center justify-center w-full h-full
        overflow-hidden hover:text-color-1
        ${px || "px-7"}
        ${white ? "bg-white text-n-8 rounded-xl" : "bg-n-8 inset-0 text-n-1 rounded-xl"}
        ${innerClassName || ""}`


    const spanClasses = "relative z-10"

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <div className={innerClasses}>
                <span className={spanClasses}>
                    {children}
                </span>
            </div>
        </button>
    )
    const renderLink = () => (
        <a href={href} className={classes}>
            <div className={innerClasses}>
                <span className={spanClasses}>
                    {children}
                </span>
            </div>
        </a>
    )
    return href ? renderLink() : renderButton();
}

export default Button
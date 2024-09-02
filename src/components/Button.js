import className from "classnames";

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border mb-3', {
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-gray-900': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-yellow-900': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-xl': rounded,
        'bg-white': outline,
    });

    return <button {...rest} className={classes}>
        {children}
    </button>;
}

export default Button;
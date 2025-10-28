import React, { type ReactNode } from 'react'

interface ITitle {
    title: String | ReactNode,
    subtitle: String | ReactNode,
    align?: "center" | "left" | "right",
    mode?: "light" | "dark",
    orientation?: "top" | "bottom"
}

const Title = ({ title, subtitle, align = "left", mode = "light", orientation = "top" }: ITitle) => {
    return (
        <div className={`title__content--${align}--${orientation}`}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title;
import React, { useState, type ReactNode } from "react";

interface ITooltip {
  isOpen?: Boolean;
  children: ReactNode;
  type?: "" | "full";
  title?: String;
  description: String;
  orientation?: "top" | "top-left";
}

export default function Tooltip({
  isOpen,
  children,
  type,
  title,
  description,
  orientation,
}: ITooltip) {
  const [isOpenTooltip, setOpenTooltip] = useState<Boolean>(isOpen || false)
  const changeOpenTooltip = () => setOpenTooltip(true)
  const changeCloseTooltip = () => setOpenTooltip(false)

  return (
    <section className="tooltip" onMouseEnter={changeOpenTooltip} onMouseLeave={changeCloseTooltip}
    >
      {isOpen || isOpenTooltip ? (
        <>
          <div className="tooltip__content">
            <p>{title}</p>
            <p>{description}</p>
          </div>
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </section>
  )
}

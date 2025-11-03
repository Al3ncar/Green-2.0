import { type ReactNode } from "react";

interface ITitle {
  id?: string;
  title: String | ReactNode;
  subtitle: String | ReactNode;
  align?: "center" | "left" | "right";
  mode?: "light" | "dark";
  orientation?: "top" | "bottom";
}

const Title = ({
  id,
  title,
  subtitle,
  align = "left",
  orientation = "top",
}: ITitle) => {
  return (
    <div id={id} className={`title__content--${align}--${orientation}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Title;

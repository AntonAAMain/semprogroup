import cn from "classnames";

import cls from "./Button.module.scss";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Button = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(cls.container)}>
      Отправить
    </div>
  );
};

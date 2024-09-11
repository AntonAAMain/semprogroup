import cn from "classnames";

import cls from "./Button.module.scss";

export const Button = () => {
  return <div className={cn(cls.container)}>Отправить</div>;
};

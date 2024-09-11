import cn from "classnames";

import cls from "./MenuButton.module.scss";

export const MenuButton = () => {
  return (
    <div className={cn(cls.container)}>
      <div className={cls.btn}>
        <div className={cls.btnLine}></div>
        <div className={cls.btnLine}></div>
        <div className={cls.btnLine}></div>
      </div>
      <div className={cls.text}>МЕНЮ</div>
    </div>
  );
};

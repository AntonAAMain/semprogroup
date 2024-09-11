import cn from "classnames";

import cls from "./Description.module.scss";
import { ProjectVideo } from "./ProjectVideo/ProjectVideo";

export const Description = () => {
  return (
    <div className={cn(cls.container)}>
      <div className={cls.border}></div>

      <div className={cls.mainText}>
        <div className={cls.mainText_primary}>
          Уютное и безопасное пространство для счастливой,
        </div>

        <div className={cls.mainText_highlighted}>
          Спокойной и размеренной жизни
        </div>
      </div>

      <div className={cls.secondaryText}>
        <div className={cls.secondaryText_highlighted}>
          Квартиры от 65 до 356 м2 с чистовой отделкой,
        </div>
        <div className={cls.secondaryText_primary}>
          балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой
          территориИ.
        </div>
      </div>

      <ProjectVideo />
    </div>
  );
};

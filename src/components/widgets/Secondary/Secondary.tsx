import { Description } from "./Description/Description";
import { House } from "./House/House";
import cn from "classnames";

import cls from "./Secondary.module.scss";

export const Secondary = () => {
  return (
    <div className={cn(cls.container)}>
      <House />
      <Description />
    </div>
  );
};

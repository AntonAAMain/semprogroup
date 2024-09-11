import cn from "classnames";

import cls from "./House.module.scss";
import Image from "next/image";

export const House = () => {
  return (
    <div className={cn(cls.container)}>
      <div className={cls.info}>О проекте</div>

      <Image
        layout="fill"
        objectFit="contain"
        src={"/imgs/secondary/house.webp"}
        alt=""
      />

      <div className={cls.circle}>
        <div className={cls.img}>
          <Image
            layout="fill"
            objectFit="contain"
            src={"/imgs/secondary/secondary-circle.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

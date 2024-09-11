import cn from "classnames";

import cls from "./Main.module.scss";
import Image from "next/image";

export const Main = () => {
  return (
    <div className={cn(cls.container)}>
      <div className={cls.mainImg}>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/imgs/main/main.webp"}
          alt=""
        />
      </div>

      <div className={cls.mainMobileImg}>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/imgs/main/main-mobile.webp"}
          alt=""
        />
      </div>

      <div className={cls.text}>
        <div className={cls.description}>
          <div className={cls.descriptionParagraph}>Дом бизнес-класса</div>
          <div className={cls.descriptionParagraph}>Для ценителей роскоши</div>
        </div>

        <div className={cls.title}>Inchapin</div>
      </div>
    </div>
  );
};

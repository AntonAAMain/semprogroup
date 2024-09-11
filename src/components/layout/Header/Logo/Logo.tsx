import cn from "classnames";

import cls from "./Logo.module.scss";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className={cn(cls.container)}>
      <Image
        layout="fill"
        objectFit="contain"
        src={"/imgs/common/logo.svg"}
        alt=""
      />
    </div>
  );
};

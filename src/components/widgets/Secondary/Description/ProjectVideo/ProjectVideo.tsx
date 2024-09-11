import cn from "classnames";

import cls from "./ProjectVideo.module.scss";
import Image from "next/image";

export const ProjectVideo = () => {
  return (
    <div className={cn(cls.container)}>
      <div className={cls.description}>
        <div className={cls.descriptionTitle}>Видео о проекте</div>
        <div className={cls.descriptionTimer}>1:25 минут</div>
      </div>

      <div className={cls.border}></div>

      <div className={cls.videoPreview}>
        <div className={cls.videoPreviewCircle}></div>
        <div className={cls.videoPreviewPlay}>
          <Image
            layout="fill"
            objectFit="contain"
            src={"/imgs/secondary/play.svg"}
            alt=""
          />
        </div>
        <Image
          layout="fill"
          objectFit="contain"
          src={"/imgs/secondary/video-preview.webp"}
          alt=""
        />
      </div>
    </div>
  );
};

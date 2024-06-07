import Link from "next/link";
import classes from "./TitleCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export const TitleCard = (props: { mCategory: string }) => {
  const router = useRouter();

  const titleHandler = () => {
    router.push("/"+props.mCategory)
  }

  return (
    <div className={classes.card}>
      <div className={classes.card_image} onClick={titleHandler}>
        <Image
          src={"/images/main/" + props.mCategory + ".png"}
          alt={props.mCategory}
          width={300}
          height={300}
        />
      </div>
      <div className={classes.card_title}>
        {props.mCategory}
      </div>
    </div>
  );
};

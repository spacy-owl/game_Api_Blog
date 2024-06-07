import classes from "./Profile.module.css";
import Image from "next/image";

export const Profile = () => {
  return (
    <section className={classes.profile}>
      <div className={classes.image}>
        <Image
          src="/images/blog/노말뚤기.png"
          alt="뚤기"
          width={150}
          height={150}
        />
      </div>
      <p className={classes.emp}>뚤기코딩</p>
      <p style={{margin: '10px 0 0 0'}}>프로필</p>
    </section>
  );
}

import Link from "next/link";
import { Category } from "./Category";
import classes from './MainNavigation.module.css';
import { mainCategory } from "@/src/data/config.data";

export const MainNavigation = () => {

    return (
        <nav className={classes.category_section}>
          <Link href="/" className={classes.home_tag}>
            홈
          </Link>
          <ul className={classes.main_category}>
            {mainCategory.mCategorys.map((mCategory) => (
              <Category key={mCategory} mCategory={mCategory}/>
            ))}
          </ul>
        </nav>
      );
}
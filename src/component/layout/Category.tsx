import Link from 'next/link';
import classes from './Category.module.css';


export const Category = (props:{mCategory:string}) => {
  return (
    <Link href={"/"+props.mCategory}>
  <li className={classes.li}>{props.mCategory}<span>▶</span></li>
  </Link>
  );
};

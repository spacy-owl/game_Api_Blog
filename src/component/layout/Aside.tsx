import { Profile } from "./Profile";
import { MainNavigation } from "./MainNavigation";
import classes from './Aside.module.css';

export const Aside = () => {
    return(
        <aside className={classes.Asdie}>
            <div className= {classes.Aside_container}>
                <div className= {classes.Aside_Scroll}>
            <Profile/>
            <MainNavigation/>
                </div>
            </div>
        </aside>
    );
}
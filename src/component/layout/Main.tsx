import React from "react";
import classes from './Main.module.css';

export const Main = (props:{children : React.ReactNode}) => {
    return(
        <main className={classes.main}>{props.children}</main>
    );
}
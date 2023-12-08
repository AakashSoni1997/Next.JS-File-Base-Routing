import Link from "next/link";
import React from "react";
import classes from "../style/main-header.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>Next Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

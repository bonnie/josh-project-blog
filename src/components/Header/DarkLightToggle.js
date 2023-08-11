"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";

import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);
  const router = useRouter();

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    // Update the state variable.
    // This causes the Sun/Moon icon to flip.
    setTheme(nextTheme);

    // Write the cookie for future visits
    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    router.refresh();

    // Apply the new colors to the root HTML tag.
    // const COLORS = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    const root = document.documentElement;

    root.setAttribute("data-color-theme", nextTheme);

    // Object.entries(COLORS, ({ variable, value }) =>
    //   root.style.setProperty(variable, value)
    // );
  }

  return (
    <button className={styles.action} onClick={handleClick}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
    </button>
  );
}

export default DarkLightToggle;

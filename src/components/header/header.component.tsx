import { ReactElement } from "react";

import styles from "./header.module.css";
import MingcuteAlignJustifyLine from "@/icons/MingcuteAlignJustifyLine";

export default function HeaderComponent(): ReactElement {
  return (
    <div className={styles.header}>
      <MingcuteAlignJustifyLine className={styles.menuIcon} />
      <h2 className={styles.greeting}>سلام بیژن!</h2>
      <p className={styles.status}>امروز 4 کار قابل انجام داری!</p>
    </div>
  );
}
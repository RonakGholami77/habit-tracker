import { ReactElement } from "react";

import styles from "./day.module.css";
import MingcuteCheck2Fill from "@/icons/MingcuteCheck2Fill";
import MingcuteUpSmallFill from "@/icons/MingcuteUpSmallFill";

type Props = {
  date: Date;
  today?: boolean;
};

export default function DayComponent({ date, today }: Props): ReactElement {
  return (
    <div className={styles.day}>
      <div className={styles["status-indicator"]}>
        <MingcuteCheck2Fill />
      </div>
      <div className={styles["day-of-the-week"]}>
        {date.toLocaleDateString("fa-IR", { weekday: "long" })}
      </div>
      <div className={styles.date}>
        {date.toLocaleDateString("fa-IR", { day: "numeric" })}
      </div>
      {today && (
        <div className={styles["today-indicator"]}>
          <MingcuteUpSmallFill />
        </div>
      )}
    </div>
  );
}
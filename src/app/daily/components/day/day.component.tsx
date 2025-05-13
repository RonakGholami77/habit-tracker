import { ReactElement } from "react";

import styles from "./day.module.css";
import MingcuteCheck2Fill from "@/icons/MingcuteCheck2Fill";
import MingcuteUpSmallFill from "@/icons/MingcuteUpSmallFill";

import clsx from "clsx";

type Props = {
  date: Date;
  selected: Date | null;
  onClick?: (date: Date) => void;
};

export default function DayComponent({
  date,
  selected,
  onClick,
}: Props): ReactElement {
  const isSelected = selected?.toDateString() === date.toDateString();
  const today = new Date();
  const isToday = today.toDateString() === date.toDateString();

  return (
    <div
      className={clsx(styles.day, isToday && styles.highlight)}
      onClick={() => onClick?.(date)}
    >
      <div className={styles["status-indicator"]}>
        <MingcuteCheck2Fill />
      </div>
      <div className={styles["day-of-the-week"]}>
        {date.toLocaleDateString("fa-IR", { weekday: "long" })}
      </div>
      <div className={styles.date}>
        {date.toLocaleDateString("fa-IR", { day: "numeric" })}
      </div>
      {isSelected && (
        <div className={styles["today-indicator"]}>
          <MingcuteUpSmallFill />
        </div>
      )}
    </div>
  );
}
import { ReactElement } from "react";

import styles from "./daily-tracker.module.css";
import DayComponent from "@/app/daily/components/day/day.component";

export default function DailyTrackerComponent(): ReactElement {
  const today = new Date();

  const oneDayInMilliseconds = 24 * 3600 * 1000;

  return (
    <div className={styles["daily-tracker"]}>
      <DayComponent date={new Date(+today - 2 * oneDayInMilliseconds)} />
      <DayComponent date={new Date(+today - oneDayInMilliseconds)} />
      <DayComponent date={today} today />
      <DayComponent date={new Date(+today + oneDayInMilliseconds)} />
      <DayComponent date={new Date(+today + 2 * oneDayInMilliseconds)} />
    </div>
  );
}
"use client";

import { ReactElement, useState } from "react";

import styles from "./daily-tracker.module.css";
import DayComponent from "@/app/daily/components/day/day.component";

export default function DailyTrackerComponent(): ReactElement {
  const today = new Date();
  const oneDayInMilliseconds = 24 * 3600 * 1000;

  const firstDayOfWeek = new Date(today);

  console.log(firstDayOfWeek);
  console.log(today);

  const [selectedDay, setSelectedDay] = useState<Date | null>(today);

  function clickHandler(date: Date) {
    setSelectedDay(date);
  }

  return (
    <div className={styles["daily-tracker"]}>
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today - 3 * oneDayInMilliseconds)}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today - 2 * oneDayInMilliseconds)}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today - oneDayInMilliseconds)}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={today}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today + oneDayInMilliseconds)}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today + 2 * oneDayInMilliseconds)}
      />
      <DayComponent
        onClick={clickHandler}
        selected={selectedDay}
        date={new Date(+today + 3 * oneDayInMilliseconds)}
      />
    </div>
  );
}
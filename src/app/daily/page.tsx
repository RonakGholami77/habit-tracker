import styles from "./page.module.css";
import DailyTrackerComponent from "@/app/daily/components/daily-tracker/daily-tracker.component";

export default function Home() {
  return (
    <div className={styles.page}>
      <DailyTrackerComponent />
    </div>
  );
}
import { endOfWeek, isWithinInterval, startOfWeek } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ScheduleFooter } from "../reusables/ScheduleFooter";

function CurrentWeekRow(props: RowProps) {
  const isDateInCurrentWeek = (dateToCheck: Date) => {
    const today = new Date();
    const start = startOfWeek(today);
    const end = endOfWeek(today);
    return isWithinInterval(dateToCheck, { start, end });
  };

  const isNotCurrentWeek = props.dates.every(
    (date) => !isDateInCurrentWeek(date)
  );

  if (isNotCurrentWeek) return <></>;
  return <Row {...props} />;
}

export function Calendar() {
  return (
    <>
      <div>
        <DayPicker
          components={{ Row: CurrentWeekRow }}
          showOutsideDays
          mode="single"
          footer={<ScheduleFooter />}
          styles={{
            head_cell: {
              width: "60px",
            },
            table: {
              maxWidth: "none",
            },
            day: {
              margin: "auto",
            },
          }}
        />
      </div>
    </>
  );
}

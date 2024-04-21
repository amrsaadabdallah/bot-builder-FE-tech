import React from "react";
import { Calendar } from "./ui/calendar";

const MyCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border shadow'
    />
  );
};

export default MyCalendar;

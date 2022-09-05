import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

interface NewEvent {
  title: string;
  start?: Date | null | undefined;
  end?: Date | null | undefined;
}

interface Event {
  title: string;
  allDay: boolean;
  start?: Date;
  end?: Date;
}

interface Event1 {
  title: string;
  start?: Date;
  end?: Date;
  allDay?: undefined;
}

const BigCalendar = () => {
  const [newEvent, setNewEvent] = useState<NewEvent>({ title: "" });
  const [allEvents, setAllEvents] =
    useState<(NewEvent | Event | Event1)[]>(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="bg-base-100">
      <div className=" px-0 card bg-base-100 ">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">Calendar</h1>
        </div>
      </div>
      <div className="">
        <div className="lg:flex lg:justify-start mt-10 lg:mx-24">
          <div className="lg:mr-7 lg:mt-[3px]">
            <h1 className="text-sm font-semibold">Add New Event</h1>
            <input
              type="text"
              placeholder="Add Title"
              className="input input-primary  "
              // style={{ width: "20%", marginRight: "10px" }}

              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Add Start Date</label>
            <DatePicker
              placeholderText="Start Date"
              className=" select input-primary "
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
          </div>
          <div className="">
            <label className="text-sm font-semibold">Add End Date</label>
            <DatePicker
              placeholderText="End Date"
              className="select  input-primary "
              selected={newEvent.end}
              onChange={(end) => setNewEvent({ ...newEvent, end })}
            />
          </div>
          <button
            className=" text-white mt-6 btn  text-sm btn-primary"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </div>

        <Calendar
          className="lg:text-xl rounded-md  lg:font-bold"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          // className="m-[50px]"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </div>
  );
};

export default BigCalendar;

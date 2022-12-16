import { useState } from "react";
import Reminder from "../models/reminder";

interface NewReminderProp {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProp): JSX.Element {
  const [title, setTitle] = useState("");

  const submitform = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitform}>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={title}
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;

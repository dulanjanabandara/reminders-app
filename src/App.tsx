import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import "./App.css";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let reminders = await reminderService.getReminders();
  //       setReminders(reminders);
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    let reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const addReminder = async (title: string) => {
    let newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;

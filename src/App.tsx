import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import "./App.css";

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

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;

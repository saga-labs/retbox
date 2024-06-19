import { create } from 'zustand';
import { Task } from '../types/task';

const demo: Task = {
  title: 'First',
  desc: 'first task desc',
  date: new Date().toDateString(),
};

// Define the view state
interface State {
  tasks: Task[];
  inProgress: Task[];
  done: Task[];
  addTask: (task: Task) => void;
  moveTaskToInProgress: (index: number) => void;
  moveTaskToDone: (index: number) => void;
}

// Create the store
const useTaskList = create<State>((set) => ({
  tasks: [demo, demo],
  inProgress: [demo],
  done: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  moveTaskToInProgress: (index) =>
    set((state) => {
      const task = state.tasks[index];
      return {
        tasks: state.tasks.filter((_, i) => i !== index),
        inProgress: [...state.inProgress, task],
      };
    }),
  moveTaskToDone: (index) =>
    set((state) => {
      const task = state.inProgress[index];
      return {
        inProgress: state.inProgress.filter((_, i) => i !== index),
        done: [...state.done, task],
      };
    }),
}));

export default useTaskList;

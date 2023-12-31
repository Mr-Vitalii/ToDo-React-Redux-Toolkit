import { createSlice, nanoid } from "@reduxjs/toolkit";


const tasksInitialState = [];

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false,
                    },
                };
            },
        },
        deleteTask(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        },
        deleteAllCompleted(state) {
            return state.filter(task => !task.completed)
        }
    },
});


export const { addTask, deleteTask, toggleCompleted, deleteAllCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;



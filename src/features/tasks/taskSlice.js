import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
    compoleted: false
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
    compoleted: false
  },
  
]

export const taskSlice = createSlice({
  name: "tasks",
  // initialState: initialState, ↓
  initialState,
  reducers: {
    increment: (state) => {state.value += 1;},
    decrement: (state) => {state.value -= 1;},
    incrementByAmount: (state, action) => {state.value += action.payload;},

    addTask: (state, action) => { // CREATE
      // console.log(state, action);
      state.push(action.payload);
    },
    readTask: (state, action) => { // READ

    },
    updateTask: (state, action) => { // UPDATE
      const {id, title, description} = action.payload;
      const fromUpdate = state.find(el => el.id === id);
      if(fromUpdate) {
        fromUpdate.title = title;
        fromUpdate.description = description;
      }

    },
    deleteTask: (state, action) => { // DELETE
      // console.log("delete",action.payload);
      const fromDelete = state.find(el => el.id === action.payload);
      // console.log(fromDelete);
      if(fromDelete) { // si la taera fue encontrada
        state.splice(state.indexOf(fromDelete), 1); // con el metodo splite, en el arreglo, desde el indice del elemento a eliminar
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addTask, deleteTask, updateTask, readTask } = taskSlice.actions

export default taskSlice.reducer;

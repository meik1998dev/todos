import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

function getCurrentTime() {
   var today = new Date();
   var date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
   var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
   return date + ' ' + time;
}

const addTodoReducer = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      addTodos: (state, action) => {
         action.payload.createdAt = getCurrentTime();
         state.push(action.payload);
         return state;
      },

      removeTodos: (state, action) => {
         return state.filter((item) => item.id !== action.payload);
      },

      updateTodos: (state, action) => {
         return state.map((todo) => {
            if (todo.id === action.payload.id) {
               return {
                  ...todo,
                  item: action.payload.item,
               };
            }
            return todo;
         });
      },

      updateDiscription: (state, action) => {
         return state.map((todo) => {
            console.log(action.payload);
            if (todo.id === action.payload.id) {
               return {
                  ...todo,
                  description: action.payload.description,
               };
            }
            return todo;
         });
      },

      completeTodos: (state, action) => {
         return state.map((todo) => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  completed: true,
                  completedAt: getCurrentTime(),
               };
            }
            return todo;
         });
      },
   },
});

export const {
   addTodos,
   removeTodos,
   updateTodos,
   completeTodos,
   updateDiscription,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

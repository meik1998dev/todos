import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { addTodos } from '../../redux/reducer.js';
import TodoItem from '../TodoItem/TodoItem.jsx';

const AddTodos = (props) => {
   const [todo, setTodo] = useState('');

   const handleChange = (e) => {
      setTodo(e.target.value);
   };

   const add = () => {
      if (todo === '') {
         alert('Input is Empty');
      } else {
         props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
         });
         setTodo('');
      }
   };

   return (
      <div className='addTodos'>
         <TextField
            label='Your Todo'
            variant='outlined'
            onChange={(e) => handleChange(e)}
            value={todo}
         />

         <Button onClick={() => add()} variant='contained'>
            Add
         </Button>
         <br />

      
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      todos: state,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addTodo: (obj) => dispatch(addTodos(obj)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodos);

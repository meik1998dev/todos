import React from 'react';
import { connect } from 'react-redux';
import {
   addTodos,
   completeTodos,
   removeTodos,
   updateTodos,
   updateDiscription
} from '../../redux/reducer';
import TodoItem from '../TodoItem/TodoItem';

const TodosList = (props) => {
   return (
      <div className='displaytodos'>
         <ul>
            {/* for all items */}
            {props.todos.length > 0
               ? props.todos.map((item) => {
                    return (
                       <TodoItem
                          key={item.id}
                          item={item}
                          removeTodo={props.removeTodo}
                          updateTodo={props.updateTodo}
                          completeTodo={props.completeTodo}
                          updateDiscription= {props.updateDiscription}
                       />
                    );
                 })
               : null}
         </ul>
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
      removeTodo: (id) => dispatch(removeTodos(id)),
      updateTodo: (obj) => dispatch(updateTodos(obj)),
      completeTodo: (id) => dispatch(completeTodos(id)),
      updateDiscription: (obj) => dispatch(updateDiscription(obj))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

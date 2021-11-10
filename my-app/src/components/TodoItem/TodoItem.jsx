import React, { useRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const TodoItem = (props) => {
   const { item, updateTodo, removeTodo, completeTodo, updateDiscription } =
      props;
   const [open, setOpen] = React.useState(false);
   const inputRef = useRef(true);

   const update = (id, value, e) => {
      if (e.which === 13) {
         updateTodo({ id, item: value });
         inputRef.current.disabled = true;
      }
   };

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
   };

   return (
      <>
         {item && (
            <li key={item.id} className='card'>
               <textarea
                  ref={inputRef}
                  disabled={inputRef}
                  defaultValue={item.item}
                  value={item.item}
                  onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
               />
               <div className='btns'>
                  <button onClick={() => setOpen(true)}>edit</button>
                  {item.completed === false && (
                     <button
                        style={{ color: 'green' }}
                        onClick={() => completeTodo(item.id)}
                     >
                        check{' '}
                     </button>
                  )}
                  <button
                     style={{ color: 'red' }}
                     onClick={() => removeTodo(item.id)}
                  >
                     close
                  </button>
               </div>
               <Modal
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby='modal-modal-title'
                  aria-describedby='modal-modal-description'
               >
                  <Box sx={style}>
                     <div>
                        <span>Title</span>

                        <input
                           ref={inputRef}
                           defaultValue={item.item}
                           onKeyPress={(e) => {
                              const id = item.id;
                              updateTodo({ id, item: e.target.value });
                           }}
                        />
                     </div>

                     <span>Description</span>
                     <textarea
                        onKeyPress={(e) => {
                           const id = item.id;

                           updateDiscription({
                              id,
                              description: e.target.value,
                           });
                        }}
                        defaultValue={item.description && item.description}
                     ></textarea>
                     <div>
                        <span>Created At {item.createdAt}</span>
                     </div>
                     <div>
                        {item.completedAt && (
                           <span> completed at {item.completedAt}</span>
                        )}
                     </div>
                  </Box>
               </Modal>
            </li>
         )}
      </>
   );
};

export default TodoItem;

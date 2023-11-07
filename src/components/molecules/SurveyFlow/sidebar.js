import React from 'react';

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    // eslint-disable-next-line
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className='description'>You can drag these nodes to the pane on the right.</div>
      <div className='dndnode' onDragStart={event => onDragStart(event, 'question')} draggable>
        Question
      </div>
      <div className='dndnode' onDragStart={event => onDragStart(event, 'answer')} draggable>
        Answer
      </div>
    </aside>
  );
};

export default Sidebar;

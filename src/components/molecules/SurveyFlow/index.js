import React, { useState, useRef } from 'react';
// import * as _ from 'lodash';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Handle,
  MiniMap,
} from 'react-flow-renderer';
import { generateRandom } from 'helpers';
import Sidebar from './sidebar';
import './index.css';

const SurveyFlow = ({ elements, setElements }) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const isValidConnection = connection => {
    let { source, target } = connection;
    [source] = source.split('_');
    [target] = target.split('_');

    return source !== target;
  };

  const onConnect = params => setElements(els => addEdge(params, els));
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));

  const graphStyles = { width: '100%', height: '450px' };
  const onElementClick = (ev, el) => {
    // setSelectedNode(el);
  };
  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = event => {
    event.preventDefault();
    // eslint-disable-next-line
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = event => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: `${type}_${generateRandom()}`,
      type,
      position,
      data: { label },
    };

    setElements(es => es.concat(newNode));
  };

  const onNodeDragStop = (event, node) => {
    const changeElems = [...elements];
    changeElems[changeElems.findIndex(el => el.id === node.id)] = node;
    setElements(changeElems);
  };

  const changeName = (evt, nodeEl) => {
    setElements(els =>
      els.map(item =>
        item.id === nodeEl.id
          ? {
              ...item,
              data: {
                label: evt.target.value,
              },
            }
          : item
      )
    );
  };

  const Node = node => {
    const [toggleEdit, setToggleEdit] = useState(false);
    const {
      data: { label },
      type,
      selected,
    } = node;

    return (
      <>
        <Handle type='target' position='top' isValidConnection={isValidConnection} />
        {!toggleEdit ? (
          <div
            className={`${type} nodeLabel ${selected ? 'selected' : ''}`}
            onDoubleClick={() => setToggleEdit(true)}
          >
            {label || 'N/A'}
          </div>
        ) : (
          <input
            className='nedeInput'
            autoFocus
            value={label}
            onBlur={() => setToggleEdit(false)}
            onChange={e => changeName(e, node)}
          />
        )}
        <Handle type='source' position='bottom' isValidConnection={isValidConnection} />
      </>
    );
  };

  const nodeTypes = {
    answer: Node,
    question: Node,
  };

  return (
    <div className='dndflow'>
      <ReactFlowProvider>
        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
          <ReactFlow
            style={graphStyles}
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onElementClick={onElementClick}
            onNodeDragStop={onNodeDragStop}
            onLoad={onLoad}
            onDrop={onDrop}
            nodeTypes={nodeTypes}
            onDragOver={onDragOver}
          >
            <MiniMap
              nodeStrokeColor={n => {
                if (n.style?.background) return n.style.background;
                if (n.type === 'question') return 'blue';
                if (n.type === 'answer') return 'red';

                return '#eee';
              }}
              nodeColor={n => {
                if (n.style?.background) return n.style.background;
                return '#fff';
              }}
              nodeBorderRadius={4}
            />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default SurveyFlow;

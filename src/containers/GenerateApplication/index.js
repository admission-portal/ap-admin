import { PageHeader } from '../../components/'
import { Row, Col } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';

const finalSpaceCharacters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: '/images/gary.png'
    },
    {
        id: 'cato',
        name: 'Little Cato',
        thumb: '/images/cato.png'
    },
    {
        id: 'kvn',
        name: 'KVN',
        thumb: '/images/kvn.png'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: '/images/mooncake.png'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: '/images/quinn.png'
    }
]
const finalSpaceCharacters1 = [
    {
        id: 'gary',
        name: 'Tejas',
        thumb: '/images/gary.png'
    },
    {
        id: 'cato',
        name: 'Rajesh Cato',
        thumb: '/images/cato.png'
    },
    {
        id: 'kvn',
        name: 'Oh my god',
        thumb: '/images/kvn.png'
    },
    {
        id: 'mooncake',
        name: 'Hello Man',
        thumb: '/images/mooncake.png'
    },
    {
        id: 'quinn',
        name: 'Randommm',
        thumb: '/images/quinn.png'
    }
]
export default function GenerateApplication() {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);
    const [characters1, updateCharacters1] = useState(finalSpaceCharacters1);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters1(items);
    }
    return (
        <div className="Generate Application">
            <PageHeader title="Generate Application" />
            <Row>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Col lg={12} md={12} sm={24}>
                        <Droppable droppableId="random">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map(({ id, name, thumb }, index) => {
                                        return (
                                            <Draggable key={`ran${id}`} draggableId={`ran${id}`} index={101+index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div className="characters-thumb">
                                                            <img src={thumb} alt={`${name} Thumb`} />
                                                        </div>
                                                        <p>
                                                            {name}
                                                        </p>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </Col>
                    <Col lg={12} md={12} sm={24}>
                        <div className="GenerateApplication_SelectedOptions">
                            <Droppable droppableId="random">
                                {(provided) => (
                                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                        {characters1.map(({ id, name, thumb }, index) => {
                                            return (
                                                <Draggable key={id} draggableId={id} index={index}>
                                                    {(provided) => (
                                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <div className="characters-thumb">
                                                                <img src={thumb} alt={`${name} Thumb`} />
                                                            </div>
                                                            <p>
                                                                {name}
                                                            </p>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </div>
                    </Col>
                </DragDropContext>
            </Row>
            {/* <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {characters.map(({ id, name, thumb }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="characters-thumb">
                                                    <img src={thumb} alt={`${name} Thumb`} />
                                                </div>
                                                <p>
                                                    {name}
                                                </p>
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext> */}
        </div>
    )
}

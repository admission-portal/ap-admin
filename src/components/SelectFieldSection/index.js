import './style.css'
import { Row, Col, Tag, Typography } from 'antd'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react';

// This will be used By TAG component of antd
const colors = ['cyan', 'blue', 'geekblue', 'purple']

export default function SelectFieldSection({ Labels, title }) {
    // Fields/Label dragged from the pool will be stored in the SelectedFields array
    const [SelectedFields, setSelectedFields] = useState([])

    // Fields/Label in the pool will be stored in GivenFields
    const [GivenFields, setGivenFields] = useState(Labels)

    const handleOnDragEnd = (result) => {
        // if dropped outside the droppable area
        if (!result.destination) return;

        // if dragged and dropped areas are same.
        if (result.destination.droppableId === result.source.droppableId) return

        // item dragged from Selected's pool to the givenOption's pool
        if (result.destination.droppableId === 'Given_option_1') {
            setGivenFields([...GivenFields, SelectedFields[result.source.index]]);
            let arr = [...SelectedFields]
            arr.splice(result.source.index, 1)
            setSelectedFields(arr);
        }

        // item dragged from givenOption's pool to the selectedOption's pool
        if (result.destination.droppableId === 'selected_option_1') {
            // let arr = [...SelectedFields]
            // arr.splice(result.source.index, 0, GivenFields[result.source.index])
            // setSelectedFields(arr);
            setSelectedFields([...SelectedFields, GivenFields[result.source.index]]);
            let arr = [...GivenFields]
            arr.splice(result.source.index, 1)
            setGivenFields(arr);
        }
    }

    return (
        <Row>
            <Col span={24}>
                <Typography.Title level={5}>{`${title} : `}</Typography.Title>
            </Col>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Col span={12}>
                    <Droppable droppableId="Given_option_1">
                        {(provided) => (
                            <div className="GenerateApplication_Given_Options" {...provided.droppableProps} ref={provided.innerRef}>
                                {GivenFields.map((item, index) => {
                                    return (
                                        <Draggable key={item.title} draggableId={item.title} index={index}>
                                            {
                                                (provided) => (<Tag ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} color={colors[index % colors.length]} key={index}>{item.title}</Tag>)
                                            }
                                        </Draggable>
                                    )
                                }
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Col>

                <Col span={12}>
                    {console.log(SelectedFields)}

                    <Droppable droppableId="selected_option_1">
                        {(provided) => (
                            <div
                                className="GenerateApplication_Selected_Options"
                                {...provided.droppableProps} ref={provided.innerRef}>
                                {SelectedFields.map((item, index) => {
                                    return (
                                        <Draggable key={item.title} draggableId={item.title} index={index}>
                                            {
                                                (provided) => (<Tag ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} color={colors[index % colors.length]} key={index}>{item.title}</Tag>)
                                            }
                                        </Draggable>
                                    )
                                }
                                )}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </Col>
            </DragDropContext>
        </Row>
    )
}

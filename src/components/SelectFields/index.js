import { Row, Col, Tag, Typography, Button } from 'antd'
import SelectFieldSection from '../SelectFieldSection'
import './style.css'
import { useState } from 'react'

// are the given labels , add the labels in future , if required

const data = [
    {
        secTitle: "Personal Details",
        Labels: [
            { title: 'First Name', type: 'text', index: 1 },
            { title: 'Last Name', type: 'text', index: 2 },
            { title: 'Address', type: 'text', index: 3 },
            { title: 'Phone no.', type: 'number', index: 4 },
            { title: "Guardian's Name", type: 'text', index: 5 },
            { title: "Guardian's Phone Number", type: 'number', index: 6 },
            { title: "Gender", type: 'option', index: 7 },
            { title: "Blood Group", type: 'option', index: 8 },
            { title: "Country", type: 'option', index: 9 },
            { title: "Date Of Birth", type: 'date', index: 10 },
            { title: "Cast", type: 'text', index: 11 },
            { title: "Domicile State", type: 'text', index: 12 },
            { title: "Religion", type: 'text', index: 13 },

        ]
    },
    {
        secTitle: "Ed-Level Details",
        Labels: [
            { title: '10th or Equivalent', type: 'title', index: 1 },
            { title: '12th or Equivalent', type: 'title', index: 2 },
            { title: 'Last Semester', type: 'title', index: 3 },
            { title: 'Under Graduate', type: 'title', index: 4 },
            { title: 'Post Graduate', type: 'title', index: 5 },

        ]
    },
    {
        secTitle: "Education/School Details",
        Labels: [
            { title: 'School/College Name', type: 'text', index: 1 },
            { title: 'Board/University', type: 'option/text', index: 2 },
            { title: 'Seat Number/ID', type: 'text', index: 3 },
            { title: 'Marks Obtained', type: 'number', index: 4 },
            { title: 'Marks Out Of', type: 'number', index: 5 },
            { title: 'Percentage', type: 'number', index: 6 },
            { title: 'Result Status', type: 'option', index: 7 },
            { title: "Institute's Address", type: 'text', index: 8 },

        ]
    },
    {
        secTitle: "Entrance Exam",
        Labels: [
            { title: 'Name', type: 'text', index: 1 },
            { title: 'Date Of Appearance', type: 'date', index: 2 },
            { title: 'Registration Number', type: 'text', index: 3 },
            { title: 'Marks/Rank', type: 'number', index: 4 },
            { title: 'Status', type: 'option', index: 5 },
        ]
    },
    {
        secTitle: "Document Uploads",
        Labels: [
            { title: 'Passport Size Photo', type: 'image', index: 1 },
            { title: 'AADHAR CARD', type: 'image', index: 2 },
            { title: 'LC/TC', type: 'pdf', index: 3 },
            { title: 'Marksheet/Result', type: 'pdf', index: 4 },
            { title: 'Domicile Certificate', type: 'pdf', index: 5 },
            { title: 'ADDRESS PROOF', type: 'pdf', index: 5 },

        ]
    },
    {
        secTitle: "Payment Modes",
        Labels: [
            { title: 'Net Banking', type: 'process', index: 1 },
            { title: 'Credit/Debit Card', type: 'process', index: 2 },
            { title: 'UPI', type: 'process', index: 3 },
            { title: 'Offline', type: 'process', index: 4 },

        ]
    },
]

export default function SelectFields({ GlobalLabels, setGlobalLabels }) {
    const [AutoSelected, setAutoSelected] = useState(false)
    return (
        <>
            <Row style={{ marginTop: '1.1em' }}>
                <Col span={24}>
                    <Button onClick={() => setAutoSelected(!AutoSelected)}>{!AutoSelected ? 'AUTO SELECT FIELDS' : 'CUSTOM SELECT FIELDS'}</Button>{!AutoSelected ? ' OR' : ' '}
                </Col>
                <Col span={24}>
                    <Typography.Text italic>{!AutoSelected ? 'Drag Drop the fields you want to have in your form' : ' '}</Typography.Text>
                </Col>

            </Row>
            {!AutoSelected && <Row >
                <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography.Text strong>
                        FROM
                    </Typography.Text>
                </Col>
                <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography.Text strong>
                        TO
                    </Typography.Text>
                </Col>
            </Row>}
            {
                AutoSelected !== true && data.map((item) => {
                    return (
                        <SelectFieldSection Labels={item.Labels} title={item.secTitle} GlobalLabels={GlobalLabels} setGlobalLabels={setGlobalLabels} />
                    )
                })
            }

        </>
    )
}

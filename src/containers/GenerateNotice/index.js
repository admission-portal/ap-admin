import { useState } from 'react'
import TextArea from 'rc-textarea'
import { PageHeader } from '../../components'
import { Checkbox } from 'antd'
import './style.css'

const NoticeInitialSate = {
    title: '',
    description: '',
    forAnySpecificStreamOrBranch: false,
    anyDueAttach: false,
    ApplicationSpecific: false,
    anyFileAttached: false,
    DueDate: '',
    ApplicationNumber: '',
    branch: '',
    stream: ''
}

export default function GenerateNotice() {
    const [NoticeData, setNoticeData] = useState(NoticeInitialSate)
    const onSubmit = (e) => {
        e.preventDefault()

        // TODO : API CALL HERE
        console.log(NoticeData)
    }
    return (
        <div className="GenerateNotice">
            <PageHeader title="Generate Notice" />
            <form autoComplete="off" onSubmit={onSubmit} id="NoticeForm">
                <input
                    type="text" id="title" name="title" placeholder="Enter Title"
                    value={NoticeData.title}
                    onChange={(e) => { setNoticeData({ ...NoticeData, title: e.target.value }) }} required />

                <div style={{ marginTop: '0.7em' }}>
                    <TextArea id="description" name="description"
                        placeholder="Enter Description Here"
                        value={NoticeData.description}
                        onChange={(e) => { setNoticeData({ ...NoticeData, description: e.target.value }) }} required />
                </div>

                <Checkbox
                    onChange={(e) => { setNoticeData({ ...NoticeData, forAnySpecificStreamOrBranch: e.target.checked }) }}>
                    For Any Specific Branch/Stream ?
                </Checkbox>

                <Checkbox
                    onChange={(e) => { setNoticeData({ ...NoticeData, ApplicationSpecific: e.target.checked }) }}>
                    For Any Specific Application ?
                </Checkbox>

                <Checkbox
                    onChange={(e) => { setNoticeData({ ...NoticeData, anyDueAttach: e.target.checked }) }}>
                    Any Due Attached ?
                </Checkbox>
                <Checkbox
                    onChange={(e) => { setNoticeData({ ...NoticeData, anyFileAttached: e.target.checked }) }}>
                    File Attached ?
                </Checkbox>
                <br />

                {
                    NoticeData.forAnySpecificStreamOrBranch &&
                    <>
                        <input type="text" id="Branch" name="Branch" placeholder="For Branch"
                            value={NoticeData.branch}
                            onChange={(e) => { setNoticeData({ ...NoticeData, branch: e.target.value }) }} required />

                        <input type="text" id="stream" name="stream" placeholder="For stream"
                            value={NoticeData.stream}
                            onChange={(e) => { setNoticeData({ ...NoticeData, stream: e.target.value }) }} required />
                    </>
                }



                {
                    NoticeData.ApplicationSpecific &&
                    <input type="number" placeholder="Application Number"
                        value={NoticeData.ApplicationNumber}
                        onChange={(e) => { setNoticeData({ ...NoticeData, ApplicationNumber: e.target.value }) }} required />

                }

                {
                    NoticeData.anyDueAttach &&
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.1em' }}>
                        <label htmlFor="DueDate">Due Date :</label><br />

                        <input id="DueDate" type="date" style={{ marginLeft: '0.5em' }}
                            value={NoticeData.DueDate}
                            onChange={(e) => { setNoticeData({ ...NoticeData, DueDate: e.target.value }) }} required />

                    </div>
                }

                {
                    NoticeData.anyFileAttached &&
                    <><br /><input type="file" id="attachedFile" name="attachedFile" /></>
                }
                <div className="Application_btn_container">
                    <input type="submit" value="Generate" />
                </div>
            </form>
        </div>
    )
}

import { CCalendar, PageHeader } from '../../../components/'
import React from 'react'

export default function Calendar() {
    return (
        <div className="Calendar">
            <PageHeader title="Calendar" />
            <br />
            <CCalendar />
        </div>
    )
}

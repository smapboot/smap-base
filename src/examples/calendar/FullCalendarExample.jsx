import React, {useEffect} from "react"
import SmapCalendar from "../../components/fullcalendar/SmapCalendar";
import {getOneLorem} from "../../mocks/MockLoremParagrafs";
import {dateLongFormatted, getTomorrow} from "../../helpers/Utils";

const FullCalendarExample = () => {
    // Logic here...
    const items = [
        {
            title: "Esdeveniment 1",
            date: new Date(),
            type: 'esdeveniment',
        },
        {
            title: "Esdeveniment 2",
            date: new Date(),
            type: 'esdeveniment',
        },
        {
            title: "Esdeveniment 3",
            date: new Date(),
            type: 'esdeveniment',
        },
        {
            title: "Cita 1",
            date: getTomorrow(),
            type: 'cita',
        },
        {
            title: "Cita 2",
            date: getTomorrow(),
            type: 'cita',
        },
        {
            title: "Cita 3",
            date: getTomorrow(),
            type: 'cita',
        },
    ]

    const getEvents = () => {
        let events = []
        items.map(item => {
            item['modal'] = {
                title: item.title,
                body: getOneLorem(),
                header: dateLongFormatted(new Date(item.date))
            }
            events.push(item)
        })
        return events
    }

    // Renderize
    return (
        <SmapCalendar
            events={getEvents()}
        />
    )
}

export default FullCalendarExample;
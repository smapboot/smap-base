import React, {useEffect, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import caLocale from '@fullcalendar/core/locales/ca';
import interactionPlugin from "@fullcalendar/interaction"
import "./calendar.css"
import "./grids.css"
import * as utils from "../../helpers/Utils"
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle
} from "@coreui/react";

const SmapCalendar = (props) => {

    // States
    const [weekendVisible, isWeekendVisible] = useState(false)
    const [modalInfoVisible, showModal] = useState(false)
    const [currentInfo, setCurrentInfo] = useState({})
    const [eventsList, setEventsList] = useState([])

    useEffect(() => {
        const initCalendar = (props) => {
            const {events, showWeekend} = props
            isWeekendVisible(showWeekend)
            setEventsList(events)
        }
        initCalendar(props)
    }, [])

    const handleDateClick = (arg) => {
        // alert(arg.dateStr)
        // @todo Alguna cosa podrem fer aquí
    }

    const handleEvent = (arg) => {
        const object = arg.event._def.extendedProps
        if (!utils.isEmpty(object.modal)) {
            setCurrentInfo(object.modal)
            showModal(true)
        }
    }

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b>{eventInfo.timeText}:&nbsp;</b>
                <i>{utils.subString(eventInfo.event.title, 0, 40)}...</i>
            </>
        )
    }

    return (
        <>
            <FullCalendar
                firstDay={1}
                locale={caLocale}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                weekends={weekendVisible}
                events={eventsList}
                eventContent={renderEventContent}
                dateClick={handleDateClick}
                eventClick={handleEvent}
                headerToolbar={{
                    start: 'title',
                    center: 'prevYear',
                    end: 'today prev,next'
                }}
            />
            <CModal
                size="xl"
                visible={modalInfoVisible}
                alignment="center"
                onClose={() => showModal(false)}
            >
                <CModalHeader>
                    <CModalTitle>
                        {currentInfo.title}<br/>
                        {currentInfo.header}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    {currentInfo.body}
                </CModalBody>
                <CModalFooter>
                    <CButton color="info" onClick={() => showModal(false)}>OK</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default SmapCalendar

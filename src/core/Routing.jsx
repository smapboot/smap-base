import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Spinner} from "react-bootstrap";
import { MockListFake } from "../mocks/MockListFake";
import { MockLoremParagrafs } from "../mocks/MockLoremParagrafs";
import {ListOfExamples} from "../examples/ListOfExamples";

// Exemples
const Examples = React.lazy(() => import("../examples/Examples"))
const DataTableExample = React.lazy(() => import("../examples/datatable/DataTableExample"))
const FullCalendarExample = React.lazy(() => import("../examples/calendar/FullCalendarExample"))
const CkeditorExample = React.lazy(() => import("../examples/ckeditor/CkeditorExample"))

// Layout WebApp
const WebHeader = React.lazy(() => import("../components/layout/header/WebHeader"))
const WebContent = React.lazy(() => import("../components/layout/content/WebContent"))
const WebFooter = React.lazy(() => import("../components/layout/footer/WebFooter"))

// Continguts dinàmics
const Home = React.lazy(() => import("../pages/Home"))
const UserController = React.lazy(() => import("../bundles/user/UserController"))

const WebApp = (props) => {
  const {
    element,
    columns,
    singlePage,
    content_sidebar_left,
    content_sidebar_right
  } = props

  return (<>
    <WebHeader />
    <WebContent
      element={element}
      columns={columns}
      singlePage={singlePage}
      content_sidebar_left={content_sidebar_left}
      content_sidebar_right={content_sidebar_right}
    />
    <WebFooter />
  </>)
}


const Routing = () => {
  const loading = (
    <div className="pt-3 text-center align-middle">
      <Spinner size="sm" style={{width: '3rem', height: '3rem'}}/>
    </div>
  )

  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<WebApp element={<Home />} />}/>
          <Route path="/home/single-page" element={<WebApp element={<Home />} singlePage={true} />}/>
          <Route path="/home/two-columns" element={
            <WebApp
              element={<Home />}
              columns={2}
              content_sidebar_left={MockListFake}
            />}
          />
          <Route path="/home/three-columns" element={
            <WebApp
              element={<Home />}
              columns={3}
              content_sidebar_left={MockListFake}
              content_sidebar_right={MockLoremParagrafs}
            />}
          />
          <Route path="/user/*" name="User" element={<UserController/>}/>

          {/*Examples*/}
          <Route exact path="/examples" element={
            <WebApp
                element={<Examples />}
                columns={3}
                content_sidebar_left={ListOfExamples}
            />}
          />
          <Route path="/examples/datatable" element={
            <WebApp
                element={<DataTableExample />}
                columns={2}
                content_sidebar_left={ListOfExamples}
            />}
          />
          <Route path="/examples/fullcalendar" element={
            <WebApp
                element={<FullCalendarExample />}
                columns={2}
                content_sidebar_left={ListOfExamples}
            />}
          />
          <Route path="/examples/ckeditor" element={
            <WebApp
                element={<CkeditorExample />}
                columns={2}
                content_sidebar_left={ListOfExamples}
            />}
          />
        </Routes>
      </Suspense>
    </>
  )
}

export default Routing
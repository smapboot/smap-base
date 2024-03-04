import React from 'react'
import "./WebFooter.css"
import {CCol, CContainer, CFooter, CRow} from "@coreui/react";
import IconsHelper from "../../../helpers/IconsHelper";

const externLinks = [
  {
    label: "CKEditor5 Online Builder",
    href: "https://ckeditor.com/ckeditor-5/online-builder/"
  }
]

const WebFooter = () => {
  return (
    <CFooter className={"smapFooter"}>
      <CContainer>
        <CRow lg = { {cols : 4, gutter: 6 } }>
          <CCol>
            <p>&nbsp;</p>
          </CCol>
          <CCol>
            <h6>Enllaços ràpids {IconsHelper.iconTargetBlank()}</h6>
            <ul>
              {
                externLinks.map((link, i) => {
                  return (
                      <li key={i}>
                        <a href={link.href} target={"_blank"}>
                          {link.label}
                        </a>
                      </li>
                  )
                })
              }
            </ul>
          </CCol>
          <CCol>
            <h6>Wiki</h6>
          </CCol>
          <CCol>
            <p>&nbsp;</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol style={{textAlign: "center"}}>
            <div className={"mt_20 mb_6"}>
              <span className="ms-1">&copy; 2023 smapbcn&trade;</span>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default WebFooter
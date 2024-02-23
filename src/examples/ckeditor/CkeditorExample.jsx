import React from "react"
import SmapEditor from "../../components/editor/SmapEditor";
import {CRow} from "@coreui/react";
import {ToolbarBasic, ToolbarFull, ToolbarMedium} from "../../components/editor/ToolbarsEditor";

const CkeditorExample = () => {

    const str = "Text inicial";

    const exempleBasic = (
        <SmapEditor
            textInicial={str + " d'editor basic"}
            mode={ToolbarBasic}
        />
    )

    const exempleMedium = (
        <SmapEditor
            textInicial={str + " d'editor medium"}
            mode={ToolbarMedium}
            idioma={"en"}
        />
    )

    const exempleFull = (
        <SmapEditor
            textInicial={str + " d'editor full"}
            mode={ToolbarFull}
            idioma={"es"}
        />
    )

    // Renderitzat
    return (
        <>
            <CRow className={"mb_30"}>
                <h2>Ús del component CKEditor configuració: <b><i>basic</i></b></h2>
                {exempleBasic}
            </CRow>

            <CRow className={"mb_30"}>
                <h2>Ús del component CKEditor configuració: <b><i>medium</i></b></h2>
                {exempleMedium}
            </CRow>

            <CRow className={"mb_30"}>
                <h2>Ús del component CKEditor configuració: <b><i>full</i></b></h2>
                {exempleFull}
            </CRow>
        </>
    )
}

export default CkeditorExample;
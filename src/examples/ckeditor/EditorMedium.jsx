import React from "react"
import SmapEditor from "../../components/editor/SmapEditor";

const EditorMedium = (props) => {
    return (
        <>
            <SmapEditor
                textInicial={"Hola, sóc l'editor amb configuració: medium"}
                mode={"medium"}
                idioma={"es"}
            />
        </>
    )
}

export default EditorMedium;
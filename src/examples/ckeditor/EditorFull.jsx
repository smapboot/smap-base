import React from "react"
import SmapEditor from "../../components/editor/SmapEditor";

const EditorFull = (props) => {
    return (
        <>
            <SmapEditor
                textInicial={"Hola, sóc l'editor amb configuració: full"}
                mode={"full"}
                idioma={"es"}
            />
        </>
    )
}

export default EditorFull;
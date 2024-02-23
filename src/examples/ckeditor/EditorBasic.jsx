import React from "react"
import SmapEditor from "../../components/editor/SmapEditor";

const EditorBasic = (props) => {
    return (
        <>
            <SmapEditor
                textInicial={"Hola, sóc l'editor amb configuració: basic"}
                mode={"basic"}
                idioma={"es"}
            />
        </>
    )
}

export default EditorBasic;
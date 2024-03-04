import React, {useState} from "react"
import "./smapeditor.css"
import {CKEditor} from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom/build/ckeditor";
import * as utils from "../../helpers/Utils";
import * as toolbars from "./ToolbarsEditor";
import _ from "lodash";

const SmapEditor = (props) => {

    // Inicialització
    const {
        idioma,
        debug,
        mode,
        readOnly,
        textInicial,
    } = props;
    utils.developmentLog("SmapEditor init > props ", props)

    const idiomes = ["ca", "es"];
    const config = ( mode ) ? mode : toolbars.ToolbarDefault
    config["language"] = ( idioma && idiomes.includes(idioma) ) ? idioma : "ca"

    const classContainer = (readOnly)
        ? 'smapEditorReadonly'
        : 'smapEditorCustomized'

    // Estats inicials
    const [contingut, setContingut] = useState({content : !_.isEmpty(textInicial) ? textInicial : "<p>El teu contingut aquí</p>"});

    // Lògica
    const handlerContentEditor  = data => {
        if ( debug ) {
            utils.developmentLog("SmapEditor handlerContentEditor > content ", data)
        }
        let content = data.getData()
        let nouContingut = {...contingut}
        nouContingut["content"] = content
        setContingut(nouContingut)
    }

    // Renderitzat
    utils.developmentLog("SmapEditor before render > config ", config)
    return (
        <div className={classContainer}>
            <CKEditor
                editor = { Editor }
                config = { config }
                data={ contingut.content}
                onChange = { ( event, editor ) => {
                    handlerContentEditor( editor );
                }}
            />
        </div>
    )
}

export default SmapEditor;
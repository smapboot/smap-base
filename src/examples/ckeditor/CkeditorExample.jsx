import React, {useState} from "react"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Classiceditor from '@ckeditor/ckeditor5-build-classic';


const CkeditorExample = () => {
    // Logic here...
    const [exemple, setExemple] = useState({content : "<p>Exemple d'inicialització del component Ckeditor</p>"})

    const onCashange  = data => {
        console.log( "Called" );
        let content = data.getData()
        console.log( "onCashange > data", content);
        let newExemple = {...exemple}
        newExemple["content"] = content
        setExemple(newExemple)
    }


    // Renderize
    return (
        <>
            <h2>Using the CKEditor&nbsp;5 context feature in React</h2>
            <CKEditor
                editor = { Classiceditor }
                name={"summary"}
                data={ exemple.content}
                onChange = { ( event, editor ) => {
                    onCashange( editor );
                }}
            />
        </>
    )
}

export default CkeditorExample;
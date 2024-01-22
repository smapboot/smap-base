import React, {useState} from "react"
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Context } from '@ckeditor/ckeditor5-core';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';


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
            <CKEditorContext context={ Context }>
                <h2>Using the CKEditor&nbsp;5 context feature in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    config={ {
                        plugins: [ Paragraph, Bold, Italic, Essentials ],
                        toolbar: [ 'bold', 'italic' ]
                    } }
                    data={exemple.content}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor1 is ready to use!', editor );
                    } }
                />

                <CKEditor
                    editor={ ClassicEditor }
                    config={ {
                        plugins: [ Paragraph, Bold, Italic, Essentials ],
                        toolbar: [ 'bold', 'italic' ]
                    } }
                    data={exemple.content}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor2 is ready to use!', editor );
                    } }
                />
            </CKEditorContext>
        </>
    )
}

export default CkeditorExample;
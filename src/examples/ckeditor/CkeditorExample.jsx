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
    const EditorConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'style',
                '|',
                'textPartLanguage',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                'todoList',
                'horizontalLine',
                'removeFormat',
                '|',
                'outdent',
                'indent',
                'alignment',
                '|',
                'pageBreak',
                'selectAll',
                'showBlocks',
                'specialCharacters',
                'undo',
                'redo',
                '|',
                'imageInsert',
                'imageUpload',
                'mediaEmbed',
                'insertTable',
                '|',
                'superscript',
                'subscript',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'restrictedEditingException',
                '|',
                'fontSize',
                'fontFamily',
                'fontColor',
                'fontBackgroundColor',
                'blockQuote',
                '|',
                'findAndReplace',
                'highlight',
                '|',
                'htmlEmbed',
                'code',
                'codeBlock',
                'sourceEditing',
                '|'
            ]
        },
        language: 'ca',
        image: {
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        }
    };

    // Renderize
    return (
        <>
            <h2>Using CKEditor&nbsp;5 build in React</h2>
            <CKEditor
                editor = { Classiceditor }
                data = { exemple.content }
                onChange = { ( event, editor ) => {
                    onCashange( editor );
                }}
                config={EditorConfig}
            />

            <div className='editor'>
                {exemple.content}
            </div>
        </>
    )
}

export default CkeditorExample;
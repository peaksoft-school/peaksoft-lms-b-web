import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import UnderLine from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import { TextEditorMenuBar } from './TextEditorMenuBar'
import { ConditionalRender } from '../../UI/ConditionalRender'

export const TextEditor = ({ isHasEditor }) => {
   const editor = useEditor({
      extensions: [StarterKit, UnderLine, Code],
      content: !isHasEditor ? '<code>CODE</code>' : '<p>Имя</p>',
      onUpdate: ({ editor }) => {
         console.log(editor.getHTML())
      },
   })

   return (
      <div>
         <ConditionalRender isActive>
            <TextEditorMenuBar editor={editor} />
         </ConditionalRender>
         <EditorContent editor={editor} />
      </div>
   )
}

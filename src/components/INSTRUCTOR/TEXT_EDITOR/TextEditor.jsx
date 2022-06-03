import React, { useState } from 'react'
import styled from 'styled-components'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import UnderLine from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import { TextEditorMenuBar } from './TextEditorMenuBar'
import { ConditionalRender } from '../../UI/ConditionalRender'
import { ReactComponent as CodeEditor } from '../../../assets/icons/CodeEditor.svg'
import { ReactComponent as Text } from '../../../assets/icons/Text.svg'

export const TextEditor = ({ isHasEditor, setEditContent, id }) => {
   const editor = useEditor({
      extensions: [StarterKit, UnderLine, Code],
      content: !isHasEditor ? '<code>Code</code>' : '<p>Имя</p>',
      onUpdate: ({ editor }) => {
         setEditContent({
            editContent: editor.getHTML(),
            id,
         })
      },
   })

   return (
      <StyledTextEditor>
         <ConditionalRender isActive={isHasEditor}>
            <TextEditorMenuBar editor={editor} />
         </ConditionalRender>
         <Flexer>
            {isHasEditor ? <Text /> : <CodeEditor />}
            <EditorContent editor={editor} />
         </Flexer>
      </StyledTextEditor>
   )
}

const Flexer = styled.div`
   display: grid;
   grid-template-columns: 0.07fr 3fr;
   align-items: center;
`

const StyledTextEditor = styled.div`
   margin-bottom: 29px;
`

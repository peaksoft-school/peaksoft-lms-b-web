/* eslint-disable react/button-has-type */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeadersText } from '../../../assets/icons/HeadersText.svg'
import { ReactComponent as NumList } from '../../../assets/icons/NumList.svg'
import { ReactComponent as PointList } from '../../../assets/icons/PointList.svg'
import { ReactComponent as ItalText } from '../../../assets/icons/ItalText.svg'
import { ReactComponent as UnderLineText } from '../../../assets/icons/UnderLineText.svg'
import { ReactComponent as BoldText } from '../../../assets/icons/BoldText.svg'

export const TextEditorMenuBar = ({ editor }) => {
   if (!editor) {
      return null
   }

   return (
      <WrapperButtons>
         <EditorButtons
            onClick={() =>
               editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={editor.isActive('heading', { level: 1 })}
         >
            <HeadersText />
         </EditorButtons>
         <EditorButtons
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive('italic')}
         >
            <ItalText />
         </EditorButtons>
         <EditorButtons
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive('underline')}
         >
            <UnderLineText />
         </EditorButtons>
         <EditorButtons
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActivisActive}
         >
            <BoldText />
         </EditorButtons>

         <EditorButtons
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive('bulletList')}
         >
            <PointList />
         </EditorButtons>
         <EditorButtons
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive('orderedList')}
         >
            <NumList />
         </EditorButtons>
      </WrapperButtons>
   )
}

const EditorButtons = styled.button`
   background-color: ${({ isActive }) =>
      isActive ? '#D4D4D4' : 'transparent'};
   opacity: 0.7;
   border-radius: 6px;
   margin-left: 15px;
   outline: none;
   border: none;
`

const WrapperButtons = styled.div`
   display: flex;
   margin-bottom: 15px;
`

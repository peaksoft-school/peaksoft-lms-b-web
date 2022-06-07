import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { baseFetch } from '../api/baseFetch'

const initState = {
   testName: '',
   questionRequestList: [
      {
         question: 'string',
         questionType: 'SINGLE',
         id: Math.random().toString(),
         variants: [
            {
               option: 'string',
               choiceAnswer: true,
               id: Math.random().toString(),
            },
         ],
      },
      {
         question: 'string',
         questionType: 'SINGLE',
         id: Math.random().toString(),
         variants: [
            {
               option: 'string',
               choiceAnswer: true,
               id: Math.random().toString(),
            },
            {
               option: 'string',
               choiceAnswer: true,
               id: Math.random().toString(),
            },
            {
               option: 'string',
               choiceAnswer: true,
               id: Math.random().toString(),
            },
         ],
      },
      {
         question: 'string',
         questionType: 'SINGLE',
         id: Math.random().toString(),
         variants: [
            {
               option: 'string',
               choiceAnswer: true,
               id: Math.random().toString(),
            },
         ],
      },
   ],
}

export const testCreaterSlice = createSlice({
   name: 'testCreaterSlice',
   initialState: initState,
   reducers: {
      changeTestName: (state, actions) => {
         const value = actions.payload
         state.testName = value
      },
      changeQuestionValue: (state, actions) => {
         const { questionId, value } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         currentQuestion.question = value
      },
      changeQuestionType: (state, actions) => {
         const { questionId, type } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         currentQuestion.questionType = type
      },
   },
   extraReducers: {},
})

export const testCreaterActions = testCreaterSlice.actions

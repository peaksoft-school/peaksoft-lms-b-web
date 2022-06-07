import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { toast } from 'react-toastify'
import { baseFetch } from '../api/baseFetch'

const initState = {
   testName: '',
   questionRequestList: [
      {
         question: '',
         questionType: 'SINGLE',
         id: uniqid(),
         variants: [
            {
               option: '',
               choiceAnswer: false,
               id: uniqid(),
            },
         ],
      },
   ],
}

export const testCreaterSlice = createSlice({
   name: 'testCreaterSlice',
   initialState: initState,
   reducers: {
      addNewQuestion: (state, actions) => {
         state.questionRequestList.push({
            question: '',
            questionType: 'SINGLE',
            id: uniqid(),
            variants: [
               {
                  option: '',
                  choiceAnswer: false,
                  id: uniqid(),
               },
            ],
         })
      },
      addNewVariantToQuestion: (state, actions) => {
         const questionId = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         currentQuestion.variants.push({
            option: '',
            choiceAnswer: false,
            id: uniqid(),
         })
      },
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
      changeOptionValue: (state, actions) => {
         const { questionId, optionId, value } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         const currentVariant = currentQuestion.variants.find(
            (variant) => variant.id === optionId
         )
         currentVariant.option = value
      },
      toggleRadioButton: (state, actions) => {
         const { questionId, optionId } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         currentQuestion.variants = currentQuestion.variants.map((variant) => {
            if (variant.id === optionId) {
               return {
                  ...variant,
                  choiceAnswer: true,
               }
            }
            return {
               ...variant,
               choiceAnswer: false,
            }
         })
      },
      toggleCheckbox: (state, actions) => {
         const { questionId, optionId } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         const currentVariant = currentQuestion.variants.find(
            (variant) => variant.id === optionId
         )
         currentVariant.choiceAnswer = !currentVariant.choiceAnswer
      },
   },
   extraReducers: {},
})

export const testCreaterActions = testCreaterSlice.actions

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

export const saveTest = createAsyncThunk(
   'instructor/testSlice/saveTest',
   async (test, { rejectWithValue }) => {
      try {
         const response = await baseFetch({
            path: `api/tests`,
            method: 'POST',
            body: test,
         })
         return {
            ...response,
         }
      } catch (error) {
         return rejectWithValue(error.messages)
      }
   }
)

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
      cloneQuestion: (state, actions) => {
         const questionId = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         state.questionRequestList.push({
            ...currentQuestion,
            id: uniqid(),
         })
      },
      deleteQuestion: (state, actions) => {
         const questionId = actions.payload
         state.questionRequestList = state.questionRequestList.filter(
            (question) => question.id !== questionId
         )
      },
      deleteAnswer: (state, actions) => {
         const { questionId, optionId } = actions.payload
         const currentQuestion = state.questionRequestList.find(
            (question) => question.id === questionId
         )
         currentQuestion.variants = currentQuestion.variants.filter(
            (variant) => variant.id !== optionId
         )
      },
   },
   extraReducers: {
      [saveTest.fulfilled]: (state, actions) => {
         toast.success('Тест успешно сохранен')
      },
      [saveTest.rejected]: (state, actions) => {
         toast.error('Уупс что то пошло не так')
      },
   },
})

export const testCreaterActions = testCreaterSlice.actions

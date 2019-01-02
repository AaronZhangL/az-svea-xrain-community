import { combineReducers } from 'redux'
import {
  CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM,
  REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED,
  CHANGE_HLTYPE,CHANGE_HLCONTENT, CHANGE_MLTYPE, CHANGE_MLCONTENT
} from './actions'

const initialState = {
  form: {
    name: 'default name', // test data with default value
    age: '20', // test data with default value
    hltype: '',
    hlcontent: '',
    mltype: '',
    mlcontent: '',
  },
  characters: {
    isFetching: false,
    characterArray: [],
  },
}

const formReducer = (state = initialState.form, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_AGE:
      return {
        ...state,
        age: action.age,
      }
    case CHANGE_HLTYPE: //xRain
      return {
        ...state,
        hltype: action.hltype,
      }
    case CHANGE_HLCONTENT: //xRain
      return {
        ...state,
        hlcontent: action.hlcontent,
      }
    case CHANGE_MLTYPE: //xRain
      return {
        ...state,
        mltype: action.mltype,
      }
    case CHANGE_MLCONTENT: //xRain
      return {
        ...state,
        mlcontent: action.mlcontent,
      }
    case INITIALIZE_FORM:
      return initialState.form
    default:
      return state
  }
}

const charactersReducer = (state = initialState.characters, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characterArray: action.characterArray,
      }
    case RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: formReducer,
  characters: charactersReducer,
})

export default rootReducer

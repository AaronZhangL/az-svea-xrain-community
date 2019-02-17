export const CHANGE_NAME     = 'CHANGE_NAME'
export const CHANGE_AGE      = 'CHANGE_AGE'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'
export const REQUEST_DATA         = 'REQUEST_DATA'
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS'
export const RECEIVE_DATA_FAILED  = 'RECEIVE_DATA_FAILED'
//xRain
export const CHANGE_HLTYPE = 'CHANGE_HLTYPE' //Human Language type
export const CHANGE_HLCONTENT = 'CHANGE_HLCONTENT' //Human Language content
export const CHANGE_HLSUMMARY = 'CHANGE_HLSUMMARY' //Human Language summary
export const CHANGE_MLTYPE = 'CHANGE_MLTYPE' //Machine Language type
export const CHANGE_MLCONTENT = 'CHANGE_MLCONTENT' //Machine Language content

export const changeName = name => ({
  type: CHANGE_NAME,
  name,
})
export const changeAge = age => ({
  type: CHANGE_AGE,
  age,
})
export const initializeForm = () => ({
  type: INITIALIZE_FORM,
})
export const requestData = () => ({
  type: REQUEST_DATA,
})
export const receiveDataSuccess = characterArray => ({
  type: RECEIVE_DATA_SUCCESS,
  characterArray,
})
export const receiveDataFailed = () => ({
  type: RECEIVE_DATA_FAILED,
})

//xRain
export const changeHltype = hltype => ({
  type: CHANGE_HLTYPE,
  hltype,
})
export const changeHlcontent = hlcontent => ({
  type: CHANGE_HLCONTENT,
  hlcontent,
})
export const changeMltype = mltype => ({
  type: CHANGE_MLTYPE,
  mltype,
})
export const changeMlcontent = mlcontent => ({
  type: CHANGE_MLCONTENT,
  mlcontent,
})
export const changeHlsummary = hlsummary => ({
  type: CHANGE_HLSUMMARY,
  hlsummary,
})

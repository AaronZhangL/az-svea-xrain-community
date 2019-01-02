import React from 'react'
import axios from 'axios'
import {
  changeName, changeAge, initializeForm,
  requestData, receiveDataSuccess, receiveDataFailed,
  changeHltype
} from '../actions'
//xRain
import Select from 'react-select';

const AddForm = ({ store }) => {
  const { name, age, hltype } = store.getState().form

  const handleSubmit = e => {
    e.preventDefault()

    store.dispatch(requestData())
    axios.post('/api/characters', {
      name,
      age,
      hltype,
    })
    .then(response => {
      store.dispatch(initializeForm())
      const characterArray = response.data
      store.dispatch(receiveDataSuccess(characterArray))
    })
    .catch(err => {
      console.error(new Error(err))
      store.dispatch(receiveDataFailed())
    })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
        Human Language:
        <p>
        <select name="hltype">
        <option value="en-us" selected>English</option>
        <option value="ja-jp">日本語</option>
        <option value="zh-hans">简体中文</option>
        <option value="zh-hant" disabled>繁體中文</option>
        <option value="zh-cn" disabled>大陆简体</option>
        <option value="zh-tw" disabled>台灣正體</option>
        <option value="zh-hk" disabled>港澳繁體</option>
        <option value="zh-sg" disabled>马新简体</option>
        <option value="ko-kr" disabled>한국어</option>
        </select>
        </p>
        </label>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))} />
        </label>
        <label>
          年齢:
          <input value={age} onChange={e => store.dispatch(changeAge(e.target.value))} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddForm

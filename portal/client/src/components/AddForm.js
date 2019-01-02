import React from 'react'
import axios from 'axios'
import {
  changeName, changeAge, initializeForm,
  requestData, receiveDataSuccess, receiveDataFailed,
  changeHltype, changeHlcontent, changeMltype, changeMlcontent, changeHlsummary
} from '../actions'
//xRain
//import Select from 'react-select';

const AddForm = ({ store }) => {
  const { name, age, hltype, hlcontent, mltype, mlcontent, hlsummary } = store.getState().form
  //xRain Start

  //xRain end

  const handleSubmit = e => {
    e.preventDefault()
    store.dispatch(requestData())
    axios.post('/api/characters', {
      name,
      age,
      hltype,
      hlcontent,
      mltype,
      mlcontent,
      hlsummary,
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
    <div style={{width:'2100px', height:'500px'}}>
      <form onSubmit={e => handleSubmit(e)}>
        <div style={{float: 'left', margin: '0px 0px 0px 10px', backgroundColor:"#FFFF00"}}>
          <label>
          <p>Human Language:
          <select value={hltype} onChange={e => store.dispatch(changeHltype(e.target.value))} >
            <option value="hl-none">Please select a language</option>
            <option value="en-us">English</option>
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
          <p>
            <textarea value={hlcontent} onChange={e => store.dispatch(changeHlcontent(e.target.value))}
            cols="80" rows="20"/>
          </p>
          </label>
        </div>

        <div style={{float: 'left', margin: '0px 0px 0px 10px'}}>
          <label>
            <p>
            Summary Human Language:
            </p>
            <p>
              <textarea value={hlsummary} onChange={e => store.dispatch(changeHlsummary(e.target.value))}
              cols="80" rows="21"/>
            </p>
          </label>
        </div>

        <div style={{float: 'left', margin: '0px 0px 0px 10px',backgroundColor:"#0080FF"}}>
          <label>
            <p>
            Machine Language:
            <select value={mltype} onChange={e => store.dispatch(changeMltype(e.target.value))} >
              <option value="ml-none" defaultValue>Please select a language</option>
              <option value="java">Java</option>
              <option value="php">Php</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="nodejs" disabled>NodeJS</option>
              <option value="c-sharp" disabled>C#</option>
              <option value="c-language" disabled>C</option>
              <option value="c-plus-plus" disabled>C++</option>
              <option value="virtual-basic" disabled>Virtual Basic</option>
              <option value="delphi" disabled>delphi</option>
              <option value="lisp" disabled>LISP</option>
              <option value="shell" disabled>SHELL</option>
              <option value="bash" disabled>BASH</option>
              <option value="ms-power-shell" disabled>MS Power Shell</option>
              <option value="oracle-db" disabled>Oracle Database</option>
              <option value="ms-sql-server" disabled>MS SQL Server</option>
              <option value="mysql" disabled>MySQL</option>
            </select>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <button type="submit">submit</button>
            </p>
            <p>
              <textarea value={mlcontent} onChange={e => store.dispatch(changeMlcontent(e.target.value))}
              cols="80" rows="20"/>
            </p>
          </label>
        </div>

        <div style={{float: 'left', margin: '0px 0px 0px 0px' }}>
        <p>
        <label>
          名前:
          <input value={name} onChange={e => store.dispatch(changeName(e.target.value))}/>
        </label>
        <label>
          年齢:
          <input value={age} onChange={e => store.dispatch(changeAge(e.target.value))} />
        </label>
        </p>
        </div>

      </form>
    </div>
  )
}

export default AddForm

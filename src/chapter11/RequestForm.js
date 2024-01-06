import { useState } from "react";

function RequestsForm() {
  const [request, setRequest] = useState('')

  const inputRequest = (event) => {
    setRequest(event.target.value)
  }

  const submitRequest = (event) => {
    alert('입력한 요청사항 : ' + request)
    console.log(request)
    setRequest('')
    event.preventDefault()
  }

  return (
    <form onSubmit={submitRequest}>
      <label>요청사항 :</label>
      <br />
      <textarea 
      value={request} 
      onChange={inputRequest}
      placeholder="요청사항을 입력하세요.">
      </textarea>
      <br />
      <button type="submit">요청사항 제출</button>
    </form>
  )
}

export default RequestsForm
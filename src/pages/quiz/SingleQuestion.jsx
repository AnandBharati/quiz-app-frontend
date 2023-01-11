import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setResponse } from '../../util/quesBankSlice';

function SingleQuestion({ ques_num, data }) {
  const { question, options, userResponse } = data;
  const index = ques_num - 1;
  const [resp, setResp] = useState(userResponse);
  const dispatch = useDispatch();
  const optionLabel = ['A', 'B', 'C', 'D', 'E', 'F'];
  // console.log('response' + 'question' + index + '=>' + resp)

  useEffect(() => {
    setResp(userResponse);
  }, [data.userResponse]);

  function changeHandler(value, i) {
    const newTemp = data.isMultiSelect ? resp.slice() : new Array(6).fill(false);
    newTemp[i] = value;
    setResp(newTemp);

    dispatch(setResponse({ index, 'userResponse': newTemp }));

  }

  const radioElement = options.filter((option) => (option))
    .map((option, i) => option !== null &&
      <div className="option" key={index + '-' + i}>
        <input
          type="radio" value={option} checked={resp[i]} onChange={(e) => changeHandler(e.target.checked, i)}
          name="option" id={"option-" + i}
        />
        <label htmlFor={"option-" + i}> {optionLabel[i] +'- ' +option} </label>
      </div>
    );

  const chkboxElement = options.filter((option) => (option))
    .map((option, i) =>
      <div className="option" key={index + '-' + i}>
        <input
          type="checkbox" value={option} checked={resp[i]} onChange={(e) => changeHandler(e.target.checked, i)}
          name="option" id={"option-" + i}
        />
        <label htmlFor={"option-" + i}> {optionLabel[i] +'- ' +option} </label>
      </div>
    );

  return <div className="singleQuestion">
    <p style={{fontSize: '1.1rem'}}>Question# {ques_num}</p>
    <p> {question}</p>
    <div className="options">
      {data.isMultiSelect && <p>Select mulple answers</p>}
      {data.isMultiSelect ? chkboxElement : radioElement}
    </div>
  </div>
}

export default SingleQuestion
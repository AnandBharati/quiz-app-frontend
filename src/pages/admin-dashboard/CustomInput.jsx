import './customInput.scss';

function CustomInput(props) {
  const { name, placeholder, style, list, hook, setHook } = props;

  return (
    <div className="customInput">
      <input type="text" list={list} name={name} id={name} style={style} required=" " value={hook} onChange={(e)=>setHook(e.target.value)}/>
      {props.children}
      <label htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default CustomInput
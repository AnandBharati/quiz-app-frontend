import './customOptionInput.scss'

function CustomOptionInput(props) {
    const { name, list, placeholder, style, hook, setHook, hook2, setHook2 } = props;

    function onCheckBoxChange(e){
        console.log(e.target.checked)
        setHook2(e.target.checked)
    }

    return (
        <div className='customOptionInput'>
            <input type='checkbox' name="option-1" id="option1"  onChange={(e)=>onCheckBoxChange(e)}/>
            <input type="text" list={list} name={name} id={name} style={style} required=" " value={hook} onChange={(e) => setHook(e.target.value)} />
            <label htmlFor={name}>{placeholder}</label>
        </div>
    )
}

export default CustomOptionInput
import React, { useRef } from 'react'

interface props {
	todo: string,
	setTodo: React.Dispatch<React.SetStateAction<string>>
	handleAdd: (e : React.FormEvent<EventTarget>) => void 
}

const InputField = ({todo, setTodo, handleAdd}: props ) => {
	
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<form className='input' onSubmit={(e)=>{
			handleAdd(e)
			inputRef.current?.blur();
			}} >
			<input 
				ref={inputRef}
				type='input' 
				value={todo}
				onChange={(e)=>setTodo(e.target.value)}
				placeholder='Enter a Task' 
				className='input-box' 
			/>
			<button className='input-submit' type='submit'>Go</button>
		</form>
	)
}

export default InputField

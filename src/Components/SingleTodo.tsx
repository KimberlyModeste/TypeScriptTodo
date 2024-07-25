import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";

//can use type or interface
type prop = {
	todo: Todo
	// key: number
	todoArr: Todo[]
	setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({todo, todoArr, setTodoArr}: prop) => {
	const [edit, setEdit] = useState<boolean>(false)
	const [editText, setEditText] = useState<string>(todo.todo)
	
	const handleEdit = (e : React.FormEvent<HTMLFormElement>, id : number) => {
		e.preventDefault()
		setTodoArr(todoArr.map((t)=> t.id === id ? {...t, todo: editText} : t))
		setEdit(false)
	}

	const handleDelete = (id : number) => {
		setTodoArr(todoArr.filter((t)=>t.id!==id))
	}

	const handleDone = (id : number) => {
		setTodoArr(todoArr.map((t)=>
			t.id === id ? {...t, isDone: !t.isDone} : t
		))
	}

	useEffect(() =>{
		inputRef.current?.focus();
	}, [edit])
	const inputRef = useRef<HTMLInputElement>(null)

	
	return (
		<form className='todos-single' onSubmit={(e)=>handleEdit(e, todo.id)}>
			{
				edit ?
				<input ref={inputRef} value={editText} onChange={(e) => setEditText(e.target.value)} className='todos-single-text' />
				:
				todo.isDone ? 
					(<s className='todos-single-text' > {todo.todo} </s>)
					:
					(<span className='todos-single-text'> {todo.todo} </span>)
			}
			
			<div>
				<span className='icon'  onClick={() => {
					if(!edit && !todo.isDone) 
					{
						setEdit(!edit)
					}
				}}>
					<AiFillEdit  />
				</span>
				<span className='icon'  onClick={()=>handleDelete(todo.id)}>
					<AiFillDelete />
				</span>
				<span className='icon' onClick={()=>handleDone(todo.id)}>
					<AiOutlineCheck />
				</span>
			</div>
		</form>
	)
}

export default SingleTodo

import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface props{
	todoArr: Todo[]
	setTodoArr: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList = ({todoArr, setTodoArr}: props) => {
	return (
		<div className='todos'> 
			{todoArr.map((t)=>
				<SingleTodo 
					todo={t} 
					key={t.id} 
					todoArr = {todoArr}
					setTodoArr = {setTodoArr}
				/>
			)}
		</div>
	)
}

export default TodoList

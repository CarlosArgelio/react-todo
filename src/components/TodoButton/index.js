import './TodoButton.css'

function TodoButtom({ setOpenModal }) {
    return (
        <div>
            <button 
                className='CreateTodoButton'
                onClick={() => {
                    setOpenModal(state => !state)
                }
                }
            >+</button>
        </div>
    )
}

export { TodoButtom };
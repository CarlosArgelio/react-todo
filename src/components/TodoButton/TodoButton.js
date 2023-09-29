import './TodoButton.css'

function TodoButtom() {
    return (
        <div>
            <button 
                className='CreateTodoButton'
                onClick={(event) => {
                    console.log('click')
                    console.log(event);
                    console.log(event.target);
                }
                }
            >+</button>
        </div>
    )
}

export { TodoButtom };
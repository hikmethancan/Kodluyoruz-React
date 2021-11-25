import {useState, useEffect,useRef} from 'react';

function ToDoForm(props) {
    const [search, setSearch] = useState("")

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: search
        })

        setSearch("")
    }

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type={"text"}
                        placeholder={"Update To DO"}
                        className={"todo-input"}
                        value={search}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button
                        className={"todo-button"}
                    >add todo

                    </button>
                </>
            ) : (
                <>
                    <input
                        type={"text"}
                        placeholder={"Todo List"}
                        className={"todo-input"}
                        value={search}
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button
                        className={"todo-button"}
                    >add todo

                    </button>
                </>
            )}


        </form>

    );
}

export default ToDoForm;

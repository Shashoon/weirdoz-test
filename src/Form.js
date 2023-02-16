

const Form = ({ initializeMatrix }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const matrix = Array.from(Array(parseInt(form[0].value)),
            () => Array.from(Array(parseInt(form[1].value))));

        initializeMatrix(matrix, parseInt(form[2].value));
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Enter Rows No." />
                <input type="number" placeholder="Enter Columns No." />
                <input type="number" placeholder="Enter Sum" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
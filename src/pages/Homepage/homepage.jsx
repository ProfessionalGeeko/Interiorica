
const HomePage = ({ name, description }) => {

    const onChangeHandler = (event) => {
        name = event.target.outerText;
    }

    return (
        <div>
            <p onClick={onChangeHandler}>{`Hello ${name}`}</p>
            <p>{description}</p>
        </div>
    )
} 

export default HomePage;
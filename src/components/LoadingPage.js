import CircleLoader from "react-spinners/CircleLoader";

const LoadingPage = () =>{

    return(
        <>
            <CircleLoader
                color={'green'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </>
    )
}

export default LoadingPage;
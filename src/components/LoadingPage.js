import CircleLoader from "react-spinners/CircleLoader";

const LoadingPage = () => {
    return (
        <div className="loadingPage">
            <CircleLoader
                color={'green'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoadingPage;
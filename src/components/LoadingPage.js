import PulseLoader from "react-spinners/PulseLoader";

const LoadingPage = () => {
    return (
        <div className="loadingPage">
            <PulseLoader
                color={'#EDD060'}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoadingPage;
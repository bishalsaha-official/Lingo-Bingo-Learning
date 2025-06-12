const WelcomeMessage = ({message}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Welcome {message}</h2>
        </div>
    );
};

export default WelcomeMessage;
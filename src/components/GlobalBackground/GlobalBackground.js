import Prism from './Prism';

const GlobalBackground = () => {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Prism/>


        </div>
    );
};

export default GlobalBackground;

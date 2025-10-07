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
            <Prism
                height={4.2}
                baseWidth={6.5}
                animationType="3drotate"
                glow={1.4}
                transparent
                scale={3.2}
                hueShift={0.8}
                colorFrequency={1.6}
                bloom={1.4}
                timeScale={0.6}
                noise={0.25}
                pixelRatio={window.devicePixelRatio || 2}  
            />


        </div>
    );
};

export default GlobalBackground;

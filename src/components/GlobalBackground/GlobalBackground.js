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
        height={3.5}
        baseWidth={5.5}
        animationType="rotate"
        glow={1}
        transparent={true}
        scale={3.6}
        hueShift={0.5}
        colorFrequency={1.2}
        bloom={1}
        timeScale={0.4}
      />
    </div>
  );
};

export default GlobalBackground;

import { PhotoGroupPropsType } from './PhotoGroup.type';

function PhotoGroup({ photos }: PhotoGroupPropsType) {
  function Circle({ children }: { children?: React.ReactNode }) {
    return (
      <div
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#b0b0b088',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500',
        }}
      >
        {children}
      </div>
    );
  }

  // REFACTOR
  switch (photos.length) {
    case 0:
      return null;
    case 1:
      return <Circle />;
    case 2:
      return (
        <div style={{ display: 'flex', gap: '6px' }}>
          <Circle />
          <Circle />
        </div>
      );
    case 3:
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ display: 'flex' }}>
            <Circle />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Circle />
            <Circle />
          </div>
        </div>
      );
    case 4:
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Circle />
            <Circle />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Circle />
            <Circle />
          </div>
        </div>
      );

    default:
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Circle />
            <Circle />
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <Circle />
            <Circle>+{photos.length - 4}</Circle>
          </div>
        </div>
      );
  }
}

export default PhotoGroup;

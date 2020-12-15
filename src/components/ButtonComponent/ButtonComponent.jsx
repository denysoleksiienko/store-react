import Button from 'react-bootstrap/Button';

export const ButtonComponent = ({ title }) => {
  return (
    <Button variant="primary" size="lg" style={{ backgroundColor: '#9932CC', width: '100%' }}>
      {title}
    </Button>
  );
};

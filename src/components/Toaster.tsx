import * as React from 'react';

interface ToasterProps {
  message: string;
}

const Toaster: React.FC<ToasterProps> = ({ message }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  // Function to close the toaster
  const closeToaster = () => {
    setIsOpen(false);
  };

  // Auto-close the toaster after 3 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      closeToaster();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isOpen && (
      <div className='toast'>
        <div>{message}</div>
        <button onClick={closeToaster}>Close</button>
      </div>
    )
  );
};

export default Toaster;

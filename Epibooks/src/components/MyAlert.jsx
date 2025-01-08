import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useEffect } from 'react';

const MyAlert = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
     setTimeout(() => {
        setShow(true);
     }, 2000);
  },[]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compra tutti i libri al 50% di sconto</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Con aspetti Acquista subito! non te ne pentirai</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Vedi i prezzi scontati
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyAlert;
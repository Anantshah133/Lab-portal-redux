import { Button, Modal } from 'flowbite-react';

const ModalView = ({ openModal, setOpenModal, student }) => {
    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>{student.name}'s Details</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>GRID:</strong> {student.grId}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>PC Name:</strong> {student.pcName || 'Not Assigned'}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        <strong>Course:</strong> {student.course}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setOpenModal(false)} 
                className='px-6 rounded py-2 bg-emerald-700 text-white'>Close</button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalView;
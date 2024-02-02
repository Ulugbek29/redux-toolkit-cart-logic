import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: "flex",
flexDirection: "column",
alignItems: "center",
gap: "1rem",
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "1rem",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

export default function BasicModal({openModal, totalCost,handleOpen,handleClose}) {
 
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box className="flex items-center justify-center text-green-500 text-[10rem]">
                <CheckBoxIcon fontSize='inherit'/>
            </Box>
            <p className='text-2xl text-green-600 font-semibold'>
            Purchase was successful 
          </p>
          <span className='text-base text-[#4b4b4b]'>
            Your orders will be delivered soon
          </span>
          <p className='flex gap-2 text-lg font-semibold'>
          <span>
            Total cost: 
          </span>
            ${totalCost}
          </p>
          
        </Box>
      </Modal>
    </div>
  );
}
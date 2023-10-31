import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AddTournament4(props) {
  const handleClose = () => {
    // eslint-disable-next-line react/prop-types
    props?.setOpen(0)
  }

  return (
    <div>
      <Dialog
        // eslint-disable-next-line react/prop-types
        open={props?.open === 4 ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{'Thêm giải đấu '}</DialogTitle>
        <DialogContent style={{ width: 600, maxHeight: 300, overflow: 'auto' }}>
          <DialogContentText id="alert-dialog-slide-description">{/*  */}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={async () => {
              // eslint-disable-next-line react/prop-types
              // props?.setOpen(4)
              // eslint-disable-next-line react/prop-types
              props?.createTournament()
            }}
          >
            Tạo giải đấu
          </Button>
          <Button
            onClick={() => {
              // eslint-disable-next-line react/prop-types
              props?.setOpen(3)
            }}
          >
            Quay lại
          </Button>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

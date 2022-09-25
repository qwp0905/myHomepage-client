import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'

interface Props {
  open: boolean
  onClose: () => unknown
  message: string
  content?: string
  fn: () => unknown
}

const Confirm = ({ open, message, onClose, fn, content }: Props) => {
  const handleConfirm = () => {
    fn()
    return onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{message}</DialogTitle>
      {content && (
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleConfirm}>예</Button>
        <Button onClick={onClose}>아니오</Button>
      </DialogActions>
    </Dialog>
  )
}
export default Confirm

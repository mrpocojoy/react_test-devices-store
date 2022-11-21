import { hideAlert, showLoading, showAlert } from 'lib/sweetAlert2/sweetAlert2'

export const warningAlert = ({ title, text, showConfirmButton, confirmButton, showDenyButton, denyButton, showCancelButton, cancelButton }) => {
  const params = {
    title: title || 'Error!',
    text: text || 'Do you want to continue',
    icon: 'warning',
    showConfirmButton: showConfirmButton || true,
    confirmButtonText: confirmButton || 'Okay',
    showDenyButton: showDenyButton || false,
    denyButtonText: denyButton || 'No',
    showCancelButton: showCancelButton || false,
    cancelButtonText: cancelButton || 'Cancel',
  }

  showAlert(params)
}

export const infoAlert = ({ title, text, showConfirmButton, confirmButton, showDenyButton, denyButton, showCancelButton, cancelButton }) => {
  const params = {
    title: title || 'Information',
    text: text,
    icon: 'info',
    showConfirmButton: showConfirmButton || true,
    confirmButtonText: confirmButton || 'Okay',
    showDenyButton: showDenyButton || false,
    denyButtonText: denyButton || 'No',
    showCancelButton: showCancelButton || false,
    cancelButtonText: cancelButton || 'Cancel',
  }

  showAlert(params)
}


// success
// error
// info
// question


export const displaySpinner = () => {
  showLoading()
  setTimeout(hideAlert, 500)
}

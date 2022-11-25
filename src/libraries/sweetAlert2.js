import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import 'assets/styles/libs/swal2.scss'

export const showLoading  = () => Swal.showLoading()
export const hideAlert = () => Swal.close()

export const showAlert = (params) => {
  Swal.fire({
    title: params.title,
    text: params.text,
    icon: params.icon,
    showConfirmButton: true,
    confirmButtonText: params.confirmButtonText,
    showDenyButton: params.showDenyButton,
    denyButtonText: params.denyButtonText,
    showCancelButton: params.showCancelButton,
    cancelButtonText: params.cancelButtonText
  })
}
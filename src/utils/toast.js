import { toast } from "react-toastify";

export function toastSucess(message) {
  toast(message, {
    type: "success",
    position: toast.POSITION.TOP_RIGHT,
    style: {
      
    },
  });
}

export function toastError(message) {
  toast(message, {
    type: "error",
    position: toast.POSITION.TOP_RIGHT,
    style: {
      
    },
  });
}
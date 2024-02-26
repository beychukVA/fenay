import toast from "react-hot-toast";

export const show_toast = (show_message) => {
  toast.error(show_message);
};

export const show_success = (message) => {
  toast.success(message);
};

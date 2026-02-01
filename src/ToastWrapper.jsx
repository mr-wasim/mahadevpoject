import { ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const fadeScale = cssTransition({
  enter: "toast-fade-scale-enter",
  exit: "toast-fade-scale-exit",
  duration: 200,
});

export default function ToastWrapper() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      limit={1}
      hideProgressBar
      closeButton={false}
      draggable={false}
      pauseOnHover
      icon={false}
      transition={fadeScale}
      style={{ paddingRight: "10px" }}
      toastClassName={(context) => {
        if (context?.type === "error") return "exposure-toast error";
        if (context?.type === "warning") return "exposure-toast warning";
        if (context?.type === "success") return "exposure-toast success";
        return "exposure-toast";
      }}
      bodyClassName="exposure-toast-body"
    />
  );
}

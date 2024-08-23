import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function Listner(event) {
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(ref);
    }

    document.addEventListener("mousedown", Listner);
    document.addEventListener("touchstart", Listner);

    return () => {
      document.removeEventListener("mousedown", Listner);
      document.removeEventListener("touchstart", Listner);
    };
  }, [ref, handler]);
}

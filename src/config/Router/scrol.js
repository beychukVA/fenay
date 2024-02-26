import { useEffect, useState } from "react";

function ScrollToTopOnMount() {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (!refresh) {
      window.location.reload();
      window.scrollTo(0, 0);
      setRefresh(true);
    }
  }, []);

  return null;
}
export default ScrollToTopOnMount;

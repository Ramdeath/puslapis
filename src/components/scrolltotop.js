import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { alignBalls } from "./navbar";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
      alignBalls();
  }, [pathname]);

  return null;
}
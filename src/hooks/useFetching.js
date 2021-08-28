import { useState } from "react";

export default function useFetching(callback) {
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setShowLoading(true);
      await callback();
    } catch (e) {
      setShowLoading(false);
      setError(e.message);
    } finally {
      setShowLoading(false);
    }
  };

  return [fetching, showLoading, error];
}

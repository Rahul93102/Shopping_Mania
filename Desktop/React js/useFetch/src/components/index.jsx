import { set } from "mongoose";
import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchdata() {
    try {
      setLoading(true);
      const res = await fetch(url, { options });
      if (res.ok) {
        const datas = await res.json();
        setData(datas);
        setLoading(false);
        setError("");
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [url]);
  if (loading) {
    return <div>loading ... </div>;
  }
  return { data, error, loading };
}

"use client";
import { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const findQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getQuote"); //CORS sorunu yaşamamak için Next.js API route'u kullandım.
      const data = await response.json();
      setQuote(data[0]);
      setLoading(false);
    } catch (error) {
      console.log("Alıntı getirilemedi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findQuote();
  }, []);

  return (
    <div className="quote-bar">
      <h1>Alıntı Bulma Aracı</h1>
      <h3 className="h3-style"><i>"{quote ? quote.q : "Yükleniyor..."}"</i></h3>
      <p> {quote?.a}</p>

      <button className="btn-style" onClick={findQuote} disabled={loading}>
        {loading ? "Yükleniyor..." : "Yeni Alıntı Bul"}
      </button>
    </div>
  );
}

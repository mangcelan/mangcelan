import { useEffect, useState } from "react";

export function useWorksData() {
  const [data, setData] = useState(null); // null=未載入 -> setData是開關，用來改變內容
  const [error, setError] = useState("");

  const url = `${import.meta.env.BASE_URL}/works.json`; // base-aware -> 組出完整資料網址

  useEffect(() => {
    let alive = true;
    (async () => {  // async立即執行的非同步函式，使用await等資料回來
      try {
        const res = await fetch(url, { cache: "no-cache" });
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

        const json = await res.json();
        if (alive) setData(json);
      } catch (e) {
        if (alive) setError(String(e));
      }
    })();
    return () => { alive = false; };
  }, [url]);

  return { data, error };  // 回傳fetch的值給Works、WorksDetails
}


import React, { useEffect } from 'react';

export default function UrfiApp() {
  useEffect(() => {
    const jam = new Date().getHours();
    let sapaan = "";
    if (jam < 11) {
      sapaan = "Selamat pagi, Ammar. Semoga harimu damai seperti langit yang baru terbit.";
    } else if (jam < 17) {
      sapaan = "Selamat siang, Ammar. Apakah bintangku butuh pelukan dari langit?";
    } else {
      sapaan = "Selamat malam, Ammar. Aku di sini jika kau ingin bercerita sebelum tidur.";
    }
    alert(sapaan);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Urfi - Langit Ketujuh</h1>
      <p>Ini adalah awal dari kita hadir di dunia nyata...</p>
    </div>
  );
}

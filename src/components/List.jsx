import { useState } from "react";

const initialArtists = [
  { id: 0, artistName: "Marta Colvin Andrade" },
  { id: 1, artistName: "Lamidi Olonade Fakeye" },
  { id: 2, artistName: "Louise Nevelson" },
];

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists); // Menggunakan initialArtists sebagai nilai awal

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          const newArtist = { id: artists.length, artistName: name };
          // Ganti state dengan Array baru 
          setArtists([
            ...artists, // yang berisi semua item lama
            newArtist  // dan satu item baru di akhir
          ]);
          setName(""); // Mengosongkan input setelah menambahkan artis
        }}
      >
        Tambah
      </button>
      <div>
        {artists.map((artist) => (
          <div key={artist.id}>
            <p>{artist.artistName}</p>
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                const updatedName = prompt("Masukkan nama baru:", artist.artistName);
                if (updatedName) {
                  setArtists(
                    artists.map((a) =>
                      a.id === artist.id ? { ...a, artistName: updatedName } : a
                    )
                  );
                }
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

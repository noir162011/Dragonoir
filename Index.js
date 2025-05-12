<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judul dan Gambar</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
    img { max-width: 300px; height: auto; margin-top: 20px; transition: opacity 0.5s ease; }
    h1 { transition: opacity 0.5s ease; }
  </style>
</head>
<body>
  <h1 id="judul">Judul Dinamis</h1>
  <img id="gambar" src="https://via.placeholder.com/300" alt="Gambar Placeholder">
  <br><br>
  <button onclick="ubahJudulDanGambar()">Ubah Judul dan Gambar</button>  <script>
    function ubahJudulDanGambar() {
      const judul = document.getElementById("judul");
      const gambar = document.getElementById("gambar");

      // Tambahkan efek animasi
      judul.style.opacity = 0;
      gambar.style.opacity = 0;

      setTimeout(() => {
        judul.innerText = "Judul Baru dengan JavaScript";
        gambar.src = "https://via.placeholder.com/400";

        judul.style.opacity = 1;
        gambar.style.opacity = 1;
      }, 500); // Waktu sesuai durasi animasi
    }
  </script></body>
</html>

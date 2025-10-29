function sendMessage() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Nama tidak boleh kosong!");
  } else {
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
    document.getElementById("contactForm").reset();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Set tema awal berdasarkan preferensi browser
  if (prefersDark.matches) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.add("bright-mode");
    toggleBtn.textContent = "🌙";
  }

  // Ubah tema saat tombol ditekan
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("bright-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });
});

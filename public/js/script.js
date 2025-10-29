// === SweetAlert2 CDN (pastikan di-load di index.ejs) ===
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showAlert("⚠️ Lengkapi semua kolom sebelum mengirim!", "warning");
    return;
  }

  showAlert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`, "success");
  document.getElementById("contactForm").reset();
}

// === Tema adaptif ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Set tema awal
  if (prefersDark.matches) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.add("bright-mode");
    toggleBtn.textContent = "🌙";
  }

  // Tombol toggle tema
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("bright-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });
});

// === SweetAlert2 adaptif + liquid glass ===
function showAlert(message, type = "info") {
  const isDark = document.body.classList.contains("dark-mode");

  Swal.fire({
    title: type === "success" ? "✅ Berhasil" : "ℹ️ Info",
    text: message,
    icon: type,
    background: isDark ? "rgba(25, 25, 25, 0.7)" : "rgba(255, 255, 255, 0.7)",
    color: isDark ? "#fff" : "#212529",
    backdrop: `
      rgba(0,0,0,0.3)
      blur(10px)
    `,
    confirmButtonColor: isDark ? "#66b2ff" : "#0d6efd",
    confirmButtonText: "Oke",
    customClass: {
      popup: "swal-glass",
    },
  });
}

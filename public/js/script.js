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

function showAlert(message, type = "info") {
  const isDark = document.body.classList.contains("dark-mode");

  Swal.fire({
    title:
      type === "success"
        ? "✅ Berhasil"
        : type === "warning"
        ? "⚠️ Peringatan"
        : "ℹ️ Info",
    text: message,
    icon: type,
    background: isDark ? "rgba(20, 20, 20, 0.55)" : "rgba(255, 255, 255, 0.55)",
    color: isDark ? "#fff" : "#212529",
    confirmButtonColor: isDark ? "#66b2ff" : "#0d6efd",
    confirmButtonText: "Oke",
    customClass: {
      popup: "swal-glass",
      container: "swal-custom-container", // 🔹 untuk layer blur manual
    },
    backdrop: false, // ⛔ menonaktifkan layer abu default SweetAlert
  });

  // 🔹 Tambahkan manual layer blur transparan tipis
  const existingOverlay = document.querySelector(".custom-blur-overlay");
  if (!existingOverlay) {
    const blurLayer = document.createElement("div");
    blurLayer.className = "custom-blur-overlay";
    document.body.appendChild(blurLayer);

    // Hapus layer setelah swal ditutup
    const observer = new MutationObserver(() => {
      if (!document.querySelector(".swal2-container")) {
        blurLayer.remove();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true });
  }
}

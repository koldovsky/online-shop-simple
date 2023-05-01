export function showAlert(message, success = true) {
  document.querySelector(".alert-container").innerHTML = `<div class="alert ${success ? "alert-success" : "alert-danger"
    } alert-dismissible fade show" role="alert">
          <strong>${message}</strong>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`;
  const bsAlert = new bootstrap.Alert(document.querySelector(".alert"));
  setTimeout(() => bsAlert.close(), 2000);
}

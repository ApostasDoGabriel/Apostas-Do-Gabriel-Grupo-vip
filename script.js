// Correct passwords
const correctPassword1 = "VIPADG14"; // First correct password
const correctPassword2 = "VIPADG09"; // Second correct password
const timeoutPassword = "VIPADG05"; // Timeout password
const wrongPassword = "VIPADG67"; // Wrong password with 3 attempts

function validatePassword() {
  // Get the entered password
  const enteredPassword = document.getElementById("password").value;

  // Message display area
  const messageDiv = document.getElementById("message");

  // Clear previous messages
  messageDiv.textContent = "";

  // Password validation logic
  if (enteredPassword === correctPassword1 || enteredPassword === correctPassword2) {
    // Correct password
    messageDiv.textContent = "Acesso concedido! Bem-vindo ao canal privado.";
    messageDiv.className = "message success";
  } else if (enteredPassword === timeoutPassword) {
    // Timeout password
    messageDiv.textContent = "Sessão expirada. Por favor, tente novamente.";
    messageDiv.className = "message timeout";
  } else if (enteredPassword === wrongPassword) {
    // Wrong password
    messageDiv.textContent = "Senha incorreta! Você tem 3 tentativas restantes.";
    messageDiv.className = "message error";
  } else {
    // Generic incorrect password
    messageDiv.textContent = "Senha incorreta! Por favor, tente novamente.";
    messageDiv.className = "message error";
  }

  // Prevent form submission
  return false;
}

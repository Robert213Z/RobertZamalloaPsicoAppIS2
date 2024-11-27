const API_URL = import.meta.env.VITE_API_URL; // Base URL desde el archivo .env

// Helper para manejar errores
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error desconocido');
    }
    return response.json();
};

// Registro de usuario
export const registerUser = async (data) => {
  const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Inicio de sesión
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

// Obtener citas de un usuario
export const getCitas = async (userId) => {
  const response = await fetch(`${API_URL}/api/citas/${userId}`);
  return handleResponse(response);
};

// Crear una nueva cita
export const createCita = async (data) => {
  const response = await fetch(`${API_URL}/api/citas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Crear un cuestionario
export const createCuestionario = async (data) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Obtener todos los cuestionarios
export const getCuestionarios = async () => {
  const response = await fetch(`${API_URL}/api/cuestionarios/`);
  return handleResponse(response);
};

// Actualizar un cuestionario
export const updateCuestionario = async (id, data) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Eliminar un cuestionario
export const deleteCuestionario = async (id) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/${id}`, {
      method: 'DELETE',
  });
  return handleResponse(response);
};

// Obtener preguntas de un cuestionario
export const getPreguntasCuestionario = async (id) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/${id}`);
  return handleResponse(response);
};

// Enviar respuestas de un cuestionario
export const enviarRespuestasCuestionario = async (id, respuestas) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/${id}/respuestas`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ respuestas }),
  });
  return handleResponse(response);
};

// Buscar cuestionarios
export const buscarCuestionarios = async (query) => {
  const response = await fetch(`${API_URL}/api/cuestionarios/buscar?query=${query}`);
  return handleResponse(response);
};


// Registrar un log
export const createLog = async (data) => {
  const response = await fetch(`${API_URL}/api/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Obtener logs de un usuario
export const getLogs = async (userId) => {
  const response = await fetch(`${API_URL}/api/log/${userId}`);
  return handleResponse(response);
};

// Solicitar recuperación de contraseña
export const forgotPassword = async (email) => {
  const response = await fetch(`${API_URL}/api/password/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
  });
  return handleResponse(response);
};

// Restablecer contraseña
export const resetPassword = async (data) => {
  const response = await fetch(`${API_URL}/api/password/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Obtener perfil de un usuario
export const getPerfil = async (userId) => {
  const response = await fetch(`${API_URL}/api/perfil/${userId}`);
  return handleResponse(response);
};

// Actualizar perfil de un usuario
export const updatePerfil = async (userId, data) => {
  const response = await fetch(`${API_URL}/api/perfil/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Obtener reportes de un paciente
export const getReportes = async (pacienteId) => {
  const response = await fetch(`${API_URL}/api/reporte/${pacienteId}`);
  return handleResponse(response);
};

// Crear un reporte
export const createReporte = async (data) => {
  const response = await fetch(`${API_URL}/api/reporte/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Eliminar un reporte
export const deleteReporte = async (id) => {
  const response = await fetch(`${API_URL}/api/reporte/${id}`, {
      method: 'DELETE',
  });
  return handleResponse(response);
};

// Obtener sesiones de un paciente
export const getSesiones = async (pacienteId) => {
  const response = await fetch(`${API_URL}/api/sesion/${pacienteId}`);
  return handleResponse(response);
};

// Crear una sesión
export const createSesion = async (data) => {
  const response = await fetch(`${API_URL}/api/sesion/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Asignar un test
export const assignTest = async (data) => {
  const response = await fetch(`${API_URL}/api/test/assign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Completar un test
export const completeTest = async (data) => {
  const response = await fetch(`${API_URL}/api/test/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });
  return handleResponse(response);
};

// Obtener un test por ID
export const getTestById = async (testId) => {
  const response = await fetch(`${API_URL}/api/test/${testId}`);
  return handleResponse(response);
};

// Obtener historial de tests de un usuario
export const getUserTestHistory = async (userId) => {
  const response = await fetch(`${API_URL}/api/test/${userId}/history`);
  return handleResponse(response);
};

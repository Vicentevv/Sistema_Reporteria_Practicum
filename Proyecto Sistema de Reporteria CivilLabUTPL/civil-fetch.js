import { database } from './firebaseConfig.js';
import { ref, get, child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

export async function obtenerDatosNormalizados() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, 'sim-mano-obra-calificada-utpl/usuarios'));
  if (!snapshot.exists()) return [];

  const usuarios = snapshot.val();
  const registros = [];

  for (const username in usuarios) {
    const user = usuarios[username];
    const datosUsuario = user?.registros ? Object.values(user.registros)[0] : {};
    const nombre = datosUsuario?.nombres_completos || '';
    const correo = datosUsuario?.correo || '';

    const retos = user?.Retos || {};
    for (const mision in retos) {
      const intentos = retos[mision].Intentos || {};
      for (const intentoId in intentos) {
        const intento = intentos[intentoId];

        registros.push({
          username,
          nombres_completos: nombre,
          correo,
          reto: intento.reto || '',
          descripcion_reto: intento.descripcion_reto || '',
          estado: intento.estado || '',
          fecha_inicio: intento.fecha_inicio || '',
          fecha_finalizado: intento.fecha_finalizado || '',
          intento: intento.id || '',
          replantillo: intento.replantillo || '',
          armaduraAcero: intento.armaduraAcero || '',
          excavacionesTerreno: intento.excavacionesTerreno || '',
          hormigonSuelo: intento.hormigonSuelo || '',
          tablerosEncofrado: intento.tablerosEncofrado || '',
          total: intento.total || ''
        });
      }
    }
  }

  return registros;
}

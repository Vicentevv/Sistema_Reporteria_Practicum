export function generarTabla(clave, estudiantes, contenedor) {
  const rows = [];

  for (const username in estudiantes) {
    const est = estudiantes[username];
    const nombres = est.nameUser || '';
    const apellidos = est.lastNameUser || '';
    const intentos = est.attempts?.length ? est.attempts : est.skinner || [];

    intentos.forEach((i, idx) => {
      if (!i) return;
      rows.push([
        username,
        nombres,
        apellidos,
        idx + 1,
        // Si es numérico y vacío, poner 0
        i.average != null && i.average !== '' && i.average !== '-' ? i.average : 0,
        i.dateDone ?? '',
        i.errorF1_Acquisition1 != null && i.errorF1_Acquisition1 !== '' && i.errorF1_Acquisition1 !== '-' ? i.errorF1_Acquisition1 : 0,
        i.errorF2_Acquisition2 != null && i.errorF2_Acquisition2 !== '' && i.errorF2_Acquisition2 !== '-' ? i.errorF2_Acquisition2 : 0,
        (i.errorF3_Conditioning != null && i.errorF3_Conditioning !== '' && i.errorF3_Conditioning !== '-' ? i.errorF3_Conditioning :
          (i.error_Conditioning != null && i.error_Conditioning !== '' && i.error_Conditioning !== '-' ? i.error_Conditioning : 0)),
        i.porcentage != null && i.porcentage !== '' && i.porcentage !== '-' ? i.porcentage : 0,
        i.startTime ?? '',
        i.state ?? '',
        i.timeSpent ?? ''
      ]);
    });
  }

  const tablaHTML = `
    <table>
      <thead>
        <tr>
          <th>Username</th><th>Nombres</th><th>Apellidos</th><th># Intento</th><th>Promedio</th><th>Fecha</th>
          <th>Error F1</th><th>Error F2</th><th>Error F3</th><th>%</th><th>Inicio</th><th>Estado</th><th>Duración</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `<tr>${row.map(d => `<td>${d}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `;
  contenedor.innerHTML = tablaHTML;
}

export function generarXLSX(clave, estudiantes) {
  const rows = [[
    "username", "nombres", "apellidos", "# Intento", "average", "dateDone",
    "errorF1_Acquisition1", "errorF2_Acquisition2", "error_Conditioning",
    "porcentage", "startTime", "state", "timeSpent"
  ]];

  for (const username in estudiantes) {
    const est = estudiantes[username];
    const nombres = est.nameUser || '';
    const apellidos = est.lastNameUser || '';
    const intentos = est.attempts?.length ? est.attempts : est.skinner || [];

    intentos.forEach((i, idx) => {
      if (!i) return;
      rows.push([
        username, nombres, apellidos, idx + 1,
        i.average != null && i.average !== '' && i.average !== '-' ? i.average : 0,
        i.dateDone ?? '',
        i.errorF1_Acquisition1 != null && i.errorF1_Acquisition1 !== '' && i.errorF1_Acquisition1 !== '-' ? i.errorF1_Acquisition1 : 0,
        i.errorF2_Acquisition2 != null && i.errorF2_Acquisition2 !== '' && i.errorF2_Acquisition2 !== '-' ? i.errorF2_Acquisition2 : 0,
        (i.errorF3_Conditioning != null && i.errorF3_Conditioning !== '' && i.errorF3_Conditioning !== '-' ? i.errorF3_Conditioning :
          (i.error_Conditioning != null && i.error_Conditioning !== '' && i.error_Conditioning !== '-' ? i.error_Conditioning : 0)),
        i.porcentage != null && i.porcentage !== '' && i.porcentage !== '-' ? i.porcentage : 0,
        i.startTime ?? '', i.state ?? '', i.timeSpent ?? ''
      ]);
    });
  }

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Datos");
  XLSX.writeFile(wb, `${clave}.xlsx`);
}

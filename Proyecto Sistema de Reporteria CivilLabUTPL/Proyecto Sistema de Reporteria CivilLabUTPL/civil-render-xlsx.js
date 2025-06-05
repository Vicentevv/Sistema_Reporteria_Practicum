export function mostrarTabla(datos, contenedor) {
  if (!datos.length) {
    contenedor.innerHTML = "<p>No hay datos disponibles.</p>";
    return;
  }

  const headers = Object.keys(datos[0]);
  const tablaHTML = `
    <table>
      <thead><tr>${headers.map(h => `<th>${h.replace(/_/g, ' ').toUpperCase()}</th>`).join('')}</tr></thead>
      <tbody>
        ${datos.map(row => `
          <tr>${headers.map(h => `<td>${row[h] !== undefined && row[h] !== null && row[h] !== '' ? row[h] : '-'}</td>`).join('')}</tr>
        `).join('')}
      </tbody>
    </table>
  `;
  contenedor.innerHTML = tablaHTML;
}

export function exportarXLSX(nombreArchivo, datos) {
  if (!datos.length) return;
  const headers = Object.keys(datos[0]);
  const rows = [headers];

  datos.forEach(obj => {
    rows.push(headers.map(h => obj[h] || ''));
  });

  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Reporte");

  XLSX.writeFile(workbook, `${nombreArchivo}.xlsx`);
}

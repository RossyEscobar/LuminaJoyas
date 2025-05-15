document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalInfo');
  const cerrarModal = document.getElementById('cerrarModal');
  const modalTitulo = document.getElementById('modalTitulo');

  // Información para cada producto, puedes agregar más o modificar
const infoProductos = [
  {
    titulo: 'ESPECIAL DÍA DE LA MADRE',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Cajitas',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Conjunto de cadena y pulsera',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: '♥️ESPECIAL DÍA DE LA MADRE♥️ ROSA ETERNA+CADENA (modelo 2)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'ESPECIAL DÍA DE LA MADRE (modelo 3)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'MAMÁ ACERO Y DIJE ORO GOLDFILLED ARETES ACERO INOXIDABLE (modelo 4)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Cajitas (modelo 5)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Cadena de acero inoxidable y digen oro goldfilled (modelo 6)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Conjunto de cadena y pulsera cadena acero inoxidable y dije de oro Golf (modelo 7)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  },
  {
    titulo: 'Conjunto de cadena (modelo 8)',
    cuenta: 'Banco Guayaquil Ahorro # 0040947960 CI: 0805268000',
    whatsapp: '+593 99 461 6925',
    otros: 'Depósito o transferencia bancaria. Entrega en 3 días hábiles enviar la foto del producto y el comprobante y la direccion de su domicilio por whatsApp.'
  }
];

  // Selecciona todos los divs de productos
  const joyas = document.querySelectorAll('.joya');

  joyas.forEach((joya, index) => {
    joya.addEventListener('click', () => {
      // Setear información en el modal según el índice
      if (infoProductos[index]) {
        modalTitulo.textContent = infoProductos[index].titulo;
        modal.querySelector('p:nth-of-type(1)').innerHTML = `<strong>Cuenta bancaria:</strong> ${infoProductos[index].cuenta}`;
        modal.querySelector('p:nth-of-type(2)').innerHTML = `<strong>WhatsApp:</strong> ${infoProductos[index].whatsapp}`;
        modal.querySelector('p:nth-of-type(3)').innerHTML = `<strong>Otros datos:</strong> ${infoProductos[index].otros}`;
      } else {
        modalTitulo.textContent = 'Información no disponible';
        modal.querySelector('p:nth-of-type(1)').textContent = '';
        modal.querySelector('p:nth-of-type(2)').textContent = '';
        modal.querySelector('p:nth-of-type(3)').textContent = '';
      }
      modal.style.display = 'flex';
    });
  });

  // Cerrar modal al hacer click en la "X"
  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal al hacer click fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Cartelera del cine: cada película tiene los datos que se muestran en la página
const peliculas = [
  {
    id: 1,
    titulo: 'Horizonte Rojo',
    imagen: 'https://picsum.photos/seed/horizonte-rojo/400/600',
    sinopsis:
      'Una piloto de carga queda varada en Marte y debe cruzar el desierto rojo para llegar a la última base habitada antes de que se acabe su oxígeno.',
    clasificacion: '+14',
    valoracion: 8.7,
    horarios: ['14:30', '17:15', '20:00', '22:40'],
  },
  {
    id: 2,
    titulo: 'El Último Tren a Cusco',
    imagen: 'https://picsum.photos/seed/tren-cusco/400/600',
    sinopsis:
      'Un grupo de desconocidos comparte vagón en un viaje nocturno por los Andes, hasta que descubren que uno de ellos no es quien dice ser.',
    clasificacion: '+14',
    valoracion: 7.9,
    horarios: ['15:00', '18:20', '21:10'],
  },
  {
    id: 3,
    titulo: 'Pequeños Gigantes',
    imagen: 'https://picsum.photos/seed/pequenos-gigantes/400/600',
    sinopsis:
      'Tres hermanos encuentran en el ático una máquina que los reduce al tamaño de una hormiga y viven la aventura más grande de sus vidas en el jardín.',
    clasificacion: 'APT',
    valoracion: 8.1,
    horarios: ['11:00', '13:30', '16:00'],
  },
  {
    id: 4,
    titulo: 'Código Silencio',
    imagen: 'https://picsum.photos/seed/codigo-silencio/400/600',
    sinopsis:
      'Una experta en ciberseguridad detecta un ataque contra la red eléctrica de la ciudad y tiene una sola noche para encontrar al responsable.',
    clasificacion: '+14',
    valoracion: 8.4,
    horarios: ['16:45', '19:30', '22:15'],
  },
  {
    id: 5,
    titulo: 'La Casa del Fondo',
    imagen: 'https://picsum.photos/seed/casa-fondo/400/600',
    sinopsis:
      'Una familia se muda a una casona antigua de Barranco y empieza a escuchar pasos en el cuarto que siempre está cerrado con llave.',
    clasificacion: '+18',
    valoracion: 7.2,
    horarios: ['19:00', '21:30', '23:50'],
  },
  {
    id: 6,
    titulo: 'Ritmo de Barrio',
    imagen: 'https://picsum.photos/seed/ritmo-barrio/400/600',
    sinopsis:
      'Un joven bailarín del Callao arma una crew con sus amigos para participar en el concurso de baile urbano más importante del país.',
    clasificacion: 'APT',
    valoracion: 7.6,
    horarios: ['12:15', '15:40', '18:50'],
  },
  {
    id: 7,
    titulo: 'Mareas',
    imagen: 'https://picsum.photos/seed/mareas-film/400/600',
    sinopsis:
      'Un pescador anciano y su nieta salen al mar en busca de un barco hundido que guarda el secreto de la familia desde hace cincuenta años.',
    clasificacion: '+14',
    valoracion: 8.0,
    horarios: ['14:00', '17:00', '20:20'],
  },
  {
    id: 8,
    titulo: 'Robo a Medianoche',
    imagen: 'https://picsum.photos/seed/robo-medianoche/400/600',
    sinopsis:
      'Cinco especialistas planean el robo de una joya en una gala de museo, pero el plan perfecto se complica cuando uno de ellos los traiciona.',
    clasificacion: '+14',
    valoracion: 7.8,
    horarios: ['15:20', '18:00', '20:45', '23:10'],
  },
]

export default peliculas

const config = {
  github: {
    username: 'Zasalast',
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['libromongodb'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zanoni-alfredo-salas-tob%C3%B3n-30b1b6241',
    twitter: 'ZasColectivo',
    facebook: 'zalfredosalas',
    instagram: 'zasalast',
    dribbble: 'zasalastobon',
    behance: 'zanonisalast',
    medium: '@zasalastobon',
    dev: 'zasalastobon',
    website: 'https://zasalastobon.com',
    phone: '+3134208041',
    email: 'zasalastobon@gmail.com',
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'UNIDAD DE APOYO UDLA',
      position: 'Arquitecto, Diseñador & Programador  ',
      from: 'Diciembre 2022 ',
      to: 'Enero 2023',
    },
    {
      company: 'PLANETA MÓVILO',
      position: 'Asesor',
      from: 'Diciembre 2019  ',
      to: 'Enero 2020',
    },
    {
      company: 'PACTIA',
      position: 'Informador centro comercial',
      from: 'Enero 2016',
      to: 'Enero 2017',
    },
    {
      company: 'EKO-ARK ARQUITECTURA BIOCLIMÁTICA',
      position: ' Practicante',
      from: 'Septiembre 2012',
      to: 'Marzo 2013',
    },
  ],
  education: [
    {
      institution: 'Universidad de la Amazonia',
      degree: 'Ingeniería de Sistemas',
      from: '',
      to: '2023',
    },
    {
      institution:
        'Servicio Nacional de Aprendizaje SENA Centro Tecnológico de la Amazonia Florencia Caquetá',
      degree:
        'Tecnólogo Técnicas en Gráfico  Desarrollo de Proyectos de Construcción.',
      from: '2010',
      to: '2013',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'zasalastobon', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-C6Y1LMQXN0', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;

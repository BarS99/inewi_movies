export const theme = {
  breakpoints: ["576px", "992px", "1200px", "1400px"],
  borderWidths: {
    sm: "1px",
    md: "2px",
    lg: "4px",
  },
  colors: {
    text: "#fff",
    primary: "#52057B",
    secondary: "#892CDC",
    tertiary: "#BC6FF1",
    background: "#000",
    backgroundContrast: "#fff",
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: ["0.75rem", "1rem", "1.25rem", "1.5rem", "2rem", "3rem"],
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    text: 1.75,
  },
  links: {
    nav: {
      ":hover": {
        textDecoration: [null, null, "underline"],
      },
    },
  },
  container: {
    md: {
      maxWidth: "992px",
    },
    lg: {
      maxWidth: "1200px",
    },
    xl: {
      maxWidth: "1400px",
    },
    full: {
      maxWidth: "1920px",
    },
  },
  forms: {
    label: {
      fontWeight: "bold",
      pb: 3,
    },
    slider: {
      my: "14px",
      py: 1,
    },
  },
  icon: {
    sm: {
      fontSize: 2,
    },
    md: {
      fontSize: 3,
    },
    lg: {
      fontSize: 4,
    },
  },
  navMenu: {
    inactive: {
      transform: ["translateX(100%)", null, "none"],
      position: ["fixed", null, "static"],
      top: 0,
      right: 0,
      bottom: 0,
    },
    active: {
      transform: ["translateX(0%)", null, "none"],
      position: ["fixed", null, "static"],
      top: 0,
      right: 0,
      bottom: 0,
    },
  },
  images: {
    main: {
      height: [400, 500, null, 650],
      objectFit: "cover",
    },
  },
  grid: {
    mediaList: {
      gridTemplateColumns: [
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(6, 1fr)",
        "repeat(8, 1fr)",
      ],
    },
  },
  text: {
    xs: {
      fontSize: 0,
      fontWeight: "regular",
    },
    h3: {
      fontSize: 2,
      fontWeight: "bold",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
  },
};
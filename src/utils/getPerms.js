const getPerms = (rol) => {
  switch (rol) {
    case 0:
      return "Usuario";
    case 1:
      return "Jugador";
    case 2:
      return "Coach";
    case 3:
      return "Admin";
  }
};

export default getPerms;

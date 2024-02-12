const getPerms = (rol) => {
  switch (rol) {
    case 0:
      return "Usuario";
    case 1:
      return "Privilegiado";
    case 2:
      return "Coach";
    case 3:
      return "Admin";
    default:
      return "Admin";
  }
};

export default getPerms;

import axios from "axios";
import api from "../../variables.json";

import { returnSession, returnSessionInicio } from "./sessions";

async function checkToken(nombre, contra, resolve, reject) {
  if (nombre && contra) {
    axios.post(api.directorio + "auth", { type: "main", nombre: nombre, contra: contra }).then((check) => {
      if (check.data["status"] == 200) {
        localStorage.setItem("token", check.data["token"]);
        returnSessionInicio(check.data["token"]);
        resolve();
      } else {
        reject();
      }
    });
  }
}

async function createToken(data, contrasenaEncriptada, resolve, reject) {
  axios.post(api.directorio + "auth", { type: "registro", datos: data, contra: contrasenaEncriptada }).then((response) => {
    if (response.data.status == 200) {
      axios.post(api.directorio + "auth", { type: "main", nombre: data.usuario, contra: contrasenaEncriptada }).then((check) => {
        if (check.data["status"] == 200) {
          localStorage.setItem("token", check.data["token"]);
          returnSession(localStorage.getItem("token"), true);
          resolve();
        } else {
          reject();
        }
      });
    } else {
      reject();
    }
  });
}

export { checkToken, createToken };

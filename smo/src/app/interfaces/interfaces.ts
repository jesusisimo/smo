export interface RespuestaCDB {
  error: boolean;
  carteles: Cartel[];
}

export interface Cartel {
  id: string;
  clave: string;
  titulo: string;
  coautores: string;
  autores: string;
  especialidad: string;
  color: string;
}
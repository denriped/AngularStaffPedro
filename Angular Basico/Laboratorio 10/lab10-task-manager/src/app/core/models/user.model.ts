export interface User {
  id: number;
  nombre: string;
  correo: string;
  fechaCreacion: Date;
  ciudad: string;
  pais: string;
  empresa: string;
  telefono: string;
  activo: boolean;
  fechaDesactivacion: Date | null;
}
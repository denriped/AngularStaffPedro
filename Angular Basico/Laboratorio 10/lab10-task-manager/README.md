# Laboratorio 10 - Gestor de Tareas

Proyecto desarrollado con Angular 19 utilizando componentes standalone y routing mediante `loadComponent()`.

## Estado actual del desarrollo

### Estructura del proyecto

Se ha definido una arquitectura basada en:

- `core`
  - Modelos
  - Servicios
- `pages`
  - Home
  - TaskList
  - TaskDetail
  - TaskForm
  - NotFound
- `shared`
  - Directivas
  - Pipes

### Routing implementado

Actualmente se encuentran operativas las siguientes rutas:

| Ruta | Descripción |
|--------|--------|
| `/` | Página de inicio |
| `/tasks` | Listado de tareas |
| `/tasks/new` | Creación de tareas |
| `/tasks/:id` | Detalle de una tarea |
| `/tasks/:id/edit` | Edición de una tarea |
| `**` | Página 404 |

### Navegación

La aplicación utiliza:

- `RouterLink`
- `RouterOutlet`
- Lazy Loading mediante `loadComponent()`

permitiendo navegación SPA sin recarga completa de la página.

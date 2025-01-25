Instrucciones
# Actividad: Consumiendo una API Pública con React

## Objetivo
Crear una aplicación en React que consuma una API pública, renderice dinámicamente la información obtenida y mantenga la persistencia de datos utilizando `localStorage`.

---

## Instrucciones

### 1. Selección de la API
- Escoge una API pública gratuita, como la de **Pokémon** o **Rick & Morty**, que proporcione una lista de elementos con al menos una **imagen**, un **título**, y, si es posible, una **descripción**.

---

### 2. Configuración del Proyecto
- Crea una aplicación en React usando `create-react-app` o `Vite`.
- Asegúrate de instalar cualquier dependencia adicional si lo necesitas.

---

### 3. Llamada a la API
- Utiliza el hook `useEffect` para realizar una solicitud a la API al montar el componente.
- Usa `fetch()` o una librería como `axios` para obtener los datos.

---

### 4. Renderización de Datos
- Almacena los datos obtenidos de la API en un estado utilizando el hook `useState`.
- Mapea los datos para renderizar dinámicamente una lista de elementos que incluyan al menos:
  - Una **imagen**.
  - Un **título**.
  - Una **descripción**, si está disponible.

---

### 5. Interacción con la Interfaz
- Cada elemento de la lista debe ser clickeable.
- Al hacer clic en un elemento, debe mostrarse una tarjeta con la información seleccionada (imagen, título y descripción) en la parte superior de la página.
- Usa `useState` para almacenar el elemento seleccionado.

---

### 6. Persistencia de Datos
- Guarda el elemento seleccionado en `localStorage` al hacer clic.
- Al cargar la página, verifica si hay datos almacenados en `localStorage` y muéstralos en la interfaz automáticamente.

---

## Requisitos
- Uso de `useEffect` y `useState` para manejar el ciclo de vida del componente y el estado de los datos.
- Llamada a la API con `fetch()` o `axios`.
- Manipulación del DOM para renderizar los datos obtenidos.
- Uso de `localStorage` para mantener la persistencia de los datos seleccionados.

# React + Vite


-----------------------------------------------------------------------------------------------------------------------------------------------


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

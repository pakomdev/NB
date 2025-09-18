# NB Formateador

Extensión de VSCode para formateo automático de typescript, javacsript, css,
json, html y svg.

## 🚀 Características

- **Formateo automático** para TypeScript, JavaScript, CSS, HTML, JSON y SVG
- **Motor potente**: Utiliza Deno fmt para un formateo consistente y rápido
- **Integración nativa** con VS Code
- **Soporte completo** para archivos `.ts`, `.tsx`, `.js`, `.jsx`, `.css`,
  `.html`, `.json` y `.svg`

## 📋 Requisitos

- **Deno** debe estar instalado en tu sistema
- **Visual Studio Code** versión 1.80.0 o superior

### Instalación de Deno

Si no tienes Deno instalado, puedes instalarlo desde
[deno.land](https://deno.land/):

```bash
# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh

# Windows (PowerShell)
irm https://deno.land/install.ps1 | iex
```

## 🔧 Instalación

1. Abre Visual Studio Code
2. Ve a la pestaña de Extensiones (Ctrl+Shift+X)
3. Busca "NB"
4. Haz clic en "Instalar"

## 💡 Uso

### Formateo Automático

La extensión se activa automáticamente cuando abres archivos de los tipos
soportados:

- **TypeScript** (`.ts`, `.tsx`)
- **JavaScript** (`.js`, `.jsx`)
- **CSS** (`.css`)
- **HTML** (`.html`)
- **JSON** (`.json`)
- **SVG** (`.svg`)

### Formatear Documento

- **Atajo de teclado**: `Shift+Alt+F` (Windows/Linux) o `Shift+Option+F` (macOS)
- **Menú contextual**: Clic derecho → "Formatear documento"
- **Paleta de comandos**: `Ctrl+Shift+P` → "Format Document"

## ⚙️ Configuración

La extensión funciona sin configuración adicional. Utiliza las reglas de
formateo predeterminadas de Deno fmt, que incluyen:

- Indentación de 2 espacios
- Punto y coma automático
- Comillas dobles para strings
- Formateo consistente de objetos y arrays

## 🛠️ Desarrollo

### Estructura del Proyecto

```
nb/
├── src/
│   └── extension.ts    # Código principal de la extensión
├── package.json        # Configuración y metadatos
├── tsconfig.json      # Configuración de TypeScript
└── README.md          # Este archivo
```

### Compilar desde el Código Fuente

```bash
# Instalar dependencias
npm install

# Compilar
npm run build

# Compilar en modo watch
npm run watch
```

## 🐛 Solución de Problemas

### Deno no encontrado

Si recibes errores sobre Deno no encontrado:

1. Verifica que Deno esté instalado: `deno --version`
2. Asegúrate de que Deno esté en tu PATH
3. Reinicia VS Code después de instalar Deno

### El formateo no funciona

1. Verifica que el archivo tenga la extensión correcta
2. Comprueba que no haya errores de sintaxis en el archivo
3. Revisa la consola de salida de VS Code para mensajes de error

## 📝 Licencia

Esta extensión está disponible bajo la licencia MIT.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el
repositorio del proyecto.

---

**¡Disfruta formateando tu código con NB!** ✨

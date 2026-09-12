# Laboratorio 1 - Fundamentos de Computadores (INF-225)

Este repositorio contiene una pequeña función JavaScript que calcula el total con descuento aplicado a una cantidad de productos y un precio unitario.

## Qué hace el proyecto

La función `calcularTotalConDescuento(cantidad, precioUnitario)` recibe dos valores numéricos y devuelve el total con una tasa de descuento fija del 7% cuando los valores son válidos. Si la entrada es nula, de tipo incorrecto, negativa o no numérica, la función devuelve `0` para evitar un cálculo inválido.

## Qué API se utilizó

No hay evidencia en el repositorio de una API HTTP ni de llamadas `fetch`, `axios` ni endpoints. El proyecto es una función local en JavaScript y su propósito es demostrar validación de entradas y una refactorización de nombres.

Para obtener los códigos de estado de GET, POST y DELETE, se necesita una API real o un servicio de prueba. En este proyecto no hay un servidor o una colección pública para consultar. 

El flujo recomendado para obtener esos códigos es:

1. Ejecutar o levantar una API de prueba local.
2. Hacer una petición `GET` para consultar un recurso.
3. Hacer una petición `POST` para crear un recurso.
4. Hacer una petición `DELETE` para eliminar un recurso.
5. Registrar los códigos de estado obtenidos usando Postman o `curl`.

No se inventan códigos de estado porque el repositorio no ofrece esa evidencia.

## Códigos de estado esperados o registrados

No hay evidencia en el repositorio de respuestas HTTP reales para `GET`, `POST` ni `DELETE`. Por eso este documento no asume ni inventa códigos de estado. El código correcto es documentar los códigos del servidor o servicio de prueba que se ejecute.

## Cambios de refactorización realizados

Se renombraron los parámetros y las variables internas para mejorar claridad:

- `cantidad` → `cantidadProductos`
- `preciounitario` → `precioUnitario`
- `descuentos` → `tasaDescuento`

Además, la función se organizó en una estructura más legible:

- Validación de entrada nula.
- Validación de tipo incorrecto.
- Validación de valores negativos, cero o no finitos.
- Cálculo centralizado del total con descuento.

## Casos inválidos validados

La lógica valida los siguientes casos y devuelve `0`:

- `cantidad` nula o `precioUnitario` nulo.
- Entradas con tipo incorrecto, como texto o valores no numéricos.
- Valores negativos.
- Valores `0` y `NaN` o infinitos.

import React from "react";

function Producto (props){
    return(
        <>
            <div>Nombre: {props.nombre}</div>
            <div>Descripcion: {props.descripcion}</div>
            <div>Precio: {props.Precio}</div>
            <div>SKU: {props.sku}</div>
            <div>Cantidad Disponible: {props.Cantdisp}</div>

            
        </>
    )
    
}
export default Producto
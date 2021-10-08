import React,{Component} from "react";
import Producto from "./Producto";


class Detalles extends Component{
    constructor(){
        super();
        this.state={
            Productos:[
                {
                    order:1,
                    nombre:"Producto1",
                    descripcion:"Descripcion1",
                    Precio:"Precio1",
                    Sku:"Identificador1",
                    Cantdisp:"cant1"
                },
                {
                    order:3,
                    nombre:"Producto3",
                    descripcion:"Descripcion3",
                    Precio:"Precio3",
                    Sku:"Identificador3",
                    Cantdisp:"cant3"
                },


            ],
            titulo:"Productos: ",
            frutasInicial:[],
            etiqueta:""
        };
    }
    handleCambiarProd = ()=>{
        this.setState({
            Productos:[
                {
                    order:2,
                    nombre:"Producto2",
                    descripcion:"Descripcion2",
                    Precio:"Precio2",
                    Sku: " Identificador2",
                    Cantdisp:"cant2"
                }
            ],
        })
    }

    handleClickCompra = () => {
        this.setState({
            etiqueta:"Gracias por su Compra !"
        })
    }

    render(){
    return(
        <div>
            <div>{this.state.titulo}</div>            
            <div>
                {this.state.Productos.map(
                producto=>
                <Producto 
                    nombre={producto.nombre} 
                    descripcion={producto.descripcion}  
                    Precio={producto.Precio} 
                    Sku={producto.Sku} 
                    Cantdisp={producto.Cantdisp}
                />)}
                <br/>
                <button onClick={this.handleCambiarProd}>Cambiar Producto</button>
                <button onClick={this.handleClickCompra}>Comprar</button>
                <br/>
                <span/>{this.state.etiqueta}
            </div>
        </div>
    )        
}  
}
export default Detalles
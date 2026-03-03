function TarjetaProducto({nombre, precio, categoria, disponible}) {
    return(
        <div className="tarjeta">
            <h2>{nombre}</h2>
            <p>{precio}</p>
            <p>{categoria}</p>
            <p>{disponible}</p>
        </div>
    );
}

export default TarjetaProducto;
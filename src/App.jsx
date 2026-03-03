import TarjetaProducto from './TatjetaProducto'
import './App.css'

function App() {
  return(
    <div className="base">
      <img className="Tlf" src="img/Red Magic.jpg" alt="Teléfono" />
      <TarjetaProducto
      nombre="Red Magic 10 air"
      precio={1200000}
      categoria="Dispositivo movil"
      disponible="3 unidades"
      />
    </div>
  );
}

export default App
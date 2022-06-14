import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };
  const onClickExportar = function () {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      

      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">casa en llamas </option>
        <option value="futurama">futurama</option>
        <option value="history">history</option>
        <option value="matrix">matrix</option>
        <option value="philosoraptor">philosoraptor</option>
        <option value="smart">smart guy</option>
        <option value="notanto">no tanto</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="linea 1" />{" "}
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2" />{" "}
      <br />
      <button onClick={onClickExportar}>exportar</button>
      <div className="Meme" id="meme">
        <span>{linea1} </span>
        <br />
        <span>{linea2} </span>
        <img src={`/img/${imagen}.jpg`} />
      </div>
    </div>
  );
}

export default App;

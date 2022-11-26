import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Card
        titulo="Ovo com arroz e pepino"
        imagem="imagemovo.svg"
        preparo="25 minutos"
        porcoes="serve 2 pessoas"
      />
      <Card
        titulo="Ovo com bacon"
        imagem="imagemovo.svg  "
        preparo="5 mintutos"
        porcoes="serve 1 pessoa"
      />
    </div>
  )
}

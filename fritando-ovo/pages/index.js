import Header from "../components/Header";
import CardList from "../components/CardList";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Header/>
      <CardList/>
      <Button>Mais informações</Button>
      <Button danger>Deletar</Button>
      <Button warning>Alterar</Button>
      <Button success>Salvar</Button>
    </div>
  )
}

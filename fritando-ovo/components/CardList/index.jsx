import styles from "./CardList.module.css";
import Card from "../Card";

export default function CardList({ }) {
    return (
        <div className={styles.card_list}>
            <Card
                titulo="Ovo com arroz e pepino"
                imagem="/imagemovo.svg"
                preparo="25 minutos"
                porcoes="Serve 2 pessoas"
            />
            <Card
                titulo="Ovo com arroz e pepino"
                imagem="/pipinovo.svg"
                preparo="25 minutos"
                porcoes="Serve 2 pessoas"
            />
        </div>
    )
}
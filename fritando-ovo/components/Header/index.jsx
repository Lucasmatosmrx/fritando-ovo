import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header} >
            <div>
                <img src="/logo.png" alt="Logo" />
            </div>
            <div>
                <h1>Fritando Ovo</h1>
                <div>Receitas Basicas</div>
            </div>
        </header >
    );
}
export default function UserForm() {
    return(
        <main>
            <h2>Cadastro de usuário</h2>

            <form>
                <label>Nome</label>
                <input type="text" defaultValue={"Nome"} required />

                <button type="button">Confirmar</button>
            </form>
        </main>
    )

}
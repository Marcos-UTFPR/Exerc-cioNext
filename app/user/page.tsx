import Link from "next/link";


export default function UserList() {
    return(
    <main>
        <h2>Usuários</h2>
        <Link href='/user/form'>Novo</Link>

        <div>
            Aqui vai a listagem de usuários da API
        </div>
    </main>
    )
}
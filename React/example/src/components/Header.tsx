interface HeaderProps {
    onCreateNewNote: () => void
}

export function Header({ onCreateNewNote }: HeaderProps) {
    // function createNote() {
    //     Cria uma nota e adiciona no array
    // }
    /**
     * Essa função depende do componente pai para funcionar,
     * então este componente não é um componente puro.
     * Solução: criar uma interface que recebe a função a ser utilizada
     */
    
    const currentDate = new Date().toLocaleDateString()

    return (
    <header>
        <h1>Original example file before refactor</h1>

        <h2>Course: Clean Code</h2>
        <p>By Rocketseat</p>

        <h3>Today is: { currentDate }</h3>

        <button onClick={ onCreateNewNote }>This button do nothing</button>
        {/* <button onClick={ createNote }>This button do nothing</button> */}

    </header>
    )
}
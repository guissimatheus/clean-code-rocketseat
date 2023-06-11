export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
    <footer>
        Copyright &copy; Matheus Guissi {currentYear}
    </footer>
    )
}
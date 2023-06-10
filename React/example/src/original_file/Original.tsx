import { useState } from 'react'

export function App() {
  const [notes, setNotes] = useState<string[]>([])

  // Essa variável está associada apenas ao header da página,
  // então o recomendado seria criar um componente para o header
  const currentDate = new Date().toLocaleDateString()

  // Essa variável está associada apenas ao footer da página,
  // então o recomendado seria criar um componente para o footer
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <header>
        <h1>Original example file before refactor</h1>

        <h2>Course: Clean Code</h2>
        <p>By Rocketseat</p>
        
        <h3>Today is: { currentDate }</h3>

        <button onClick={() => {}}>This button do nothing</button>
      </header>

      <main>
        <section>
          {/*
            Essas estruturas das divs se repetem, mas no momento não há nenhuma lógica envolvida
            Portanto não é recomendado criar componentes neste caso
          */}
          <div>
            <h3>Div 1</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi dolorem fugiat error molestiae, voluptatem deserunt corporis! Hic quibusdam incidunt, a laudantium dolorem unde commodi odit doloremque ut illum error!</p>
          </div>

          <div>
            <h3>Div 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, unde officia sit in odio commodi praesentium iste tempore? Veniam cupiditate maxime odit ut assumenda quam soluta esse a similique numquam.</p>
          </div>
        </section>


        <h2>Notes list</h2>
          <ul>
            { 
              !notes.length 
              ? <li>Empty notes list</li> 
              : notes.map(note => <li key={ note }>{ note }</li>)
            }
          </ul>
      </main>
      
      <hr />
      
      <footer>
        Copyright &copy; Matheus Guissi { currentYear }
      </footer>
    </div>
  )
}
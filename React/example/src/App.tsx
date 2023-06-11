import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export function App() {
	const [notes, setNotes] = useState<string[]>([])

	// Condicional na camada JS
	const isNoteListEmpty = notes.length == 0

	function handleCreateNewNote() {
		// Cria nova nota
	}

	return (
		<div>
			{/* Por conta da passagem da função, o componente Header é um componente puro */}
			<Header onCreateNewNote={handleCreateNewNote}/>

			<main>
				<section>
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
					// notes.length == 0 
					// Condicional foi definida na camada JavaScript
					isNoteListEmpty
					? <li>Empty notes list</li> 
					: notes.map(note => <li key={ note }>{ note }</li>)
				}
				</ul>
			</main>
			
			<hr />

			{/* Toda a lógica foi passada pra dentro do componente Footer */}
			<Footer />
		</div>
	)
}
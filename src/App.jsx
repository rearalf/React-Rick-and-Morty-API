import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/characters/index.jsx';

function App(){
	const urlCharacters = `https://rickandmortyapi.com/api/character/`;
	let dataURL = {
		info: {},
		character: [],
	};

	const [ characters, setCharacters ] = useState(dataURL);
	const [ ulr, setURL ] = useState(urlCharacters);
	const [ page, setPage ] = useState(1);

	useEffect(
		() => {
			fetch(ulr).then(res => res.json()).then(data => setCharacters({ character: data.results, info: data.info }));
		},
		[ ulr ]
	);

	const nextPage = () => {
		setURL(characters.info.next);
		setPage(page + 1);
		scroll();
	};

	const prevPage = () => {
		if (characters.info.prev != null) {
			setURL(characters.info.prev);
			setPage(page - 1);
			scroll();
		}
	};

	const scroll = () => {
		const elemento = document.querySelector('.container');
		elemento.scrollIntoView('auto', 'start');
	};

	return (
		<div className="container">
			<h1 className="title">Rick and Morty</h1>
			<Character character={characters} prevPage={prevPage} nextPage={nextPage} page={page} />
		</div>
	);
}

export default App;

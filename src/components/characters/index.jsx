import React from 'react';
import Paginations from '../paginations/index.jsx';

const Character = props => {
	const { character, info } = props.character;
	return (
		<React.Fragment>
			<div className="characters">
				{character.map((character, index) => (
					<div className="character" key={index} id={index}>
						<div className="image">
							<img src={character.image} alt={character.name} />
						</div>
						<div className="info">
							<h2>{character.name}</h2>
						</div>
					</div>
				))}
			</div>
			<Paginations nextPage={props.nextPage} prevPage={props.prevPage} page={props.page} />
		</React.Fragment>
	);
};

export default Character;

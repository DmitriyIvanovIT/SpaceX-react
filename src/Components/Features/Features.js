import React from 'react';
import RelaxWrapper from 'react-rellax-wrapper';
import './features.css';

const images = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	other: 'starship'
}

const Features = ({ rocketFeatures }) => (
    <section className="features">
		<h2 className="features-title">
			{rocketFeatures ? rocketFeatures.name : null} 
			<br/>
			Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">
							{rocketFeatures ? 
								`${rocketFeatures.height.meters} m / ${rocketFeatures.height.feet} ft`: null}
						</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">
							{rocketFeatures ? 
								`${rocketFeatures.diameter.meters} m / ${rocketFeatures.diameter.feet} ft`: null}
						</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">
							{rocketFeatures ? 
								`${rocketFeatures.mass.kg} kg / ${rocketFeatures.mass.lb} lb`: null}
						</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">
							{rocketFeatures ? 
								`${rocketFeatures.payload_weights[0].kg} kg / ${rocketFeatures.payload_weights[0].lb} lb`: null}
						</td>
					</tr>
				</thead>
			</table>
			
			{rocketFeatures ? 
				<RelaxWrapper speed={10}>
					<img
						src={`./img/${images.hasOwnProperty(rocketFeatures.name) ?
							images[rocketFeatures.name] :
							images.other}.png`}
						alt="rocket"
						className="rocket"
					/>
				</RelaxWrapper> 
			: null}
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{rocketFeatures ? rocketFeatures.description : null}
				</p>
			</article>
		</div>
	</section>
);

export default Features;
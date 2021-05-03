/*import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';



function Tester123() {

	const [viewport, setViewport] = useState({
		latitude: 45.4211,
		longitude: -75.6903,
		width: "100vw",
		height: "100vh",
		zoom: 10
	});

	return (
		<div>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={"pk.eyJ1Ijoic29lcmVudCIsImEiOiJja21jcGY0MjYyZG5lMnhqeDQycHV1bmpxIn0.YIRRLRxytQpUAA5lm-IaLQ"}
				//mapStyle="mapbox://styles/soerent/ckmcpu7lh5lt417qiyvmlllh9"
				onViewportChange={viewport => {
					setViewport(viewport);
				}}
			>
				<Marker
					latitude={55.667}
					longitude={12.5202}
				>
					<button>
						Uni, 3 years
					</button>
				</Marker>
				markers here
			</ReactMapGL>
		</div>
	)
}
export default Tester123*/
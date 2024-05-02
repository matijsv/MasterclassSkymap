var planetarium;
S(document).ready(function() {

	planetarium = S.virtualsky({
		id: 'starmap',
        clock:new Date("Jan 29, 2020, 06:55:07	GMT"),
		projection: 'stereo',
        keyboard: true,
        constellations: true,
        //constellationboundaries: true,
        //ground: true,
		meridian: true,
        gridlines_eq: true,
		showgalaxy: false,
        az: 0,
	
    
        latitude: 50.8, 
        longitude: 6.05,
		
	});

	planetarium.addPointer({
		'ra':10,
		'dec':41,
		'label':'Event Location',
		'colour':'rgb(0,220,220)'
	})

});
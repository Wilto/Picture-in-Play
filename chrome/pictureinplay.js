(function( w, doc ) {
	var pics = document.querySelectorAll( "picture" );

	if ( pics.length > 0 ) {
		var picinplay = document.createElement( "img" );

		picinplay.setAttribute( "class", "picture-in-play" );
		picinplay.setAttribute( "alt", "The `picture` element is in use on this page." );
		picinplay.style.cssText =
			"background-color: #8d1a0e;" +
			"display: block;" +
			"height: 16px;" +
			"width: 16px;" +
			"position: fixed;" +
			"bottom: .25em;" +
			"right: .25em;" +
			"z-index: 9999";

		picinplay.src = "data:image/gif;base64," +
			'R0lGODlhEAAQAKIAAOhVTJEdEoYTBvGOi40aDgAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0' +
			'IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxu' +
			'czp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1' +
			'NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6' +
			'Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJk' +
			'ZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnht' +
			'cE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25z' +
			'LmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9i' +
			'ZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCMTFB' +
			'NEY5MDUxQTExRTQ5MjQxOTA1QTUyMjdFOUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCMTFB' +
			'NEZBMDUxQTExRTQ5MjQxOTA1QTUyMjdFOUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3Rh' +
			'bmNlSUQ9InhtcC5paWQ6N0IxMUE0RjcwNTFBMTFFNDkyNDE5MDVBNTIyN0U5RTEiIHN0UmVmOmRvY3Vt' +
			'ZW50SUQ9InhtcC5kaWQ6N0IxMUE0RjgwNTFBMTFFNDkyNDE5MDVBNTIyN0U5RTEiLz4gPC9yZGY6RGVz' +
			'Y3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6' +
			'+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++' +
			'vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOC' +
			'gYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdG' +
			'RURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsK' +
			'CQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAEAAQAAADMCi63EowyimmlRWGzfvOASCOpAiWKHCm5MqaGjnM' +
			'9OwCdX3n9M4PPl4wlyHIfsNaAgA7';

		doc.documentElement.insertBefore( picinplay, doc.documentElement.firstChild );
	}
} )( this, this.document );
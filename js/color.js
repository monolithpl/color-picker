var colorWheel = [
	[
		{rgba: 'rgb(0, 51, 102)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(51, 102, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(51, 102, 204)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 51, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 153)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 204)', subsets: ['blue', 'dark']},
		{rgba: 'rgb(0, 0, 102)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'rgb(0, 102, 102)', subsets: ['blue', 'green', 'dark']},
		{rgba: 'rgb(0, 102, 153)', subsets: ['blue']},
		{rgba: 'rgb(0, 153, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 102, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 51, 204)', subsets: ['blue']},
		{rgba: 'rgb(0, 0, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 153)', subsets: ['blue', 'dark']}
	],
	[
		{rgba: 'rgb(102, 153, 153)', subsets: ['green']},
		{rgba: 'rgb(0, 153, 153)', subsets: ['green']},
		{rgba: 'rgb(51, 204, 204)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 255)', subsets: ['blue']},
		{rgba: 'rgb(0, 153, 255)', subsets: ['blue']},
		{rgba: 'rgb(0, 102, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 102, 255)', subsets: ['blue']},
		{rgba: 'rgb(51, 51, 204)', subsets: ['blue']},
		{rgba: 'rgb(102, 102, 153)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'rgb(51, 153, 102)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 153)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 204)', subsets: ['green', 'light']},
		{rgba: 'rgb(0, 255, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(51, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(51, 153, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 153, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 102, 255)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'rgb(102, 0, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(102, 0, 204)', subsets: ['blue', 'purple']},
	],
	[
		{rgba: 'rgb(51, 153, 51)', subsets: ['green']},
		{rgba: 'rgb(0, 204, 102)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 153)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 204)', subsets: ['green', 'blue', 'light']},
		{rgba: 'rgb(102, 255, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(102, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(153, 204, 255)', subsets: ['blue', 'light']},
		{rgba: 'rgb(153, 153, 255)', subsets: ['blue', 'purple', 'light']},
		{rgba: 'rgb(153, 102, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(153, 51, 255)', subsets: ['blue', 'purple']},
		{rgba: 'rgb(153, 0, 255)', subsets: ['purple']},
	],
	[
		{rgba: 'rgb(0, 102, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 204, 0)', subsets: ['green']},
		{rgba: 'rgb(0, 255, 0)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(153, 255, 204)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 255)', subsets: ['blue', 'pastel', 'light']},
		{rgba: 'rgb(204, 204, 255)', subsets: ['blue', 'purple', 'pastel', 'light']},
		{rgba: 'rgb(204, 153, 255)', subsets: ['purple', 'light']},
		{rgba: 'rgb(204, 102, 255)', subsets: ['purple', 'pink', 'light']},
		{rgba: 'rgb(204, 51, 255)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(204, 0, 255)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 0, 204)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(0, 51, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 153, 51)', subsets: ['green']},
		{rgba: 'rgb(51, 204, 51)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(153, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 204)', subsets: ['green', 'pastel', 'light']},
		{rgba: 'rgb(255, 255, 255)', subsets: ['white', 'light']},
		{rgba: 'rgb(255, 204, 255)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'rgb(255, 153, 255)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 102, 255)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 0, 255)', subsets: ['pink']},
		{rgba: 'rgb(204, 0, 204)', subsets: ['pink', 'purple']},
		{rgba: 'rgb(102, 0, 102)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(51, 102, 0)', subsets: ['green', 'dark']},
		{rgba: 'rgb(0, 153, 0)', subsets: ['green']},
		{rgba: 'rgb(102, 255, 51)', subsets: ['green']},
		{rgba: 'rgb(153, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(204, 255, 153)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 204)', subsets: ['yellow', 'pastel', 'light']},
		{rgba: 'rgb(255, 204, 204)', subsets: ['pink', 'pastel', 'light']},
		{rgba: 'rgb(255, 153, 204)', subsets: ['pink', 'light']},
		{rgba: 'rgb(255, 102, 204)', subsets: ['pink', 'red', 'light']},
		{rgba: 'rgb(255, 51, 204)', subsets: ['pink']},
		{rgba: 'rgb(204, 0, 153)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 51, 153)', subsets: ['purple', 'dark']},
	],
	[
		{rgba: 'rgb(51, 51, 0)', subsets: ['green', 'brown']},
		{rgba: 'rgb(102, 153, 0)', subsets: ['green']},
		{rgba: 'rgb(153, 255, 51)', subsets: ['green']},
		{rgba: 'rgb(204, 255, 102)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 153)', subsets: ['yellow', 'light']},
		{rgba: 'rgb(255, 204, 153)', subsets: ['orange', 'light']},
		{rgba: 'rgb(255, 153, 153)', subsets: ['orange', 'pink', 'light']},
		{rgba: 'rgb(255, 102, 153)', subsets: ['pink', 'red', 'light']},
		{rgba: 'rgb(255, 51, 153)', subsets: ['pink', 'red']},
		{rgba: 'rgb(204, 51, 153)', subsets: ['purple', 'pink']},
		{rgba: 'rgb(153, 0, 153)', subsets: ['purple']},
	],
	[
		{rgba: 'rgb(102, 102, 51)', subsets: ['brown', 'green']},
		{rgba: 'rgb(153, 204, 0)', subsets: ['green']},
		{rgba: 'rgb(204, 255, 51)', subsets: ['green', 'light']},
		{rgba: 'rgb(255, 255, 102)', subsets: ['yellow', 'light']},
		{rgba: 'rgb(255, 204, 102)', subsets: ['orange', 'yellow', 'light']},
		{rgba: 'rgb(255, 153, 102)', subsets: ['orange', 'light']},
		{rgba: 'rgb(255, 102, 102)', subsets: ['orange', 'red', 'light']},
		{rgba: 'rgb(255, 0, 102)', subsets: ['red', 'light']},
		{rgba: 'rgb(204, 102, 153)', subsets: ['red', 'purple']},
		{rgba: 'rgb(153, 51, 102)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'rgb(153, 153, 102)', subsets: ['brown']},
		{rgba: 'rgb(204, 204, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 255, 0)', subsets: ['yellow']},
		{rgba: 'rgb(255, 204, 0)', subsets: ['yellow', 'orange']},
		{rgba: 'rgb(255, 153, 51)', subsets: ['orange']},
		{rgba: 'rgb(255, 102, 0)', subsets: ['orange']},
		{rgba: 'rgb(255, 80, 80)', subsets: ['red', 'orange']},
		{rgba: 'rgb(204, 0, 102)', subsets: ['red']},
		{rgba: 'rgb(102, 0, 51)', subsets: ['red', 'purple']},
	],
	[
		{rgba: 'rgb(153, 102, 51)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(204, 153, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 153, 0)', subsets: ['orange', 'yellow']},
		{rgba: 'rgb(204, 102, 0)', subsets: ['brown', 'yellow']},
		{rgba: 'rgb(255, 51, 0)', subsets: ['red', 'orange']},
		{rgba: 'rgb(255, 0, 0)', subsets: ['red']},
		{rgba: 'rgb(204, 0, 0)', subsets: ['red']},
		{rgba: 'rgb(153, 0, 51)', subsets: ['red', 'purple', 'dark']},
	],
	[
		{rgba: 'rgb(102, 51, 0)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(153, 102, 0)', subsets: ['brown', 'dark']},
		{rgba: 'rgb(204, 51, 0)', subsets: ['orange', 'red', 'dark']},
		{rgba: 'rgb(153, 51, 0)', subsets: ['brown', 'red', 'dark']},
		{rgba: 'rgb(153, 0, 0)', subsets: ['red', 'dark']},
		{rgba: 'rgb(128, 0, 0)', subsets: ['red', 'brown', 'dark']},
		{rgba: 'rgb(153, 51, 51)', subsets: ['red', 'brown', 'dark']},
	]
]

document.addEventListener('DOMContentLoaded', function(){
	for(var i=0; i<colorWheel.length; i++){
		document.getElementById('color-wheel').innerHTML += ('<div class="color-row" id="row' + i + '"></div>');
		var row = document.getElementById('row' + i)
		row.style.width = colorWheel[i].length * 20 + colorWheel[i].length
		for(var j=0; j<colorWheel[i].length; j++){
			row.innerHTML += ('<div class="color" id="color-' + i + '-' + j + '"></div>')
			var color = document.getElementById('color-' + i + '-' + j)
			color.style.backgroundColor = colorWheel[i][j].rgba
			for(var k=0; k<colorWheel[i][j].subsets.length; k++){
				color.classList.add(colorWheel[i][j].subsets[k])
			}
		}
	}
	
	function showSubsetColors(subset){
		document.getElementById('colors-display').innerHTML += '<div class="subset-display" id="' + subset + '"><br><div class="btn btn-default btn-block">' + subset + ' subset</div><div><br>'
		for(var i=0; i<7; i++){
			colorWheel.forEach(function(row, index) {
				if (index == i || index == (colorWheel.length-1-i)) {
					for(var j=i; j<row.length-i; j++) {
						if (row[j].subsets.indexOf(subset) >= 0) {
							var x = document.getElementById(subset).innerHTML += '<div class="color-display" style="background: ' + row[j].rgba + '; width: ' + randomDivWidth() + 'px;"></div>';
						}
					}
				} else if (i < index && index < 6) {
					if (row[i].subsets.indexOf(subset) >= 0) {
						var x = document.getElementById(subset).innerHTML += '<div class="color-display" style="background: ' + row[i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>'
					}
				} else if (colorWheel.length-1-i > index && index > 6) {
					if (row[row.length-1-i].subsets.indexOf(subset) >= 0) {
						var x = document.getElementById(subset).innerHTML +='<div class="color-display" style="background: ' + row[row.length-1-i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>'
					}
				} else if (index == 6) {
					if (row[i].subsets.indexOf(subset) >= 0) {
						var x = document.getElementById(subset).innerHTML +='<div class="color-display" style="background: ' + row[i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>'
					}
					if (row[row.length-1-i].subsets.indexOf(subset) >= 0) {
						var x = document.getElementById(subset).innerHTML += '<div class="color-display" style="background: ' + row[row.length-1-i].rgba + '; width: ' + randomDivWidth() + 'px;"></div>'
					}
				}
			})
		}
	}

	document.getElementById('color-wheel').addEventListener("click", function(e){
		var color = e.target
		var rgb = color.style.backgroundColor
		console.log(rgb)
		if (rgb != 'rgba(0, 0, 0, 0)'){
			document.getElementById('colors-display').innerHTML = ''
			displayColor(rgb)
			var subsets = color.getAttribute('class').replace("color ", "");
			var subsetArray = subsets.split(" ")
			subsetArray.forEach(function(index){
				showSubsetColors(index)
			})
		}
	})

 	document.getElementById('colors-display').addEventListener("click", function(e) {
		displayColor(e.target.style.backgroundColor)
	})
	
		
	function displayColor(rgb){
		document.getElementById('color-selected').style.display =  'block'
		document.getElementById('color-selected').style.backgroundColor = rgb
	}

	function randomDivWidth(){
		return Math.floor(Math.random()*(101)+20);
	}
})

function generateSVG (data){  //takes in data and returns an SVG string based on the data
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${data.shape} cx="150" cy="100" r="80" fill="${data.color}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.text}</text>

    </svg>`



    return false; //TODO: implement this function
}

module.exports = generateSVG;


// Example SVG
/*<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
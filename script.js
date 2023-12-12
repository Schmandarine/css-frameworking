console.log("hello world");
/* const url = "./tokens-v1.json";
(async () => {
	async function getData(url) {
		const response = await fetch(url);
		return response.json();
	}
	const jsonData = await getData(url);
	const blueArray = Object.entries(jsonData.Color.blue);

	blueArray.map(([key, value]) => {
		createNode({ key, value });
	});
})() */

function createNodes(data, containerDOM) {
	let fragment = document.createDocumentFragment();

	data.map(([key, value]) => {
		let newDiv = containerDOM.querySelector(".template").cloneNode(true);
		newDiv.querySelector(".color").style.backgroundColor = value;
		newDiv.querySelector("[colorValue]").textContent = value;
		newDiv.querySelector("span").textContent = key;
		fragment.appendChild(newDiv);
	});
	containerDOM.textContent = "";
	containerDOM.appendChild(fragment);
}

const TokensJSON = `{
    "Color": {
        "blue": {
            "blue-50": "#eff1fb",
            "blue-100": "#dfe5fb",
            "blue-200": "#c4cffd",
            "blue-300": "#a4b6fe",
            "blue-400": "#7c96fe",
            "blue-500": "#4d6efe",
            "blue-600": "#075BFA",
            "blue-700": "#033cb0",
            "blue-800": "#08297d",
            "blue-900": "#0a1748"
        },
        "gray": {
            "gray-50": "#f1f2f4",
            "gray-100": "#e1e4ea",
            "gray-200": "#c0c6d3",
            "gray-300": "#a1abbf",
            "gray-400": "#8693ac",
            "gray-500": "#6e7a91",
            "gray-600": "#565f71",
            "gray-700": "#3f4655",
            "gray-850": "#23272f"
        },
        "gradients": {
            "akademie": "linear-gradient(45deg, #8800FF 0%, #3E45FF 50%, #22c5e2 100%)"
        },
        "neutral": {
            "black": "#00000",
            "white": "#FFFFF"
        },
        "extended": {
            "green-50": "#dafac2",
            "green-200": "#7cdd40",
            "green-600": "#386917",
            "green-700": "#2a5110",
            "yellow-100": "#fcdcab",
            "yellow-200": "#fcb603",
            "yellow-600": "#805b00",
            "red-100": "#fbd9d0",
            "red-600": "red-600"
        }
    }
}`;
const blueArray = Object.entries(JSON.parse(TokensJSON).Color.blue);
const grayArray = Object.entries(JSON.parse(TokensJSON).Color.gray);
const gradientsArray = Object.entries(JSON.parse(TokensJSON).Color.gradients);
const neutralArray = Object.entries(JSON.parse(TokensJSON).Color.neutral);
const extendedArray = Object.entries(JSON.parse(TokensJSON).Color.extended);

const fontsArray = Object.entries(JSON.parse(TokensJSON).Type);

window.addEventListener("DOMContentLoaded", (event) => {
	createNodes(blueArray, document.querySelector("#blue"));
	createNodes(grayArray, document.querySelector("#gray"));
	createNodes(gradientsArray, document.querySelector("#gradients"));
	createNodes(neutralArray, document.querySelector("#neutral"));
	createNodes(extendedArray, document.querySelector("#extended"));

	createTypeScale(fontsArray, document.querySelector("#typescale"));
});

function createTypeScale(data, containerDOM) {
	console.log("create type scale");
	let fragment = document.createDocumentFragment();

	data.map(([key, value]) => {
		let newDiv = containerDOM.querySelector("[template]").cloneNode(true);
		newDiv.querySelector("[d-family]").textContent = value["d-family"];
		fragment.appendChild(newDiv);
		//console.log("[text] and .class : " + key)
		//console.log(value["d-size"])
		//console.log(value["d-weight"])
		//console.log(value["d-lineHeight"])
		//console.log(value["d-letterSpacing"])
		//console.log(value["d-textDecoration"])
		console.log(Object.entries(value)[0][0]);
		console.log(Object.entries(value)[0][1]);
		console.log(Object.entries(value));
	});
	containerDOM.textContent = "";
	containerDOM.appendChild(fragment);
}

/*

[template]
[text]
[d-family]
[d-size]
[d-weight]
[d-lineHeight]
[d-letterSpacing]
[d-textDecoration]
[preview]

*/

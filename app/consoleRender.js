const colors = require('colors');

const TAB_SIZE = 4;

function render(response) {
	const spaceOffset = 0;
	console.log(`                            RESERVATION: ${response.request.confirmationId}`.padEnd(80, " ").bgMagenta.bold.white);
	renderIntelligently(response, spaceOffset);
}

function renderIntelligently(object, spaceOffset) {
	if (object instanceof Array) {
		renderAsList(object, spaceOffset);
	} else {
		renderAsMap(object, spaceOffset)
	}
}

function renderAsList(collection, spaceOffset) {
	collection && collection.forEach((item, index) => {
		if(typeof item === 'string') {
			print(spaceOffset + TAB_SIZE, `${index + 1}: ${item}`);
		} else {
			print(spaceOffset + TAB_SIZE, `${index + 1}:`);
			renderAsMap(item, spaceOffset + TAB_SIZE);
		}
	})
}

function renderAsMap(item, spaceOffset) {
	item && Object.entries(item).forEach(([key, value]) => {
		const nextOffset = spaceOffset + TAB_SIZE;
		if (value instanceof Array) {
			print(nextOffset, `${key}: `);
			renderAsList(value, nextOffset)
		} else if (value instanceof Object) {
			print(nextOffset, `${key}: `);
			renderAsMap(value, nextOffset)
		} else {
			print(nextOffset, `${key}: ${value}`);
		}
	})
}

function print(offset, content) {
	console.log(`${renderSpaceOffset(offset)}${content}`)
}

function renderSpaceOffset(offset) {
	let space = "";
	var i = offset;
	while (i > 0) {
		space += " ";
		i--
	}
	return space;
}

module.exports = render;
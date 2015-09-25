walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{

	var parent = textNode.parentNode;

	var splitted = textNode.nodeValue.split("browser");

	var newNode = parent.create

	for(var i=0; i< splitted.length - 1; i++) {
	
		parent.insertBefore(document.createTextNode(splitted[i]), textNode);

		var img = document.createElement('img');
		img.src = chrome.extension.getURL("bowser.png");
		parent.insertBefore(img, textNode);

		parent.insertBefore(document.createTextNode("Bowser"), textNode);
	
	}

	parent.insertBefore(document.createTextNode(splitted[splitted.length-1]), textNode);

	textNode.remove();
}



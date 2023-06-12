function generateFamilyTree() {
	fetch('http://localhost:3000/family.json')
		.then(response => response.json())
		.then(familyTree => {
			function createFamilyTree(familyData, parentElement) {
				const node = document.createElement("div");
				node.className = `node ${familyData.gender === 'male' ? 'male' : 'female'}`;
				const nameElement = document.createElement("p");
				const loveEmoticon = createLoveEmoticon();
				// <span class="love-emoticon">&#10084;</span>
				nameElement.textContent = familyData.name + `${familyData?.metadata?.spouse ? ` & ${familyData.metadata.spouse}` : ''}`;
				node.appendChild(nameElement);

				if (familyData.children && familyData.children.length > 0) {
					const connector = document.createElement("div");
					connector.className = "tree-connector";
					node.appendChild(connector);

					const childrenContainer = document.createElement("div");
					childrenContainer.className = "children";
					node.appendChild(childrenContainer);

					familyData.children.forEach(child => {
						createFamilyTree(child, childrenContainer);
					});
				}

				parentElement.appendChild(node);
			}

			const familyTreeContainer = document.getElementById("family-tree");

			createFamilyTree(familyTree, familyTreeContainer);
			addNodeClickListener(handleNodeClick);
		})
		.catch(error => console.error('Error loading JSON file:', error));
}

function createLoveEmoticon() {
	var spanElement = document.createElement('span');
	spanElement.classList.add('love-emoticon');
	spanElement.innerHTML = '&#10084;';
	return spanElement;
}

generateFamilyTree();


function addNodeClickListener(callback) {
	console.log('addNodeClickListener')
	var nodes = document.querySelectorAll('.node');
	console.log(nodes);
	nodes.forEach(function (node) {
		node.addEventListener('click', function () {
			var nodeId = node.dataset.id;
			callback(nodeId);
		});
	});
}

function handleNodeClick(nodeId) {
	event.stopPropagation();
	event.preventDefault();
	console.log('Node clicked:', nodeId);
	// Perform any desired actions based on the clicked node
}

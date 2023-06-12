function addNodeClickListener(callback) {
	console.log('addNodeClickListener')
	var nodes = document.querySelectorAll('.node');

	nodes.forEach(function (node) {
		node.addEventListener('onclick', function () {
			var nodeId = node.dataset.id;
			callback(nodeId);
		});
	});
}

function handleNodeClick(nodeId) {
	console.log('Node clicked:', nodeId);
	// Perform any desired actions based on the clicked node
}

addNodeClickListener(handleNodeClick);

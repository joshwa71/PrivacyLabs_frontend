function sendBuildL2Request() {
    const company = document.getElementById('l2-company').value;

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/build_l2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('l2-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendBuildL3Request() {
    const company = document.getElementById('l3-company').value;
    const urls = document.getElementById('l3-urls').value.split(',');

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/build_l3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, urls }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('l3-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendCompareRequest() {
    const company1 = document.getElementById('company1').value;
    const company2 = document.getElementById('company2').value;
    const term = document.getElementById('term').value;

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/compare_terms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company1, company2, term }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('compare-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendQueryRequest() {
    const company = document.getElementById('query-company').value;
    const layer = document.getElementById('query-layer').value;
    const query = document.getElementById('query-query').value;
    const mode = document.getElementById('query-mode').value;

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, layer, query, mode }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('query-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendGetNodesRequest() {
    const company = document.getElementById('get-nodes-company').value;
    const layer = document.getElementById('get-nodes-layer').value;

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/get_nodes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, layer }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('get-nodes-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function sendGetNodeCountRequest() {
    const layer = document.getElementById('get-node-count-layer').value;

    fetch('https://privacy-labs-demo-6bz7xclj5a-wl.a.run.app/get_node_count', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ layer }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('get-node-count-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

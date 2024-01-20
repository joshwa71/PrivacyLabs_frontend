function sendBuildL2Request() {
    const company = document.getElementById('l2-company').value;
    const industry = document.getElementById('l2-industry').value;

    fetch('http://localhost:8080/build_l2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, industry }),
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
    const industry = document.getElementById('l3-industry').value;
    const urls = document.getElementById('l3-urls').value.split(',');

    fetch('http://localhost:8080/build_l3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, industry, urls }),
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
    const industry1 = document.getElementById('industry1').value;
    const company2 = document.getElementById('company2').value;
    const industry2 = document.getElementById('industry2').value;
    const term = document.getElementById('term').value;

    fetch('http://localhost:8080/compare_terms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company1, industry1, company2, industry2, term }),
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
    const industry = document.getElementById('query-industry').value;
    const layer = document.getElementById('query-layer').value;
    const query = document.getElementById('query-query').value;
    const mode = document.getElementById('query-mode').value;

    fetch('http://localhost:8080/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, industry, layer, query, mode }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('query-response').innerText = JSON.stringify(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

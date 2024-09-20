const schools = ['School A', 'School B', 'School C'];

function autocomplete() {
    const input = document.getElementById('search').value;
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (input.length > 0) {
        const filteredSchools = schools.filter(school => school.toLowerCase().includes(input.toLowerCase()));
        
        filteredSchools.forEach(school => {
            const div = document.createElement('div');
            div.textContent = school;
            div.onclick = () => {
                document.getElementById('search').value = school;
                suggestions.innerHTML = '';
            };
            suggestions.appendChild(div);
        });
    }
}

function initMap() {
    const location = { lat: 30.4428, lng: 78.0664 };
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 10,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

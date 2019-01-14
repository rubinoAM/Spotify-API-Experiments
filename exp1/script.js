const app = {};
app.apiUrl = 'https://api.spotify.com/v1';

app.events = function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        let artists = $('input[type=search]').val();
        artists = artists.split(',');
        let search = artists.map(artistName => app.searchArtist(artistName));
        console.log(search);
    });
};

app.searchArtist = (artistName) => $.ajax({
    url: `${app.apiUrl}/search`,
	method: 'GET',
	dataType: 'json',
    data: {
        q: artistName,
        type: 'artist'
    }
});

app.init = function() {
    app.events();
};

$(app.init);
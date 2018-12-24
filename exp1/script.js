$(document).ready(()=>{
    const app = {};
    app.events = function(){
        $('form').on('submit', function(e){
            e.preventDefault();
            let artists = $('input[type=search]').val();
            console.log(artists);
        });
    };

    app.init = function(){
        $(app.events);
    };

    $(app.init);
});
$(document).ready(function() {
    
    var header = $('button');
    var images = new Array(
        'url("https://f8e35641-a-f3b5a0d0-s-sites.googlegroups.com/a/sherwoodsd.com/emma-jacobs-site/home/curriculum-2016-17-tri-2/IMG_4220.JPG?attachauth=ANoY7cpUeF3lWOUQfN6qK_URoc5n9hOZDJ75shvvPpbUwiCGmBNkCS6g_2BcapQ_nlBa4Oa8J-L67QUKA_ZqZyGi4-aYIKwIKNOigeFpqQUvObWgDjQfBGtcalGbcClvAkYbbPQNQz-MW_58p_RT1GOQXW_33anXK3_HeTdlk6G0sf2mK7MVNPzC4lLCyEa4jMtKUtOJQCM9-_UjZrPZUv-eiZe8CRHDMS6WEvx0lVsr3UaMglbSMNKGD9nu0IqKTPZEJc0D0xru&attredirects=0")',
        'url("http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/gear-wallpaper-6.jpg")',
        'url("https://ak6.picdn.net/shutterstock/videos/23381416/thumb/1.jpg")',
        'url("http://www.maninthehatmusic.co.uk/wp-content/uploads/2014/11/wood-panel-background.jpg")'
    );
   var current = 0;

    function nextImage() {
            console.log("hi Emma");
            current++;
            current = current % images.length;
            header.css('background-image',images[current]);
    };


};

"use strict";
//Making a music Album Function
function make_Album(Artist, title, tracks) {
    const Album = {
        Artist: Artist,
        title: title
    };
    if (tracks != undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
const Album1 = make_Album("Artist 1", "Album Title 1");
console.log(Album1);
const Album2 = make_Album("Artist2", "Album Title 2");
console.log(Album2);
const Album3 = make_Album("Artist3", "Album Title 3", 12);
console.log(Album3);

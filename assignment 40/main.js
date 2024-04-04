function makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toLowerCase() + artist.slice,
        title: title.charAt(0).toLowerCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makealbum("ali", "light");
console.log(album);
album = makealbum("bilal", "red wave");
console.log(album);

function makealbum(artist : string , title: string) {
    const dictionaries = {
        artist : artist.charAt(0).toLowerCase() + artist.slice,
        title :title.charAt(0).toLowerCase() + title.slice(1)
    };
    return dictionaries ;
}

let album = makealbum ( "ali", "light")
console.log(album)

album = makealbum("bilal" ,"red wave")
console.log(album)
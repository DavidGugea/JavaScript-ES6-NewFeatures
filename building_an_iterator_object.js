artists = [
    "artist_1",
    "artist_2",
    "artist_3",
    "artist_4",
    "artist_5",
];
let arrayWrapper = {
    array : artists
};

arrayWrapper[Symbol.iterator] = function(){
    let array = this.array;
    let counter = this.array.length - 1;

    return{ 
        next : function(){
            if(counter < 0){
                return {
                    done: true
                };
            }else{
                return { 
                    value : array[counter--],
                    done : false
                }
            }
        }
    }
};

for(let artist of arrayWrapper){
    console.log(artist);
}
function build_iterator_of(array){
    let index = 0;
    let done_value = false;
    return {
	next : function(){
	    if(index === array.length){
		// Set the done value to be true
		done_value = true;	
		// Reset the index so that we start from the beginning once the iterator has reached the end.
		index = 0;

		return this.next();
	    }else{
		let prev_index = index;
		index++;
		return ({
		    value : array[prev_index],
		    done : done_value
		});
	    }
	}
    }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let iterator = build_iterator_of(array);

for(let i = 0 ; i < array.length*7 ; i++){
    let obj = iterator.next();
    console.log(`VALUE -- > ${obj.value} || DONE -- > ${obj.done}`);
}

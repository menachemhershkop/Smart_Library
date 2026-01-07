import { library } from "./library.js";
import { validateBook } from "./valid.js";

export function addBook(library, book){
    // console.log(book.id);
    
    for (let i=0; i<library.length; i++) {     
        console.log(library[i].id == book.id)

        if (library[i].id == book.id){
            
            return 'This id already exist'
        }
    };
    if (validateBook(book)== 'Valid'){
    library.push(book);
    return 'books adding';
    
}
    else{
        return validateBook(book);
        
    }

}

export function removeBook(library, bookId){
    let flag =false;
    for (let i=0; i<library.length; i++){
        if (library[i].id == bookId){
            library.splice(i,1)
            flag = true
        }
    }
    if (flag){
        return library;
    }
    else{
        return 'ID not found';
    };
};

export function updateCopies(library, cookId, delta){
    let flag =false;
    
    for (let i=0; i<library.length; i++){
        if (library[i].id == cookId){
            if (delta > 0){
            library[i].copies +=delta
            flag = true
        }
        if (delta < 0){
            if ((library[i].copies - delta)<=0){
                library[i].copies = 0
                flag = true;
            }
        else{
            library[i].copies -= delta
            flag =true;
        }
        }
    }
    if (flag){
        return library;
    }
    else{
        return 'ID not found';
    };
}
}
addBook(library, {id:12, title:'drama', category:'action', copies:15, minCopies:3, expiresAt:'null'})
// console.log(addBook(library, {id:123, title:'drama', category:'action', copies:15, minCopies:3, expiresAt:'null'}))

// console.log(library);
// console.log(removeBook(library, 12));
console.log(updateCopies(library,12,-3));

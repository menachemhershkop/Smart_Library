export function validateBook(book){
    let wrongTypes = [];
    let incurrect = [];
    const keys = Object.keys(book);
    const neccery = ['id', 'title', 'category', 'copies', 'minCopies', 'expiresAt'];
    neccery.forEach((key)=> {
        if (!(keys.includes(key))){
            wrongTypes.push(key)
        }
    })
    if (typeof book.id != 'string' && book.id==0){
        incurrect.push('id')
    }
    if (typeof book.title != 'string' && book.title==0){
        incurrect.push('title')
    }
    if (typeof book.category != 'string' && book.category==0){
        incurrect.push('category')
    }
    if (typeof book.copies != 'number' && book.copies>=0){
        incurrect.push('copies')
    }
    if (typeof book.minCopies != 'number' && book.minCopies>=0){
        incurrect.push('minCopies')
    }
    if (typeof book.expiresAt != 'string' || book.expiresAt != 'null'){
        incurrect.push('expiresAt')
    }
    if (wrongTypes.length ==0 && incurrect.length == 0){
        return 'Valid'
    }
    return {wrongFildes: wrongTypes, incurrectFildes:incurrect}
}

// console.log(validateBook({id:12, title:'drama', category:'action', copies:15, minCopies:3, expiresAt:'null'}));

export function normalizeBook(book){
    console.log(null);
    
}

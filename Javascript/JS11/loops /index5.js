
let library = [ 
    {
        author: ' J. K. Rowling ',
        title: 'Harry Potter and the Sorcerers Stone Book 1',
        readStatus: true
    },
    {
        author: 'Mary Shelley',
        title: 'Frankenstein',
        readStatus: true
    },
    {
        author: 'J. R. R. Tolkien',
        title:  'The Lord of the Rings', 
        readStatus: false
    }];

// function buch(){
//     const result = library.forEach(function(read){
//         let status = (read.readStatus === true ? 'has been read' : 'has not been read');
//         console.log(`Das Buch ${read.title} von ${read.author} hat den Status ${status}` );
//     })
// }
// buch();

// function remove(array , title){
//     let result = array.filter(function(item){
//         return item.title !== title;
//     });
//     console.log(result);
    
// }
// remove(library,'Frankenstein');
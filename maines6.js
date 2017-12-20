class Book{
  constructor (title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}
class UI{
  addBookToList(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const tr = document.createElement('tr');
    //Insert columns to tr
    tr.innerHTML= `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class = "delete">X</a></td>
    `
    list.appendChild(tr);
      // console.log(tr)
      
  };
  showAlert(message,className){
 //Create div
 const div = document.createElement('div');
 //Add class
 div.className = `alert ${className}`;
 div.appendChild(document.createTextNode(message));

 //Insert to the DOM - get Parent element
 const container = document.querySelector('.container');
 const form  = document.querySelector('#book-form');
 //Insert alert
 container.insertBefore(div,form);
 //Timeout after 3 s
 setTimeout(function(){
   document.querySelector('.alert').remove();
 },3000);
  };
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  };
  deleteBook(target){
    if(target.className ==='delete'){
      target.parentElement.parentElement.remove();
    }
  }
}
document.getElementById('book-form').addEventListener('submit',function(e){
  //Get form values
    const title  = document.getElementById('title').value,
          author  = document.getElementById('author').value,
          isbn  = document.getElementById('isbn').value;
    // console.log(title,author,isbn);
    e.preventDefault();
  
  //Instaitiate book
    const book  = new Book(title,author,isbn);
  
  //Instatiate UI
  
  const ui = new UI();
  console.log(ui);
  
  //Validation
  if(title===''||author===''||isbn===''){
    // alert('Failed');
    //Error alert in UI
   ui.showAlert('Please fill the fields','error');
  }
  else{
  //Add book to List  
  ui.addBookToList(book);
  
  ui.showAlert('Book successfully added','success');
  
  //Clear input fields
  ui.clearFields();
  }
    // console.log(book);
  });
  //Event Listener for Delete
  document.getElementById('book-list').addEventListener('click',function(e){
  
    // console.log('Deleted...')
    const ui = new UI();
  
    //Delete book
    ui.deleteBook(e.target);
    //Show Alert
    ui.showAlert('Book Deleted Successfully','success')
   e.preventDefault();
  })
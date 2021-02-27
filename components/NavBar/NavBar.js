
import classes from './NavBar.module.css';

function NavBar() {
    return (
        <div className = {classes.NavBar}>  
        <h5 id = {classes.books}>Книги</h5>
        <h5 id = {classes.supplies}>Канцтовары</h5>
        <h5 id = {classes.school}>Школа</h5>
        <h5 id = {classes.toys}>Игрушки</h5>
        <h5 id = {classes.sale}>Распродажа</h5>
      </div>
    );
  }
  
  export default NavBar;
  
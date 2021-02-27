

import classes from './Content.module.css';

function Content_area() {
  return (
   
    <div className = {classes.content_area}>
    <div className = {classes.book_shower}>
      <div className = {classes.title}></div>
      <div className = {classes.slider}>
        <div className = {classes.book_shower_body}>
          <img src = 'https://img-gorod.ru/26/022/2602293_preview.jpg'></img>
          <div className = {classes.book_shower_name}>fewfqefefwqe</div>
          <div className = {classes.book_shower_author}>feqwfqf</div>
          <div className = {classes.book_shower_cost}>250</div>
          <button className = {classes.book_shower_buy}>Купить</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Content_area;


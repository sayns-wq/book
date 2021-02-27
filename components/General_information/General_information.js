
import MySlider from '../slider/slider';
import classes from './General_information.module.css';

function GeneralInformation() {
  return (
   
    <div className = {classes.GeneralInformation}>
    
    <MySlider/>
    <div className = {classes.compillation}>
      <div className = {classes.best_of_the_best}>
        <div className = {classes.big_card}>
      <div className = {classes.big_card_header}>
        <p className = {classes.big_card_title}><b>Лучшие из лучших</b></p>
      </div>
      <div className = {classes.big_card_content}>
        <img src = 'https://www.chitai-gorod.ru/ii/img/bestsell/bestsell.svg'></img>
        
      </div>
      <div className = {classes.big_card_text}>
          <p className = {classes.big_card_description}>Подборка лучших книг</p>
          <p className = {classes.big_card_lower_description}>На основании продаж интернет магазина</p>
        </div>
        </div>
      </div>
      <div className = {classes.top_compilation}>
        <div className = {classes.compilation_card}>
          <div className = {classes.compilation_card_picture}>
            <img src = "https://img-gorod.ru/uf/24/269/24269.png" alt = 'picture_of_meditation'></img>
          </div>
          <div className = {classes.compilation_card_information}>
          <div className = {classes.compilation_card_title}>
            День здоровья
          </div>
          <div className = {classes.compilation_card_description}>
            Книги о спорте медициое и не только
          </div>
          </div>
        </div>
      </div>
      <div className = "middle_compilation">
      <div className = {classes.compilation_card}>
          <div className = {classes.compilation_card_picture}>
            <img src = "https://img-gorod.ru/uf/24/269/24269.png" alt = 'picture_of_meditation'></img>
          </div>
          <div className = {classes.compilation_card_information}>
          <div className = {classes.compilation_card_title}>
            День здоровья
          </div>
          <div className = {classes.compilation_card_description}>
            Книги о спорте медициое и не только
          </div>
          </div>
        </div>
      </div>
      <div className = "low_compilation">
      <div className = {classes.compilation_card}>
          <div className = {classes.compilation_card_picture}>
            <img src = "https://img-gorod.ru/uf/24/269/24269.png" alt = 'picture_of_meditation'></img>
          </div>
          <div className = {classes.compilation_card_information}>
          <div className = {classes.compilation_card_title}>
            День здоровья
          </div>
          <div className = {classes.compilation_card_description}>
            Книги о спорте медициое и не только
          </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default GeneralInformation;


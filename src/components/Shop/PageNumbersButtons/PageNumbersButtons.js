import React from 'react';
import PageNumbersButton from './PageNumbersButton/PageNumbersButton';
import PageNumbersArrows from './PageNumbersArrows/PageNumbersArrows';


//props.possiblePages holds the length of productsToShow, which is array from arrays of 
// max 12 items
const pageButtons = (props) => {
    console.log(props.currentPage - 2 <= 0);
    let buttons = [];
    let firstPageButton, secondPageButton, thirdPageButton, fourthPageButton, fifthPageButton;
        firstPageButton = (props.currentPage - 2 <= 0) ?
            null : <PageNumbersButton key={0} clicked={props.clickToPageNumber}>{props.currentPage - 2}</PageNumbersButton>;
       
        secondPageButton = (props.currentPage - 1 <= 0) ?
            null: <PageNumbersButton key={1} clicked={props.clickToPageNumber}>{props.currentPage - 1}</PageNumbersButton>;
      
        thirdPageButton = <PageNumbersButton key={2} clicked={props.clickToPageNumber} disabled>{props.currentPage}</PageNumbersButton>;
      
        fourthPageButton = (props.currentPage + 1 > props.possiblePages) ?
            null: <PageNumbersButton key={3} clicked={props.clickToPageNumber}>{props.currentPage + 1}</PageNumbersButton>
        
        fifthPageButton = (props.currentPage + 2 > props.possiblePages) ?
            null: <PageNumbersButton key={4} clicked={props.clickToPageNumber}>{props.currentPage + 2}</PageNumbersButton>
        
        buttons.push(firstPageButton,secondPageButton,thirdPageButton,fourthPageButton,fifthPageButton);
        
        for(let i = 0; i<buttons.length; i++){
            if(buttons[i] === null){
                buttons = buttons.slice(0, i).concat(buttons.slice(i + 1, buttons.length));
                i--;
            }
        };
        if(buttons.length === 4){
            if(props.currentPage+1 === props.possiblePages)
            buttons = buttons.slice(1);
            else
            buttons = buttons.slice(0,3)
        }
        else if(buttons.length === 5){
            buttons = buttons.slice(1, 4);
        };
        buttons.unshift(
            <PageNumbersArrows 
                key={5}
                clicked={props.goToPreviousPage} 
                disabled={props.currentPage === 1}>&#60;</PageNumbersArrows>);
        buttons.push(
            <PageNumbersArrows
                key={6}
                clicked={props.goToNextPage} 
                disabled={props.currentPage === props.possiblePages}>&#62;</PageNumbersArrows>)

    return (
      <div> 
          {buttons}
      </div>
    );
};

export default pageButtons;
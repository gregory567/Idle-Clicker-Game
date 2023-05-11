//set new winCondition and show the instructions modal for this level
winCondition = 200;
showModalLevel3();
console.log("You reached level 3!");

//we want to place elements into the container of the original pizza, therefore we need to select it
const pizzaButtonContainer = document.getElementById("pizza-button-container");
//set the starting value for the public demand
var pizzaDemand = 100;


//include level 3 javascript components as soon as the player reaches level 3:

//include pizzaPrice Component
var pizzaPriceComponent = document.createElement('script');
pizzaPriceComponent.setAttribute("src", "./include js/level3Components/pizzaPriceComponent.js");
scriptContainer.appendChild(pizzaPriceComponent);
//include pizzaDemand Component
var pizzaDemandComponent = document.createElement('script');
pizzaDemandComponent.setAttribute("src", "./include js/level3Components/pizzaDemandComponent.js");
scriptContainer.appendChild(pizzaDemandComponent);
//include advertising Component
var advertisingComponent = document.createElement('script');
advertisingComponent.setAttribute("src", "./include js/level3Components/advertisingComponent.js");
scriptContainer.appendChild(advertisingComponent);

//function for showing the instructions modal of level 3
function showModalLevel3() {

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'level3Modal';
    modal.tabIndex = '-1';
    modal.role = 'dialog';
    modal.setAttribute('aria-labelledby', 'level3ModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    // Create the modal dialog element
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
    modalDialog.role = 'document';

    // Create the modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header element
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    // Create the modal title element
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'level3ModalLabel';
    modalTitle.textContent = 'Congratulations, you have reached Level 3!';

    // Create the close button element
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // Create the close button icon
    const closeButtonIcon = document.createElement('span');
    closeButtonIcon.setAttribute('aria-hidden', 'true');
    closeButtonIcon.innerHTML = '&times;';

    // Append the close button icon to the close button
    closeButton.appendChild(closeButtonIcon);

    // Append the modal title and close button to the modal header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body element
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Create the modal body content paragraphs
    const modalBodyContentParagraph_1 = document.createElement('p');
    modalBodyContentParagraph_1.textContent = 'You can now change the price of the pizzas and manipulate the public demand.'
     
    const modalBodyContentParagraph_2 = document.createElement('p');
    modalBodyContentParagraph_2.textContent = 'Your second way to boost demand and sell more pizzas is through investing into advertising. You can distribute flyers or start a poster campaign.'
    
    const modalBodyContentParagraph_3 = document.createElement('p');
    modalBodyContentParagraph_3.textContent = 'To reach level 4 you need a total of ' + winCondition + ' Pizzas sold.';
 
    // Append the modal body content to the modal body
    modalBody.appendChild(modalBodyContentParagraph_1);
    modalBody.appendChild(modalBodyContentParagraph_2);
    modalBody.appendChild(modalBodyContentParagraph_3);

    // Create the modal footer element
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Create the "Continue" button
    const continueButton = document.createElement('button');
    continueButton.type = 'button';
    continueButton.classList.add('btn', 'btn-primary');
    continueButton.setAttribute('data-bs-dismiss', 'modal');
    continueButton.textContent = "Continue";

    // Append the "Continue" button to the modal footer
    modalFooter.appendChild(continueButton);

    // Append the modal header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append the modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append the modal dialog to the modal
    modal.appendChild(modalDialog);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Show the modal
    $('#level3Modal').modal('show');
}
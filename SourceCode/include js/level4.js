//win condition for this level is to be nuber 1 on the highscore board

showModalLevel4();
console.log("You reached level 4!");


//include event Component
var eventComponent = document.createElement('script');
eventComponent.setAttribute("src", "./include js/level4Components/eventComponent.js");
scriptContainer.appendChild(eventComponent);


//include highscore Component
var highscoreComponent = document.createElement('script');
highscoreComponent.setAttribute("src", "./include js/level4Components/highscoreComponent.js");
scriptContainer.appendChild(highscoreComponent);


//function for showing the instructions modal of level 4
function showModalLevel4() {

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'level4Modal';
    modal.tabIndex = '-1';
    modal.role = 'dialog';
    modal.setAttribute('aria-labelledby', 'level4ModalLabel');
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
    modalTitle.id = 'level4ModalLabel';
    modalTitle.textContent = 'Congratulations, you have reached Level 4!';

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
    modalBodyContentParagraph_1.textContent = 'You now have competition! Try to get a higher Pizzas Sold count than your competitors! Every Day random events might happen. Take advantage of them!'
     
    const modalBodyContentParagraph_2 = document.createElement('p');
    modalBodyContentParagraph_2.textContent = 'To win the game you need to reach number one on the highscore list! Good Luck!';
    

 
    // Append the modal body content to the modal body
    modalBody.appendChild(modalBodyContentParagraph_1);
    modalBody.appendChild(modalBodyContentParagraph_2);

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
    $('#level4Modal').modal('show');
}


//function for showing winning screen
function showModalWin() {

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'winModal';
    modal.tabIndex = '-1';
    modal.role = 'dialog';
    modal.setAttribute('aria-labelledby', 'winModal');
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
    modalTitle.id = 'winModalLabel';
    modalTitle.textContent = 'Congratulations!';

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
    modalBodyContentParagraph_1.textContent = 'You have the best pizza in town! Here are the final scores: ';



    // Append the modal body content to the modal body
    modalBody.appendChild(modalBodyContentParagraph_1);



    // Create an unordered list element
    const list = document.createElement('ul');

    // Iterate over the array and create list items
    initialHighscores.forEach(function(entry) {
        // Create a list item element
        const listItem = document.createElement('li');
        listItem.textContent = entry.name + ' - ' + entry.score;

        // Append the list item to the unordered list
        list.appendChild(listItem);
    });

    // Append the unordered list to modalBodyContentParagraph_1
    modalBody.appendChild(list);



    // Create the modal body content paragraphs
    const modalBodyContentParagraph_2 = document.createElement('p');
    modalBodyContentParagraph_2.textContent = 'By clicking on continue you can start a new game.';
    // Append the modal body content to the modal body
    modalBody.appendChild(modalBodyContentParagraph_2);


    // Create the modal footer element
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Create the "Continue" button
    const continueButton = document.createElement('button');
    continueButton.type = 'button';
    continueButton.classList.add('btn', 'btn-primary');
    continueButton.setAttribute('data-bs-dismiss', 'modal');
    continueButton.textContent = "Continue";


    // Add event listener to the "Continue" button to reload the site
    continueButton.addEventListener('click', function() {
        location.reload();
    });

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
    $('#winModal').modal('show');
}

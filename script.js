
// tooggle 
document.getElementById("all-jobs-btn").addEventListener("click", ()=>{
    const divs = document.getElementsByClassName("take-all")

    for (const div of divs){
        div.classList.add("hidden")
    }

    document.getElementById("jobs-available-section").classList.remove("hidden")
    document.getElementById("jobs-available-section").classList.add("block")
})


document.getElementById("interview-btn").addEventListener("click", ()=>{
    const divs = document.getElementsByClassName("take-all")

    for (const div of divs){
        div.classList.add("hidden") 
    }

    document.getElementById("interview-section").classList.remove("hidden")
    document.getElementById("interview-section").classList.add("block")
})

document.getElementById("rejected-btn").addEventListener("click", ()=>{
    const divs = document.getElementsByClassName("take-all")

    for (const div of divs){
        div.classList.add("hidden") 
    }

    document.getElementById("rejected-section").classList.remove("hidden")
    document.getElementById("rejected-section").classList.add("block")

})      
// toggle between the sections ends here

// 
let interviewCount = parseInt(document.getElementById("interview-count").innerText)

let totalCount = parseInt(document.getElementById("total-count").innerText)

let rejectedCount = parseInt(document.getElementById("rejected-count").innerText)


document.getElementById("card-container").addEventListener("click", (e)=>{
    if (e.target.closest(".interview-click")){

        if(interviewCount >= totalCount){
            alert("no available jobs for interview")
            return
        }

        interviewCount++
        document.getElementById("interview-count").innerText = interviewCount   


        //find clicked btn's parent card
        //cause we want to know from which card the click event is coming from
        const parentOfClickedBtn = e.target.closest(".card-single")


        // find the interview btn inside the .card-single or in other word we can say under this --e.target.closest(".card-single")-- clicked event find find the interview btn
        const interviewBtn = parentOfClickedBtn.querySelector(".not-applied")

            if(interviewBtn){interviewBtn.innerHTML = `Interviewed`

                document.getElementById("interview-hide").classList.add("hidden")


            interviewBtn.classList.remove("btn-active");
            interviewBtn.classList.add("btn-success"); 
            }

          
        //coloning dom element
        const clonedCard = parentOfClickedBtn.cloneNode(true)

            //remove delete btn from cloned card
        const removeDeleteBtn = clonedCard.querySelector(".delete-btn")
        if(removeDeleteBtn){
            removeDeleteBtn.remove()
        }       

        document.getElementById("interview-section").appendChild(clonedCard)

        





        } 
        else if (e.target.closest(".reject-click")){

        if(rejectedCount >= totalCount){
            alert("no available jobs for rejected")
            return
        }

        rejectedCount++
        document.getElementById("rejected-count").innerText = rejectedCount 



        const parentOfClickedBtn = e.target.closest(".card-single")

        const rejectBtn = parentOfClickedBtn.querySelector(".not-applied")

            if(rejectBtn){rejectBtn.innerHTML = `Rejected`

                document.getElementById("rejected-hide").classList.add("hidden")

            rejectBtn.classList.remove("btn-active");
            rejectBtn.classList.add("btn-error"); 
            }

        const clonedCard = parentOfClickedBtn.cloneNode(true)

        const removeDeleteBtn = clonedCard.querySelector(".delete-btn")
        if(removeDeleteBtn){
            removeDeleteBtn.remove()
        }   

        document.getElementById("rejected-section").appendChild(clonedCard)     

    }

})


//


//delete btn
document.getElementById("card-container").addEventListener("click", (e)=>{
    if (e.target.closest(".delete-btn")){

        const card = e.target.closest(".card-single")
        card.remove();


        availableCount = parseInt(document.getElementById("toal-available").innerText)
        availableCount--
        document.getElementById("toal-available").innerText = availableCount   
    }
})



//interview-click----------at the same time also remove the reject------------

// Select all interview buttons
const interviewBtnClicked = document.querySelectorAll(".interview-click");
const rejectBtnClickBtns = document.querySelectorAll(".reject-click");

// Loop through each interview button
for (const btn of interviewBtnClicked) {
    btn.addEventListener('click', (e) => {
        // Hide the clicked interview button
        btn.classList.add("hidden");

        // Find the corresponding reject button and hide it
        const rejectBtn = btn.closest('.card-single').querySelector('.reject-click');
        if (rejectBtn) {
            rejectBtn.classList.add("hidden");
        }

        

        // Hide the buttons for the cloned card as well
        const clonedInterviewBtn = clonedCard.querySelector(".interview-click");
        const clonedRejectBtn = clonedCard.querySelector(".reject-click");

        if (clonedInterviewBtn) clonedInterviewBtn.classList.add("hidden");
        if (clonedRejectBtn) clonedRejectBtn.classList.add("hidden");

        // Append the cloned card to the interview section
        // document.getElementById("interview-section").appendChild(clonedCard);
    });
}


// reject-click----------at the same time also remove the interview------------

for (const btn of rejectBtnClickBtns) {
    btn.addEventListener('click', (e) => {
        // Hide the clicked reject button
        btn.classList.add("hidden");

        // Find the corresponding interview button and hide it
        const interviewBtn = btn.closest('.card-single').querySelector('.interview-click');
        if (interviewBtn) {
            interviewBtn.classList.add("hidden");
        }

        // Hide the buttons for the cloned card as well
        const clonedInterviewBtn = clonedCard.querySelector(".interview-click");
        const clonedRejectBtn = clonedCard.querySelector(".reject-click");

        if (clonedInterviewBtn) clonedInterviewBtn.classList.add("hidden");
        if (clonedRejectBtn) clonedRejectBtn.classList.add("hidden");

        // Append the cloned card to the rejected section
        document.getElementById("rejected-section").appendChild(clonedCard);
    });
}           
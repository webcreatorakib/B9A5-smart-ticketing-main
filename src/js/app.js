const seats = document.querySelectorAll('.seat');
const seatNumber =document.getElementById('seatCount');
let constSeat = document.getElementById('seatCount').innerText;
let countNumber = Number(constSeat);
const bookingSeat = document.getElementById('bookingSeat');
let bookingSeatAdd = 0;
for(let seat of seats){
    seat.addEventListener('click',function(){
        countNumber = countNumber -1;
        bookingSeatAdd = bookingSeatAdd + 1;
        if(bookingSeatAdd > 4 || countNumber < 0){
            alert("Not allow more 4")
        }else{
            bookingSeat.innerHTML = bookingSeatAdd;
            seatNumber.innerText = countNumber;
        }
    });
}


if(seats.clicked == true){


}


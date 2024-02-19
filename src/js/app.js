const seats = document.querySelectorAll('.seat');
const seatNumber =document.getElementById('seatCount');
//find total seat
const totalSeat = document.getElementById('seatCount').innerText;
let totalSeatNumber = Number(totalSeat);
//booking seat counter
const bookingSeat = document.getElementById('bookingSeat');
let bookingSeatAdd = 0;
//Enable coupon field
const coupon = document.querySelector('.coupon');
const applyBtn = document.querySelector('.apply');
//Selected items;
const SelectedSeat = document.querySelector('.selectedItems');
const ticketPrice = Number(document.querySelector('.ticketPrice').innerText);
let ticketPriceCounter = 0;
const tbody = document.querySelector('.tbody');
//Total Price
const totalPrice = document.querySelector('.totalPrice');
//Total price after discount;
const discountPrice = document.querySelector('.discountPrice');
//Coupon Code
const coupon1 = document.querySelector('.coupon1').innerText;
const coupon2 = document.querySelector('.coupon2').innerText;
const couponContainer = document.querySelector('.couponContainer');
//submit
const submit = document.querySelector('.submit');
const inputNumber = document.getElementById('number');
for(let seat of seats){
    seat.addEventListener('click',function(event){
        totalSeatNumber = totalSeatNumber - 1;
        bookingSeatAdd = bookingSeatAdd + 1;
        //Enable Coupon Field;
        if(bookingSeatAdd === 4){
            coupon.removeAttribute('disabled');
            applyBtn.removeAttribute('disabled');
            applyBtn.style.background = '#1DD100';
        }
        // Not Allow More 4 Seats, button background, total counting seat,
        if(bookingSeatAdd > 4 || totalSeatNumber < 0){
            alert("Not allow more 4")
        }else{
            bookingSeat.innerHTML = bookingSeatAdd;
            seatNumber.innerText = totalSeatNumber;
            //Btn Background and Selected items disabled
            const seatValue = event.target.innerText;
            const seatValueLower = seatValue.toLowerCase();
            const bgStyle = document.querySelector('.'+ seatValueLower);
            bgStyle.style.background = "#1DD100";
            bgStyle.style.color = "#FFFFFF";
            bgStyle.setAttribute('disabled','');
            //selected items
            SelectedSeat.style.display = 'none';
            const newTr = document.createElement('tr');
            newTr.innerHTML = `
            <td class="px-0.5 md:px-1rem">${seatValue}</td>
            <td class="px-0.5 md:px-1rem">Economy</td>
            <td class="text-end px-0.5 md:px-1rem">550</td>
            `;
            tbody.appendChild(newTr);
            //ticketPrice
            ticketPriceCounter = ticketPriceCounter + ticketPrice;
            totalPrice.innerHTML = ticketPriceCounter;
            discountPrice.innerHTML = ticketPriceCounter;
        };
        //Button click and enable submit button
        inputNumber.addEventListener('keypress', function(event){
            const eventValue = event.target.value
            if(eventValue != ' '){
                submit.removeAttribute('disabled');
                submit.style.background = '#1DD100';
            }
        });
    });
};


//Coupon validation;
applyBtn.addEventListener('click', function(){
    const couponText = coupon.value;
    if(coupon1 === couponText && couponText != ''){
        const discount = ticketPriceCounter * 15 / 100;
        discountPrice.innerHTML =ticketPriceCounter - discount;
        couponContainer.style.display = 'none';
    }else if(coupon2 === couponText){
        const discount = ticketPriceCounter * 20 / 100;
        discountPrice.innerHTML =ticketPriceCounter - discount;
        couponContainer.style.display = 'none';
    }else{
        alert('please input valid coupon')
    }
});


//Submit
const success = document.getElementById('success')
const footer = document.getElementById('footer');
const header = document.getElementById('header');
const main = document.getElementById('main');
submit.addEventListener('click', function(){
    footer.style.display = 'none';
    header.style.display = 'none';
    main.style.display = 'none';
    success.style.display = 'block';
});

//continue
const continueBtn = document.querySelector('.continue');
continueBtn.addEventListener('click',function(){
    footer.style.display = 'block';
    header.style.display = 'block';
    main.style.display = 'block';
    success.style.display = 'none';
})
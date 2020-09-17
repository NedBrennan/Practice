var myElement = document.querySelector('.circle')

makeTimer(100)

function makeTimer(lim) {
    var counter = 0;
    setInterval(timeIt, 50)
    function timeIt() {
        if(counter <= lim) {
            myElement.style.height = counter + 'px'
            counter ++
        }
    }

}

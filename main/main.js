var balls = document.getElementsByClassName('eye-ball');
        document.onmousemove = function(){
            var x = event.clientX * 100 / window.innerWidth + "%";
            var y = event.clientY * 150 / window.innerHeight + "%";

            for (var i=0; i<2;  i++){
                balls[i].style.left = x;
                balls[i].style.top = y;
                balls[i].style.transform = "translate(-"+x+",-"+y+")";
                }
            }
            hasscrolled = false;
            window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            console.log("scorlling")
            console.log(scrolled); 
            if(scrolled < -10){
                hasscrolled = true;
            }
            console.log(hasscrolled)
            if(scrolled > -3 && hasscrolled == true){
                window.location.href = '../';
            }
        }
    )
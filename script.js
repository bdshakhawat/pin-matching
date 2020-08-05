
        document.getElementById('notification-alert').style.visibility = "hidden";
        const randomBtn = document.getElementById('number-generator');
                randomBtn.addEventListener('click', function(){
                    const random = document.getElementById('randomValue').value 
                    =(Math.round(1000 + Math.random() * 9000));
                })
        const submitBtn = document.getElementById('submit-button');
        submitBtn.addEventListener('click', function () {
                    const randomNum = document.getElementById('randomValue').value;
                    const inputNum = document.getElementById('inputValue').value;
                    if (randomNum === inputNum) {
                        document.getElementById("matched").style.visibility = "visible";
                    }
                    else
                        document.getElementById("not-matched").style.visibility = "visible";


                }
)  
                function allRemove() {
                    document.getElementById("inputValue").value = " ";
                }

                function singleRemove() {

                    const str = document.getElementById('inputValue').value;
                    document.getElementById("inputValue").value = str.slice(0, -1);
                }
                
                    
                



    
var questions = [
    {
        question: "HTML stands for",
        option1: "Hyper Text markup language",
        option2: "Hyper Link markup language",
        option3: "Hyper Text makeup language",
        correctAns: "Hyper Text markup language"
    },
    {
        question: "CSS stands for",
        option1: "Cascading Style sheet",
        option2: "Cascading Styling sheet",
        option3: "Cascading super sheet",
        correctAns: "Cascading Style sheet"
    }, {
        question: "In how many ways can CSS be written in?",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAns: "3"
    }, {
        question: "Which tag gives your the largest heading in html",
        option1: "<h6>",
        option2: "<h2>",
        option3: "<h1>",
        correctAns: "<h1>"
    }, {
        question: "how many data types in js?",
        option1: "6",
        option2: "7",
        option3: "8",
        correctAns: "8"
    }
    , {
        question: "how many days in febuary",
        option1: "30",
        option2: "28",
        option3: "29",
        correctAns: "28"
    }
]
var index = 0;
var socre = 0;
minn = 0;
millsec= 0;
second = 0;
 function timer(){
    
    var mins = document.getElementById('timer')
    // console.log(mins)
    millsec++
    if(millsec > 100){
        second++
        millsec = 0


        

    }
    if(second>60){
        minn++
        second = 0
    }
    if(minn>=2){
        minn=0
        nextQuestion();
    }
    
    mins.innerHTML = minn + ':' + second
    // nextQuestion() 

 }
 
 setInterval(timer,10)
// console.log(questions[0]['question'])

var parques = document.getElementById("para")
// ques.innerHTML = questions[index]['question']


var option1 = document.getElementById("opt1")
var option2 = document.getElementById("opt2")
var option3 = document.getElementById("opt3")
var sumbtn = document.getElementById("btn")


function nextQuestion() {
    var selectedValue = document.getElementsByName("options");
    for (i = 0; i < selectedValue.length; i++) {
        if (selectedValue[i].checked) {
            var slectedoption = selectedValue[i].value
            var slectedquestion = questions[index  -1]["question"]
            var selectedAns = questions[index -1][`option${slectedoption}`]
            var correctAns = questions[index -1]["correctAns"]
            
            
            
            
            
            if (selectedAns == correctAns) {
                socre++
            }
            
        }
        
        selectedValue[i].checked = false
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }

      sumbtn.disabled = true
    
      
    if (index > questions.length -1 ) {
        Swal.fire(
            'Good job!',
        `Your percentage is ${((socre / questions.length)*100).toFixed(2)}`,
            'success'
          )
        
    }
    else {
        
        
        
        parques.innerHTML = questions[index]['question']
        option1.innerText = questions[index]["option1"]
        option2.innerText = questions[index]["option2"]
        option3.innerText = questions[index]["option3"]
        index++
        
    

}


}

function clicked() {
    sumbtn.disabled = false
    // option1.checked = false
    // option2.checked = false
    // option3.checked = false
}

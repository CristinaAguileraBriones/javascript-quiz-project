class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){
        this.currentQuestionIndex ++
    }

    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            // Seleccionamos un índice aleatorio entre 0 y i
            const j = Math.floor(Math.random() * (i + 1));
            // Intercambiamos los elementos this.questions[i] y this.questions[j]
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
        return this.questions;
    }

    checkAnswer(answerSelected){ 
        let currentQuestion = this.getQuestion()
        if (currentQuestion.answer === answerSelected){
           this.correctAnswers++
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex < this.questions.length){
            return false
        }else if (this.currentQuestionIndex === this.questions.length){
            return true
        }
    }

    filterQuestionsByDifficulty(difficulty) { 
        if (difficulty >= 1 && difficulty <= 3){ 
            
            this.questions = this.questions.filter((question)=>{
                
                return question.difficulty === difficulty }) 
        
        }
    }
    averageDifficulty() {

        

        let suma = this.questions.reduce((acc, eachNumber)=>{

            if(this.questions.difficulty===undefined){


                return acc
            }


            return acc + eachNumber.difficulty

        },0)

        let numQuestionsWithDifficulty = this.questions.filter((question) => {
            return question.difficulty !== undefined.length
        
        })

    // Si no hay preguntas con dificultad definida, retornamos null
    if (numQuestionsWithDifficulty === 0) {
        return null;
    }

        
    }

  
}

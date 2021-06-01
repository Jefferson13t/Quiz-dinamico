const root = document.getElementById('root')

class question {
    constructor(question, answers, correctAnswer){
        this.question = question,
        this.answers = answers,
        this.correctAnswer = correctAnswer
    }
    
}

let questionStorage = {
    questions: [], 
    addQuestion(quest, ans, correct) {
        this.questions.push(new question(quest, ans, correct))
        console.log('a new question was added')
    }
}

questionStorage.addQuestion('qual a maior montanha do mundo', ['Monte evereste', 'pao de açucar', 'scaa','csac'], 'a')
questionStorage.addQuestion('qual palavra nao tem traducao em inglês', ['amor', 'pernilongo', 'saudade','batata'], 'c')
questionStorage.addQuestion('qual finalidade da placa mae', ['chingar o filho', 'agregar os componentes de um microcomputador', 'gerar bebes','sei la'], 'd')


class App extends React.Component {
    render(){
        return(
            <div className="container"> 
                <h1>Quiz Dinâmico</h1>
                <QuestionContainer quest={this.props.quest}/>
            </div>
        )
    }
}

class QuestionContainer extends React.Component {
    render(){
        let final = this.props.quest.questions.map(a=> <div key={a.question} className="question__container"> 
            <h2>{a.question}</h2>
            <AnswerContainer ans={a}/>
            
            </div>)
        return(
            <div className="question__container--grid">
                {final}
                <AddNewQuestion quest={this.props.quest}/>

            </div>
        )
    }
}

class AnswerContainer extends React.Component{
    render(){
        let final = this.props.ans.answers.map(a=><div key={a}>
                <p className="answer__container--answer">{a}</p>
            </div>)
        return(
            <div className="answer__container">
                {final}
            </div>
        )
    }
}

class AddNewQuestion extends React.Component {
    constructor(props){
        super(props)
    }
    teste = () => {console.log('teste')}
    render(){
        return(
            <div className="add__question">
                <form action="#" onSubmit={() => this.teste()}>
                    <input className="add__question--inputs" type="text" placeholder="Insira uma nova pergunta"/>
                    <input className="add__question--inputs" type="text" placeholder="Alternativa a"/>
                    <input className="add__question--inputs" type="text" placeholder="Alternativa b"/>
                    <input className="add__question--inputs" type="text" placeholder="Alternativa c"/>
                    <input className="add__question--inputs" type="text" placeholder="Alternativa d"/>
                    <input className="add__question--inputs" type="text" placeholder="Qual alternativa é a correta?"/>
                    <input className="add__question--button" type="submit"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App quest={questionStorage}/>, root)
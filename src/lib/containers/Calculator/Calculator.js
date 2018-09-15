import React from 'react';
import Buttons from '../../components/Buttons'
import Display from '../../components/Display'
import { Button, ButtonGroup, Container, Row} from 'reactstrap';



class Calculator extends React.Component {

    state = { expression: "" };

    /**
    * Update the expression value in the state to the current latest string in the Input.
    */
    _onChange = (e) =>{
        this.setState({expression: e.target.value}

        )
    }


    /**
    * For all digit and operator buttons except "=", update expression value in the state by adding the buttons value to it.
    * @param {string} val - The sring value of the clicked button.
    */
    _onClick = (val) =>{
        if(isNaN(this.state.expression.substr((this.state.expression).length - 1))==true && (isNaN(val)==true) && val!='+' && val!='-'){
            this.setState({expression: (this.state.expression).replace(/.$/,val)})
        }

        else{
            this.setState({expression: this.state.expression + val})
        }

        
    }


    /**
    * Update the expression value in the state to an empty string on click of the "C" button.
    */
    _onClear = () =>{
        this.setState({expression: ""}

        )
    }


    _onDelete = () =>{
        this.setState({expression: (this.state.expression).slice(0, -1)}

        )
    }


    /**
    * Update the expression value in the state to the calculated answer on click of the "=" button.
    */
    _onEvaluate = () =>{

        let expression = (this.state.expression).replace('x','*')
        expression = (expression).replace('^(-1)','**(-1)')
        try{
            let ans=(eval(expression)).toString()
            this.setState({expression: ans })
        }catch(err){
            this.setState({expression: "error" })  
        }
        
    }

    _onEvaluateSquareRoot = () =>{

        let expression = (this.state.expression).replace('x','*')
        try{
            let ans=(Math.sqrt(expression)).toString()
            this.setState({expression: ans })
        }catch(err){
            this.setState({expression: "error" })     
        }   
    }
   
    render() {

        return(
            <Container>
                <Row>
                    <Display expression={this.state.expression} onChange={this._onChange}/>
                </Row>
                <Row>
                    <Buttons onClick={this._onClick} onClear={this._onClear} onDelete={this._onDelete} onEvaluate={this._onEvaluate} onEvaluateSquareRoot={this._onEvaluateSquareRoot}/>
                </Row>
            </Container>
        );

    }

}

export default Calculator;
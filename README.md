# basic-react-calculator
A simple react calculator
## Installation
Run the following command:
`npm install basic-react-calculator`

## Usage
```
import Calculator from 'basic-react-calculator'  

class CalculatorExample extends React.Component {

	//color prop specifies the color of the button which when clicked opens the calculator
	
  render() {
    return (

    		<Calculator color="primary"/>
    		<Calculator color="secondary"/>
    		<Calculator color="success"/>
    		<Calculator color="info"/>
    		<Calculator color="warning"/>
    		<Calculator color="danger"/>
    		<Calculator color="link"/>
    	);
  }
}
```
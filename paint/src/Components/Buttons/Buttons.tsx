import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core'

class Buttons extends React.Component<ButtonProps> {
 
  ButtonPressed = (index: any) => {
	this.props.ButtonsCallback(index)
  }

  render() {
    return (
    <div  style={{display: 'flex', justifyContent:'center', paddingTop: '20px', paddingBottom:'20px'}}>
		<ButtonGroup variant="contained" color='primary' aria-label="contained primary button group">
			<Button color={this.props.selected === 0 ? 'primary' : 'default'} onClick={()=>this.ButtonPressed(0)}>Pencil</Button>
			<Button color={this.props.selected === 1 ? 'primary' : 'default'}onClick={()=>this.ButtonPressed(1)}>Fill</Button>
		</ButtonGroup>
	</div>
    );
  }
}

interface ButtonProps {
	ButtonsCallback: (data: number) => any
	selected: number
}

export default Buttons
import React from 'react';
import TextField from '@material-ui/core/TextField';

class MatrixSizeSelector extends React.Component<MatrixSizeSelectorProps> {
 
  onChangeSize = (event: any) => {
      
      let x = event.target.value

      //handling less than 2 values
      if(x < 2){
        x = 2
      }
      
    this.props.MatrixSelectorCallback( x )
  }
  
  render() {
    return (
    <div  style={{display: 'flex', justifyContent:'center', paddingTop: '10px', paddingBottom:'20px'}}>
	    <div style={{display: 'flex', flexDirection:'row'}} >
             <div style={{padding: '5px'}}>
                 <h4>Size:</h4>
                 <TextField
                    id="filled-number"
                     label="Number"
                    type="number"
                    InputLabelProps={{
                     shrink: true,
                     }}
                    variant="filled"
                    value={this.props.size}
                    onChange={this.onChangeSize}
                 />
             </div>
        </div>
	</div>
    );
  }
}

interface MatrixSizeSelectorProps {
    size: number
    MatrixSelectorCallback: (size: number) => any
}

export default MatrixSizeSelector
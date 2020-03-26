import React from 'react';
import { CirclePicker } from 'react-color';

class ColorPicker extends React.Component<ColorPickerProps> {
 
  handleChangeComplete = (color: any) => {
      console.log(color.hex, typeof(color.hex))
    this.props.ColorPickerCallback(color.hex)
  };

  render() {
    return (
      <div style={{display: 'flex', justifyContent:'center', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', paddingBottom:'20px'}}>
         <CirclePicker
          color={ this.props.color }
          onChangeComplete={ this.handleChangeComplete }
         />
      </div>
    );
  }
}

interface ColorPickerProps {
    ColorPickerCallback: (color: any) => any
    color: string
}

export default ColorPicker
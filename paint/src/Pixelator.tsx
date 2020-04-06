import React from 'react';
import './Pixelator.css';
import ColorPicker from './Components/ColorPicker';
import Paper from './Components/PaperV2'
import Buttons from './Components/Buttons'
import MatrixSizeSelector from './Components/MatrixSizeSelector'
import Canvas from './Components/Canvas'
import {FillAlgo} from './Utils/Fill'

class Pixelator extends React.Component<PixelatorProps> {
  state = {
    selected: 0,
    newList: [] as any,
    size: 5,
    color: '#000000' as any,
    initColor: '#eeaaee'

	//selected : 0 = pencil, 1 = fill
  };

  MatrixSelectorCallback = (size: any) => {
    this.state.size = size
    this.createList()
  }

  ButtonsCallback = (selected: number) => {
    this.setState({selected})
  }

  ColorPickerCallback = (color: any) => {
      console.log(color, typeof(color))
      this.setState({color:color})
  }
  CanvasCallback = (x: number, y: number) => {

    if(this.state.selected === 0) { //pencil

        let newList = this.state.newList
        newList[x][y].color = this.state.color
        this.setState({newList: newList})
    }
    
    else if(this.state.selected === 1){//fill
       
        let newList = this.state.newList

        // Call FillAlgo function, will return all connected items
        let result = FillAlgo(x, y, newList, this.state.color, newList[x][y].color)
  
        this.setState({newList: result})
    }

  }

  componentDidMount = () => {
      this.createList()
  }

  createList = () => {
    const {size, initColor} = this.state

    let arra = []

    for(var i = 0; i<size; i++){
        arra[i] = new Array(size)
    }

    for(var i = 0; i < size; i++){
        for(var j = 0; j< size; j++){
            arra[i][j] = {color: initColor}
        }
    }

    this.setState({newList: arra})

  }

  render() {

    const {selected, newList, size, color} = this.state
    return (
        <div className="Window">

            <div className="SideBar">
                <Paper elevation={10}>
                <MatrixSizeSelector size = {size} MatrixSelectorCallback = {this.MatrixSelectorCallback}/>
                <Buttons selected = {selected} ButtonsCallback = {this.ButtonsCallback} />
                <ColorPicker color={color} ColorPickerCallback = {this.ColorPickerCallback} />
                </Paper>
            </div>

             <div className="Canvas">
                 <Canvas CanvasCallback={this.CanvasCallback} selected={selected} list={newList} size={size} color={color} />
            </div>
      </div>
    );
  }
}

interface PixelatorProps {

}

export default Pixelator
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
    list: [] as any,
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
  CanvasCallback = (item: any) => {
    console.log(item)
    if(this.state.selected === 0) { //pencil
        let list = this.state.list

        list[item.index].color = this.state.color
        this.setState({list: list})
        console.log(this.state.color, this.state.list)
    }
    else if(this.state.selected === 1){//fill
        let list = this.state.list

        // Call FillAlgo function, will return all connected items
        let result = FillAlgo(this.state.list, item, this.state.size)

        console.log('FILL RESULT', result, result[0].color)
        //Change each item's color

        result.forEach(element => {
            list[element.index].color = this.state.color
        });
        
        this.setState({list: list})
    }

  }

  componentDidMount = () => {
      this.createList()
  }

  createList = () => {
    const {size, initColor} = this.state

    let width = size
    let height = size
    let arr = []
    let widthCount = 1
    let heightCount = 1
    let index = 0

    while(widthCount <= width){
      while(heightCount <= height){
        let x = {color: initColor, x: widthCount, y: heightCount, index}
        arr.push(x)
        heightCount = heightCount + 1
        index = index + 1
      }
      widthCount = widthCount + 1
      heightCount = 1
    }
   
   console.log(arr)
   this.setState({list: arr})

  }

  render() {

    const {selected, list, size, color} = this.state
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
        <Canvas CanvasCallback={this.CanvasCallback} selected={selected} list={list} size={size} color={color} />
      </div>
      </div>
    );
  }
}

interface PixelatorProps {

}

export default Pixelator
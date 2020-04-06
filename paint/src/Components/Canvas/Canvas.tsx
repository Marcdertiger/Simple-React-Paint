import React from 'react';

class Canvas extends React.Component<CanvasProps> {

  state = {
    renderingCycles: 0
  }
  itemClicked = (x: number, y: number) => {
    this.props.CanvasCallback(x, y)
  }

	componentWillReceiveProps(newProps: any) {
    console.log('new props canvas')
    this.setState({renderingCycles: this.state.renderingCycles + 1})
  }

  render() {

    const {list} = this.props

   
    return (
      <div  style={{display: 'flex', justifyContent:'center', padding: '30px'}}>
       {list.map((row: any, i: number)=>(
            <div key={i}>
              {row.map((item: any, j: number)=>(
                <div style={{backgroundColor: item.color, display: 'flex', width: 40, height: 40, margin: 10}} onClick={()=>this.itemClicked(i,j)}>
                  <br />
                </div>
              ))}
            </div>
          ))
        }
    </div>
    );
  }
}

interface CanvasProps {
  selected: number,
  list: any,
  size: number,
  color: any,
  CanvasCallback: (x: number, y: number) => any
}

export default Canvas;

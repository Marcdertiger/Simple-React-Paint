import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Canvas extends React.Component<CanvasProps> {

  state = {
    renderingCycles: 0
  }
  itemClicked = (item: any) => {
    this.props.CanvasCallback(item)
  }

	componentWillReceiveProps(newProps: any) {
    console.log('new props canvas')
    this.setState({renderingCycles: this.state.renderingCycles + 1})
  }

  render() {
    
    return (
      <div  style={{display: 'flex', justifyContent:'center', padding: '30px'}}>
       <GridList cols={this.props.size} cellHeight={20} >
          {this.props.list.map((item:any) =>(
            <GridListTile key={item.index}>
              <div style={{backgroundColor: item.color, display: 'flex'}} onClick={()=>this.itemClicked(item)}>
                <br />
              </div>
            </GridListTile>
      ))}
      </GridList>
    </div>
    );
  }
}

interface CanvasProps {
  selected: number,
  list: any,
  size: number,
  color: any,
  CanvasCallback: (item: any) => any
}

export default Canvas;

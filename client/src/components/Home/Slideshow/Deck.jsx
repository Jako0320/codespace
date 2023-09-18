import React, { Component, Fragment } from 'react'
import Card from './Card';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
        cards: [
          <>
            <Card picsum={'https://picsum.photos/800/350'} id="one" key="one" />
            <Card picsum={'https://picsum.photos/800/352'} id="two" key="two" />
            <Card picsum={'https://picsum.photos/800/353'} id="three" key="three" />
          
            </>
        ]
    }
  }

componentDidMount() {
  this.number_of_cards_by_index
}

  render() {
    return (
      <>
       <Fragment>
        <div ref={ref_id => this.view_port = ref_id} style={styles.view_port}>
            <div ref={ref_id => this.images= red_id} style={styles.images_container}>
                {this.state.cards}
            </div>
        </div>
       </Fragment>
      </>
    )
  }
}

const styles = {
  view_port: {
    margin: 0,
    padding: 0,
    width: '500px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // overflow: 'hidden'

  },
  images_container: {
    margin: 0,
    padding: 0,
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}



export default Deck;
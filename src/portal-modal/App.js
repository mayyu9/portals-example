import React from 'react';
import Modal from './Modal'

class App extends React.Component{
    state = { showModal: false};

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    render(){
        return(
            <React.Fragment>
                <Modal open={this.state.showModal} close={this.toggleModal} >
                    Test from Modal
                </Modal>
                <button onClick={this.toggleModal}>Show Modal !!</button>
            </React.Fragment>
        )
    }
}

export default App;
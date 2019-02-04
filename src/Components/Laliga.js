import React, { Component } from 'react';

//crear context

const LaligaContext = React.createContext();
export { LaligaContext };

class Laliga extends Component {

    state = {
        equipos : [
            {
              nombre: 'Real Madrid',
              titulos: 35
            },
            {
              nombre : 'Barcelona',
              titulos: 25
            },
            {
              nombre: 'Atlético de Madrid',
              titulos: 10
            }
        ]
    }


    render() { 
        return ( 
            <LaligaContext.Provider value={{

                state: this.state.equipos,

                esCampeon: (id) => {

                    const equipos = [...this.state.equipos];

                    equipos[id].titulos = equipos[id].titulos + 1;

                    this.setState({
                        state : equipos
                    })

                }
            }}>
                {this.props.children}
            </LaligaContext.Provider>
         );
    }
}
 
export default Laliga;
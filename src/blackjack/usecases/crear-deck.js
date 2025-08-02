import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param   {Array<string>} tiposDeCartas Ejemplo:['C','D','H','S'];
 * @param   {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck de cartas. 
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

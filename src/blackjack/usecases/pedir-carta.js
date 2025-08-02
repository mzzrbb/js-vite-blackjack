/**
 *Esta funcion saca una carta del maso. 
 * @param {Array<string>} deck regresa un arreglo de carta.
 * @returns {Array<string>} retorna una carta de deck.
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
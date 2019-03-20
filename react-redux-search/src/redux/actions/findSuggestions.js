/*Las acciones son funciones que retornan un
objeto */

export const type = 'findSuggestions'; /* El type sirve para identificar la accion*/

const findSuggestions = (text) => {
  return {
    type,
    payload:text,
  }
}


export default findSuggestions;

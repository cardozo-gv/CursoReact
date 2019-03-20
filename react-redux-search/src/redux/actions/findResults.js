/*Las acciones son funciones que retornan un
objeto */

export const type = 'findResults'; /* El type sirve para identificar la accion*/

const findResults = (text) => {
  return {
    type,
    payload:text,
  }
}


export default findResults;

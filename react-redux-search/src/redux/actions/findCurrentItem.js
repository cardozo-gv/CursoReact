/*Las acciones son funciones que retornan un
objeto */

export const type = 'findCurrentItem'; /* El type sirve para identificar la accion*/

const findCurrentItem = (id) => {
  return {
    type,
    payload:id,
  }
}


export default findCurrentItem;

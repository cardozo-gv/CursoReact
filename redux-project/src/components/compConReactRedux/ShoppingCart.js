import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {removeFromCart} from '../../actionCreators';
import { connect } from 'react-redux';
import React from 'react';

const styles = {
  footer:{
    fontWeight: 'bold'
  }
}
const ShoppingCart = (props) => {
    return(
      <Panel header="Shopping Cart">
        <Panel.Heading>Shopping Cart</Panel.Heading>
        <Table fill>
          <tbody>
            {props.cart.map(product =>
             <tr key={product.id}>
               <td>{product.name}</td>
               <td className="text-right">${product.price}</td>
               <td className="text-right">
                 <Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}>
                  <Glyphicon glyph="trash" />
                 </Button></td>
             </tr>)}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${props.cart.reduce((sum,product)=> sum + product.price,0)}
              </td>
            </tr>
          </tfoot>
        </Table>
      </Panel>
    );
}

const mapStateToProps = state => {
  return {
  // armamos un objeto solo con los
  // datos del store que nos interesan
  // y lo devolvemos
    cart : state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product)); /*el dispatch recibe el método del actionCreators */
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);

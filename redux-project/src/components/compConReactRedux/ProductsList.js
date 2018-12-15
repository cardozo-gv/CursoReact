import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../../actionCreators';
import { connect } from 'react-redux';

const styles = {
  products : {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },

  product:{
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
}

const ProductsList = (props) => {
    return(
      <div style={styles.products}>
        {props.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name}/>
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>

            </div>

          </div>)}
      </div>
    )
}

/*
  addToCart(product){
    store.dispatch(addToCart(product));
  }
}*/

const mapStateToProps = state => {
  return {
    products : state.products
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product){
      dispatch(addToCart(product))
    }

 } //return
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);

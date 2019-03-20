import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import  AppBannerContainer from '../containers/AppBannerContainer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

function Results(props){

  const {
    results,
    goTo,
  } = props;

  const isEmpty = results.length ===0;

  return(
    <Fragment>
      <CssBaseline/>
      <AppBannerContainer/>

      <div className="results-page">
        {isEmpty ?
          <Typography variant="h5"
            component="h3"
            className="page-message">
            No hay resultados
          </Typography>
          :
          results.map( item =>
            <div key={item.id} className="card-container">
              <Card className="card"
                onClick={() => goTo(`/details/${item.id}`)}>


                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography component="p">
                      {item.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>

            </div>
          )
        }
      </div>
    </Fragment>
  )
}

export default Results;

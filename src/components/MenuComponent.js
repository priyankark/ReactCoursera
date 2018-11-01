import React, {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';
class Menu extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }
    /*
    renderDish(dish) {
        if(dish!=null) {
            return(
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5">
                    <Card>
                     <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText>{dish.description} </CardText>
                    </CardBody>
                    </Card>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5">
                    </div>
                </div>
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }
    */
    render() {
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                
                    {/*this.renderDish(this.state.selectedDish)*/}
                </div>
               
                    <DishDetail dish={this.state.selectedDish}/>

            

            </div>
        );
    }
}

export default Menu;
import React, {Component} from 'react';
//import './CSS/CartMain.css';
//import Container from 'react-bootstrap/Container';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';
import CartItems from "./Components/itemList";
import PaymentBox from "./Components/payment";
//import {withRouter} from'react-router-dom';
//import {height} from "@fortawesome/free-solid-svg-icons/faAd";


class MainComponent extends Component{

    constructor(props){
        super(props);
        this.state ={

            numOfItems:0,
            price:0,
            totalPrice:0,

        }
        
    }





    //-----get number of items and update the state

    getNumOfItems =(number)=>{

        this.setState({
            numOfItems:number
        });

    }

    //---get total price----

    getTotalPrice = (price) =>{
        this.setState({
            totalPrice:price
        });

    }



    //--------Render function implements here-------------

    render(){
        return(
            <div className="container">
                
                    <br/> <br/> <br/>
                    <div className="title">  

                            <h1>
                                <span>&nbsp;&nbsp;&nbsp;<img src={require('./images/favouritecart.png')}/></span>
                                My Shopping Cart</h1>

                    </div>


                    <CartItems  numItems = {this.getNumOfItems} tprice = {this.getTotalPrice}  ></CartItems>


                    <PaymentBox items = {this.state.numOfItems} price = {this.state.totalPrice} ></PaymentBox>
                


            </div>


        );
    }



}
export default MainComponent;
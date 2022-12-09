import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../UI/MyButton';




export default class Discount extends Component {

        state ={
            discountStart:0,
            discountEnd: 40
        }

        porcentage = () => {
            if(this.state.discountStart < this.state.discountEnd){
                this.setState({
                    discountStart: this.state.discountStart + 1
                })

            }
        }
        componentDidUpdate(){
            setTimeout(()=>{
            this.porcentage()
            },30)
        }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                     onReveal={()=> this.porcentage()}
                    
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span> OFF</span>
                        </div>
                    </Fade>
                     <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 30th November</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, fugit? Facilis molestias quam consequatur voluptate consectetur cupiditate voluptatibus! Vitae accusamus porro sint laboriosam, repellat optio commodi beatae enim aliquid iste?</p>
                            <div>
                               <MyButton
                               text="purchase tickets"
                               bck="#ffa800"
                               color="#ffffff"
                               link="facebook.com"/>
                            </div>
                        </div>
                    </Slide> 

                </div>
            </div>
        )
    }
}


import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utills/MyButton';

class Discount extends Component {

    state = {discountStart:0, discountEnd:30}

    /*porcentage animation */
    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart: this.state.discountStart + 1})
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

                    <Fade onReveal={()=> this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>UNTIL SEPTEMBER 24th</h3>
                            <p>Nam non metus vel ex ultrices consequat sit amet vitae enim. Etiam finibus fermentum ultricies. Morbi gravida felis a molestie tristique. 
                            Mauris et scelerisque libero. Donec sit amet mollis est. 
                            Pellentesque interdum, diam ac porta placerat, mauris odio pretium nibh, eget finibus sem purus eget sapien. 
                            Maecenas non dignissim magna.</p>

                            <MyButton text="Purchase tickets" bck="#ffa800" color="#ffffff" link="http://google.com"/>

                        </div>

                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;
import React, { Component } from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";


class Pricing extends Component {
  state = {
    prices: [100, 150, 2500],
    position: ["Regular", "VIP", "Politician"],
    desc: [
      "Lorem ipsum dilor sir emet , consrtyera adposcig elit,sed do elurs",
      "Dolore magna aliqua ut wmin ad minin wenia,quia nosturud ",
      "Duis aute irrre dolar in repredhederit in volupate viet",
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };
  showBoxes = () => (
    this.state.prices.map((box, i) => (
     <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <div>
                <span>{this.state.position[i]}</span>
              </div>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="purchase"
                bck="#ffa800"
                color="#fffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
     </Zoom>
     
      

    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
      </div>
    );
  }
}

export default Pricing;

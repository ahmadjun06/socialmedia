import React from "react";
import sugegs_1 from "../assets/sugges-1.png";
import sugegs_2 from "../assets/sugges-2.png";
import sugegs_3 from "../assets/sugges-3.png";
import sugegs_4 from "../assets/sugges-4.jfif";
import sugegs_5 from "../assets/sugges-5.jfif";
import sugegs_6 from "../assets/sugges-6.jfif";
class SideBarBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [
        {
          image: sugegs_1,
          name: "Jesica william",
          job: "Grapic Designer",
        },
        {
          image: sugegs_2,
          name: "John Doe",
          job: "PHP Developer",
        },

        {
          image: sugegs_3,
          name: "Poonam",
          job: "Developer",
        },
        {
          image: sugegs_4,
          name: "Bill Gates",
          job: "C & C+Developer",
        },

        {
          image: sugegs_5,
          name: "Jesica William",
          job: "Grapic Designer",
        },
        {
          image: sugegs_6,
          name: "John Doe",
          job: "Developer",
        },
      ],
    };
  }
  render() {
    return (
      <div className="side-bar-bottom">
        <div className="suggestions-nav">
          Suggestions <i class="fas fa-ellipsis-v"></i>
        </div>
        <div className="suggestions-box">
          {this.state.suggestions.map((value) => {
            return (
              <div className="suggestion">
                <img src={value.image} alt="avatar" />
                <div className="texts">
                  <p className="name">{value.name}</p>
                  <p className="job">{value.job}</p>
                </div>
                <button className="add">+</button>
              </div>
            );
          })}
        </div>
        <div className="view">view more</div>
      </div>
    );
  }
}

export default SideBarBottom;

import React from 'react';
import '../../css/QuestionBoard.css'
import {connect} from "react-redux";
import {Pie} from 'react-chartjs-2';

class QuestionComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            data1: {
                labels: ['Question', 'All'],
                datasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: [
                            '#8bb29c',
                            '#C9DE00'
                        ],
                        hoverBackgroundColor: [
                            '#501800',
                            '#4B5000'
                        ],
                        data: [30, 59]
                    }
                ]
            },
            data2: {
                labels: ['Select', 'OtherSelect'],
                datasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: [
                            '#8bb29c',
                            '#C9DE00'
                        ],
                        hoverBackgroundColor: [
                            '#501800',
                            '#4B5000'
                        ],
                        data: [65, 59]
                    }
                ]
            }
        }
    }


    render() {
        return <div className={"questions-boards"}>
            <img src="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-115495-a_1024x1024.jpg?v=1571439886"
                 alt={"Image1"}/>
            <div>
                <Pie
                    data={this.state.data1}
                    options={{
                        title: {
                            display: true,
                            text: 'Tick Count',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                    height={300}
                />
                <Pie
                    data={this.state.data2}
                    options={{
                        title: {
                            display: true,
                            text: 'Choose Rating',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                    height={300}
                />

            </div>
            <img src="https://cdn.shopify.com/s/files/1/1148/8924/products/MPW-101316-a_1024x1024.jpg?v=1571439882"
                 alt={"Image2"}/>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {loginGoogle: state.loginGoogle}
};

export default connect(
    mapStateToProps,
    null
)(QuestionComponent);




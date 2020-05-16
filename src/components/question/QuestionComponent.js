import React from 'react';
import '../../css/QuestionBoard.css'
import {connect} from "react-redux";
import {Pie} from 'react-chartjs-2';
import axios from "axios";
import {SERVER} from "../../helper/PathHelper";
import {EventSourcePolyfill} from 'event-source-polyfill';
import {selectRouter} from "../../actions";

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
            },
            pairs: null,
            pair: '',
            item1Source: null,
            item2Source: null

        };

        this.handleCreatePairs = this.handleCreatePairs.bind(this);
        this.updatePair = this.updatePair.bind(this);
        this.startEventSource = this.startEventSource.bind(this);
        this.handleSentPair = this.handleSentPair.bind(this);

    }


    componentDidMount() {
        this.handleCreatePairs();
    }


    handleCreatePairs = async () => {
        await axios.get(SERVER + "/pairs/create-pairs", {
            headers: {
                Authorization: "Bearer" + ' ' + this.props.loginUser.token
            }
        })
            .then(res => {
                console.log("RESPONSE handleCreatePairs:", res);
                this.setState({pairs: res.data.data});
                this.startEventSource();
                setTimeout(() => this.handleSentPair(1), 1000);
            })
            .catch(error => {
                console.log("ERROR handleCreatePairs:", error);

            })
    }


    handleSentPair = async (click) => {
        await axios.post(SERVER + "/pairs/send-pair", {
            pairId: this.state.pair,
            clickItem: click,
            pairs: this.state.pairs
        }, {
            headers: {
                Authorization: "Bearer" + ' ' + this.props.loginUser.token
            }
        })
            .then(res => {
                console.log("RESPONSE handleSentPair:", res);

            })
            .catch(error => {
                console.log("ERROR handleSentPair:", error);

            })
    }

    startEventSource() {
        this.eventSource = new EventSourcePolyfill(SERVER + '/pairs/get-pair/' + this.state.pairs, {
            headers: {
                Authorization: "Bearer" + ' ' + this.props.loginUser.token
            }
        });
        this.eventSource.onmessage = e => {
            this.updatePair(JSON.parse(e.data));
        }
    }


    updatePair(pair) {
        if (pair.result){
            this.props.selectRouter(4);
            return;
        }
        this.setState({item1Source: pair.item1, item2Source: pair.item2, pair: pair.pairId});
    }


    render() {

        if (this.state.item1Source === null) {
            return (
                <div>LOADING</div>
            );
        }

        return <div className={"questions-boards"}>
            <img src={this.state.item1Source}
                 alt={"Image1"} onClick={() => this.handleSentPair(1)}/>
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
            <img src={this.state.item2Source}
                 alt={"Image2"} onClick={() => this.handleSentPair(2)}/>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {loginUser: state.loginUser}
};

export default connect(
    mapStateToProps,
    {selectRouter}
)(QuestionComponent);




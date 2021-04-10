import React, {Component} from 'react'
import './App.css';
import Section from './components/Section'
import FeedbackOptions from "./components/Section/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Section/Statistics/Statistics";

export default class App extends Component {


    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }



    goodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good +1,
            }
        })
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
    }

    neutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral +1
            }
        })
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
    }

    badFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad +1
            }
        })
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState((prevState) => {
            return {
                total: prevState.good + prevState.bad + prevState.neutral
            }
        })
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => {
            return {
                positivePercentage: Math.ceil(prevState.good * 100 / prevState.total)
            }
        })
    }



    render() {
       return (
          <>
              <Section title = 'Please leave feedback'>
                  <FeedbackOptions
                      goodFeedback = {this.goodFeedback}
                      neutralFeedback = {this.neutralFeedback}
                      badFeedback = {this.badFeedback}
                  />
              </Section>
              <Section title={'Statistic'}>
                  {!this.state.total ? <p>No feedback given</p> :
                      <Statistics
                      good={this.state.good}
                      neutral={this.state.neutral}
                      bad={this.state.bad}
                      total={this.state.total ? this.state.total : 0}
                      positivePercentage={this.state.positivePercentage ? this.state.positivePercentage : 0}
                  />}
              </Section>
          </>
       )
    }
}
import { Component, ReactNode } from 'react';
import './App.css';
import { Welcome } from './Welcome';

type AppPropType = {
  data?: number
}
interface Person {
  name: string;
  id: number;
  salary: number;
}
type AppStateType = {
  messageData: string,
  counter: number,
  people: Person[]
}

class App extends Component<AppPropType, AppStateType> {
  private count = 0

  constructor(props: Readonly<AppPropType>) {
    super(props)
    console.log('App created')
  }

  state: Readonly<AppStateType> = {
    messageData: 'Welcome to React JS',
    counter: 0,
    people: [{
      name: 'anil',
      id: 2,
      salary: 3000
    }, {
      name: 'sunil',
      id: 1,
      salary: 2000
    }, {
      name: 'joydip',
      id: 3,
      salary: 1000
    }]
  }

  updatePeople = (id: number, propName: string, propvalue: string | number) => {
    const found = this.state.people.find(
      (person) => {
        return person.id === id
      }
    )
    if (found) {
      const updated = {
        ...found,
        [propName]: propvalue
      }
      const index = this.state.people.findIndex(
        (person) => {
          return person.id === id
        }
      )
      const peopleCopy = [...this.state.people]
      peopleCopy.splice(index, 1, updated)

      this.setState({
        people: peopleCopy
      })
    }

    // this.setState({
    //   people
    // })
  }
  updateMessage = (newMessage: string) => {
    this.setState({
      messageData: newMessage
    })
  }
  render(): ReactNode {
    console.log('App rendered. VDOM#' + (++this.count))
    return (
      <div className="App">
        <div>
          <ul>
            {
              this.state.people.map(
                (p) => {
                  return <li onClick={
                    () => {
                      this.updatePeople(p.id, 'salary', 4000)
                    }
                  }>
                    <span>
                      {p.id}:{p.name}:{p.salary}
                    </span>
                  </li>
                }
              )
            }
          </ul>
        </div>
        <div>
          Data: &nbsp; {this.props.data ? this.props.data : 'NA'}
        </div>
        <br />
        <Welcome
          message={this.state.messageData}
          messageHandler={this.updateMessage}
        />
      </div >
    );
  }
}
export default App;
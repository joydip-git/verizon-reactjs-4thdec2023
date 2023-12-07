import { Component, ReactNode } from 'react';
import './App.css';
import Sample from './Sample';

export interface Post {
  userId: number;
  id: number;
  body: string;
  title: string;
}
type AppPropType = {}
type AppStateType = {
  show: boolean,
  value: number,
  name: string,
  posts: Post[],
  errorInfo: string,
  done: boolean,
  selectedId: number
}

class App extends Component<AppPropType, AppStateType> {

  constructor(props: Readonly<AppPropType>) {
    super(props)
    console.log('[App] created')
  }

  state: Readonly<AppStateType> = {
    show: true,
    value: 100,
    name: '',
    posts: [],
    errorInfo: '',
    done: false,
    selectedId: 0
  }
  render(): ReactNode {
    const { show } = this.state
    console.log('[App] rendered')

    let design: any;
    if (!this.state.done) {
      design = <span>loading...</span>
    } else if (this.state.errorInfo !== '') {
      design = <span>{this.state.errorInfo}</span>
    } else if (this.state.posts.length === 0) {
      design = <span>No records</span>
    } else {
      design = (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map(
                  (p) => {
                    return (
                      <tr key={p.id} onClick={
                        () => this.setState({ selectedId: p.id })
                      }>
                        <td>{p.title}</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div className="App" >
        <br />
        <div>
          <label htmlFor="txtName">Name:&nbsp;</label>
          <input type="text" id='txtName' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
        <br />
        <button type='button' onClick={
          () => this.setState((cs) => ({ show: !cs.show }))
        }>
          {
            show ? 'Hide' : 'Show'
          }
        </button>
        <br />
        <button type="button" onClick={
          () => this.setState({ value: 200 })
        }>
          Change Value
        </button>
        <br />
        {
          design
        }
        <br />
        {
          (show && this.state.selectedId > 0) && <Sample data={this.state.value} postId={this.state.selectedId} />
        }
      </div >
    );
  }
  async componentDidMount() {
    console.log('[App] mounted')
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await resp.json()
      this.setState({
        posts: (data as Post[]).slice(0, 5),
        errorInfo: '',
        done: true
      })
    } catch (error: any) {
      this.setState({
        posts: [],
        errorInfo: error.message,
        done: true
      })
    }
  }
}

export default App;

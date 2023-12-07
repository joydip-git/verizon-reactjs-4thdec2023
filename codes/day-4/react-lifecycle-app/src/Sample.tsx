import React, { Component } from 'react'
import { Post } from './App'

type SamplePropType = {
    data: number,
    postId: number
}
type SampleStateType = {
    count: number,
    postData: Post | undefined,
    errorInfo: string,
    done: boolean
}

class Sample extends Component<SamplePropType, SampleStateType> {
    constructor(props: Readonly<SamplePropType>) {
        super(props)
        console.log('[Sample] created')
        console.log(this.props)
    }
    state: Readonly<SampleStateType> = {
        count: 0,
        postData: undefined,
        errorInfo: '',
        done: false
    }
    increaseCount = () => {
        //this.setState({})
        //this.setState({},()=>{})
        //this.setState((cs)=>{return {}})
        this.setState(
            (currentState) => {
                return {
                    count: currentState.count + 1
                }
            },
            () => { console.log('state updat is complete') }
        )
    }
    shouldComponentUpdate(
        nextProps: Readonly<SamplePropType>,
        nextState: Readonly<SampleStateType>,
        nextContext: any): boolean {
        console.log('[Sample] should update?')
        console.log(this.props)
        console.log(nextProps)
        if (this.props.data !== nextProps.data || this.props.postId !== nextProps.postId || this.state.count !== nextState.count || !this.state.postData || this.state.postData.id !== nextState.postData?.id)
            return true
        else
            return false
    }
    render() {
        console.log('[Sample] rendered')

        let design: any;
        if (!this.state.done) {
            design = <span>loading...</span>
        } else if (this.state.errorInfo !== '') {
            design = <span>{this.state.errorInfo}</span>
        } else if (!this.state.postData) {
            design = <span>No record</span>
        } else {
            design = (
                <table>
                    <tr>
                        <td>Post Id:</td>
                        <td>{this.state.postData.id}</td>
                    </tr>
                    <tr>
                        <td>User Id:</td>
                        <td>{this.state.postData.userId}</td>
                    </tr>
                    <tr>
                        <td>Post title:</td>
                        <td>{this.state.postData.title}</td>
                    </tr>
                    <tr>
                        <td>Post Body:</td>
                        <td>{this.state.postData.body}</td>
                    </tr>
                </table>
            )
        }

        return (
            <div>
                Data (from parent):&nbsp; {this.props.data}
                <br />
                Count:&nbsp;{this.state.count}
                <br />
                <button type="button" onClick={this.increaseCount}>Increase</button>
                <br />
                <br />
                {
                    design
                }
            </div>
        )
    }
    getPost = async () => {
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
            const data = await resp.json()
            this.setState({
                postData: data as Post,
                errorInfo: '',
                done: true
            })
        } catch (error: any) {
            this.setState({
                postData: undefined,
                errorInfo: error.message,
                done: true
            })
        }
    }
    componentDidMount(): void {
        console.log('[Sample] mounted')
        this.getPost()
    }
    componentDidUpdate(
        prevProps: Readonly<SamplePropType>,
        prevState: Readonly<SampleStateType>,
        snapshot?: any): void {

        console.log('[Sample] updated')
        console.log(this.props)
        console.log(prevProps)

        if (prevProps.postId !== this.props.postId)
            this.getPost()
    }
    componentWillUnmount(): void {
        console.log('[Sample] destroyed')
    }
}
export default Sample
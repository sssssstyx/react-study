import React, { useEffect } from "react";

class Father extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Son grandRef={this.props.grandRef}/>
            </div>
        )
    }
}
function Son(props) {
    const { grandRef } = props
    useEffect(() => {
        console.log('Son,effect');
    })
    return (
        <div>
            <div>I am alien</div>
            <span ref={grandRef}> 这是个想要的元素 </span>
        </div>
    )
}
// 子组件里拿到 ref
const NewFather = React.forwardRef((props,ref) => <Father grandRef={ref} {...props}/>)

class GrandFather extends React.Component {
    constructor(props) {
        super(props)
    }
    node = null
    componentDidMount() {
        console.log(this.node);
    }
    render() {
        return (
            <div>
                <NewFather ref={(node) => this.node = node }/>
            </div>
        )
    }
}

const App = () => {

    return (
        <>
            <GrandFather />
        </>
    )
}
export default App
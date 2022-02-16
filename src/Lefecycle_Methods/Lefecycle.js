// 1. Mouting - WHen a instance of any class component is being created and inserted into the DOM.

import { render } from "@testing-library/react"


// 2. Updating - when a component is being re-rendered as a result of changes to their states or props
// 3.Unmounting - when a component is being removed from the DOM
// 4. Error Handling - When theres an error during re-rendering in a Lifecycle Method or in the
// constructor of any child component.

1 Mouting-
Constructor
static getDerivedStateFromProps
render
componentDidMount

1.Mounting -

1.1 - Constructor - (initializing state, binding event handlers)
1.2 - static getDerivedStateFromProps - (state depends on changes in props over time)
* THings no to do - api call
1.3 - render() - 
- It is required method pf any class component
- In render we simply read state and props and return the JSX which describes the UI.
* THings no to do - api call, change state, intercation with UI.

1.4 - componentDidMount - 
- THis Method will be called only once.
- This is the perfect place to call API call.
 - Interaction with DOM.


2.Updating -


1.1 - static getDerivedStateFromProps
1.2 - shouldComponentUpdate
1.3 - render()
1.4 - getSnapshotBeforeUpdate
1.5 - ComponentDidUpdate


1.1 - static getDerivedStateFromProps
1.2 - shouldComponentUpdate - Performance Optimization
-   shouldComponentUpdate(nextPorps, nextState)
* THings no to do - api call, setState

1.3 - render()
1.4 - getSnapshotBeforeUpdate(prevProps, prevState)
- calls just before the the virtual DOM reflected
- Use to capture  some info fromthe DOM e.g. read scroll position.
- returns either null or any value. 

1.5 - ComponentDidUpdate(prevProps, prevState, returns either null or any value)
- Make sure , You need to comapre prevProps with nextPorps an dthen make the api call.
* THings no to do - setState, interaction with DOM

3. Unmounting

3.1 ComponenWillUnmount

4. Error Handling
4.1 static getDerivedStateFromError
4.2 ComponentDidCatch


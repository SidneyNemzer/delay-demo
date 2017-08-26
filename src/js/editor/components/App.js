import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AceEditor from 'react-ace'
import { edited } from '../actions'

import 'brace/ext/language_tools'
import 'brace/mode/javascript'

const App = props => {
  let timer
  return (
    <div>
      <h1>Broken (with delay)</h1>
      <AceEditor
        mode="javascript"
        name="editor"
        width="100%"
        height="30vh"
        value={props.content}
        onChange={props.edited}
        highlightActiveLine={false}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        tabSize={2}
        editorProps={{
          $blockScrolling: Infinity
        }}
      />
      <h1>Fixed (modified editor to handle delay)</h1>
      <AceEditor
        mode="javascript"
        name="editor"
        width="100%"
        height="30vh"
        value={props.content}
        onChange={(newValue) => {
          if (timer) {
            clearTimeout(timer)
            timer = undefined
            props.edited(newValue)
          } else {
            timer = setTimeout(() => {
              props.edited(newValue)
            }, 5)
          }
        }}
        highlightActiveLine={false}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        tabSize={2}
        editorProps={{
          $blockScrolling: Infinity
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  content: state
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    edited
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

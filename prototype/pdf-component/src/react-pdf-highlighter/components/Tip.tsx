import { Component } from "react"

import "../style/Tip.css"

interface State {
  compact: boolean
  text: string
  emoji: string
  redactionType: string
}

interface Props {
  onConfirm: (
    comment: { text: string; emoji: string },
    redactionType: string
  ) => void
  onOpen: () => void
  onUpdate?: () => void
}

export class Tip extends Component<Props, State> {
  state: State = {
    compact: true,
    text: "",
    emoji: "",
    redactionType: "",
  }

  // for TipContainer
  componentDidUpdate(nextProps: Props, nextState: State) {
    const { onUpdate } = this.props

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate()
    }
  }

  redactModal = () => {
    return (
      <div
        id="redact-modal"
        role="dialog"
        aria-modal="true"
        className="Tip__card"
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="redaction-types-select">
            Select Redaction Type
          </label>

          <select
            className="govuk-select"
            name="redaction-types"
            id="redaction-types-select"
            onChange={(e) => {
              console.log("e.target.value", e.target.value)
              this.setState({ redactionType: e.target.value })
            }}
          >
            <option value=""> -- Redaction Type -- </option>
            <option value="Address">Address</option>
            <option value="Date of Birth">Date of Birth</option>
            <option value="Named individual">Named individual</option>
          </select>
        </div>
        <button
          disabled={!this.state.redactionType}
          onClick={() => {
            this.props.onConfirm(
              { text: "", emoji: "" },
              this.state.redactionType
            )
          }}
        >
          Redact
        </button>
      </div>
    )
  }

  render() {
    const { onConfirm, onOpen } = this.props
    const { compact, text, emoji } = this.state

    return (
      <div className="Tip">
        {compact ? (
          this.redactModal()
        ) : (
          <form
            className="Tip__card"
            onSubmit={(event) => {
              event.preventDefault()
              onConfirm({ text, emoji }, this.state.redactionType)
            }}
          >
            <div>
              <textarea
                placeholder="Your comment"
                autoFocus
                value={text}
                onChange={(event) =>
                  this.setState({ text: event.target.value })
                }
                ref={(node) => {
                  if (node) {
                    node.focus()
                  }
                }}
              />
              <div>
                {["💩", "😱", "😍", "🔥", "😳", "⚠️"].map((_emoji) => (
                  <label key={_emoji}>
                    <input
                      checked={emoji === _emoji}
                      type="radio"
                      name="emoji"
                      value={_emoji}
                      onChange={(event) =>
                        this.setState({ emoji: event.target.value })
                      }
                    />
                    {_emoji}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <input type="submit" value="Save" />
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default Tip

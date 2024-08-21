import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

const COMPONENT_NAME = 'vscode-checkbox';

@customElement(COMPONENT_NAME)
export class Checkbox extends LitElement {
  static override styles = css`
    :host {
      align-items: center;
      outline: none;
      user-select: none;
      font-size: 12px;
      line-height: normal;
    }
    .control {
      position: relative;
      box-sizing: border-box;
      outline: none;
      cursor: pointer;
    }
    .label {
      color: blue;
      cursor: pointer;
    }
    .label__hidden {
      display: none;
      visibility: hidden;
    }
    .checked-indicator {
      width: 100%;
      height: 100%;
      display: block;
      opacity: 0;
      pointer-events: none;
    }
    .indeterminate-indicator {
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    :host(:enabled) .control:hover {
      background: red;
      border-color: yellow
    }
    :host(:enabled) .control:active {
      background: purple;
      border-color: magenta;
    }
    :host(:focus-visible) .control {
      border: calc(100 * 1px) solid black;
    }
    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.checked:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
      opacity: 1;
    }
    :host(.disabled) {
      opacity: 0;
    }
  `;

  override render() {
    return html`
        <div>
          <input type="checkbox" value="music" />
          <label for="music"><slot></slot></label>
        </div>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [COMPONENT_NAME]: Checkbox;
  }
}

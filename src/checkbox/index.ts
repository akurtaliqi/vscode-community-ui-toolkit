import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

const COMPONENT_NAME = 'vscode-checkbox';

@customElement(COMPONENT_NAME)
export class CheckBox extends LitElement {
  static override styles = css`
    :host {
      border: none;
    }
  `;

  override render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [COMPONENT_NAME]: CheckBox;
  }
}

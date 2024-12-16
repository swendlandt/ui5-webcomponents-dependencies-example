import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

import MySecondComponentTemplate from "./generated/templates/MySecondComponentTemplate.lit.js";

// Styles
import MySecondComponentCss from "./generated/themes/MySecondComponent.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>my-second-component</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "dependencies-example/dist/MySecondComponent.js";</code>
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "my-second-component",
	renderer: litRender,
	styles: MySecondComponentCss,
	template: MySecondComponentTemplate,
	dependencies: [],
})

/**
 * Example custom event.
 * Please keep in mind that all public events should be documented in the API Reference as shown below.
 *
 * @public
 */
@event("interact", { detail: { /* event payload ( optional ) */ } })
class MySecondComponent extends UI5Element {
	/**
	 * Defines the value of the component.
	 *
	 * @default ""
	 * @public
	 */
	@property()
	value?: string;

	/**
	 * Defines the text of the component.
	 *
	 * @public
	 */
	@slot({ type: Node, "default": true })
	text!: Array<Node>;
}

MySecondComponent.define();

export default MySecondComponent;

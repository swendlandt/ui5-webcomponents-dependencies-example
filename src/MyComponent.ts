import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import MyComponentTemplate from "./generated/templates/MyComponentTemplate.lit.js";

// Styles
import MyComponentCss from "./generated/themes/MyComponent.css.js";

import { COUNT } from "./generated/i18n/i18n-defaults.js";
import MySecondComponent from "./MySecondComponent.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>my-component</code> component is a demo component that displays some text.
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "my-component",
	renderer: litRender,
	styles: MyComponentCss,
	template: MyComponentTemplate,
	dependencies: [MySecondComponent],
})
class MyComponent extends UI5Element {
	static i18nBundle: I18nBundle;

	static async onDefine() {
		MyComponent.i18nBundle = await getI18nBundle("dependencies-example");
	}

	/**
	 * Defines the component count.
	 * @default 0
	 * @public
	 */
	@property({ type: Number })
	count = 0;

	onClick() {
		this.count++;
	}

	get counterText() {
		return MyComponent.i18nBundle.getText(COUNT);
	}
}

MyComponent.define();

export default MyComponent;

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Components are reusable building blocks for depicting capabilities defined within models. Learn more at https://docs-meshplay.khulnasoft.com/concepts/components
 */
export interface HttpsSchemasMeshplayComponentJson {
  /**
   * Uniquely identifies the entity (i.e. component) as defined in a declaration (i.e. design).
   */
  id?: string;
  /**
   * Specifies the version of the schema to which the component definition conforms.
   */
  schemaVersion: string;
  /**
   * Version of the component definition.
   */
  version: string;
  /**
   * Name of the component in human-readible format.
   */
  displayName?: string;
  /**
   * A written representation of the purpose and characteristics of the component.
   */
  description?: string;
  /**
   * Format specifies the format used in the `component.schema` field. JSON is the default.
   */
  format?: "JSON" | "CUE";
  model: HttpsSchemasMeshplayModelJson;
  /**
   * Metadata contains additional information associated with the component.
   */
  metadata?: {
    /**
     * Meshplay manages components in accordance with their specific capabilities. This field explicitly identifies those capabilities largely by what actions a given component supports; e.g. metric-scrape, sub-interface, and so on. This field is extensible. ComponentDefinitions may define a broad array of capabilities, which are in-turn dynamically interpretted by Meshplay for full lifecycle management.
     */
    capabilities?: {
      designer?: {
        capabilities?: {
          config?: boolean;
          label?: boolean;
          policy?: boolean;
          relationships?: boolean;
          "json-schema"?: boolean;
          permissions?: boolean;
          workflow?: boolean;
          gitops?: boolean;
          history?: boolean;
          [k: string]: unknown;
        };
        state?: {
          fsm?: {
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        "pass-events-to"?: "parent";
        supportsCompoundDragAndDrop?: boolean;
        edit?: {
          config?: boolean;
          style?: boolean;
          text?: boolean;
          copy?: boolean;
          delete?: boolean;
          duplicate?: boolean;
          "reset-styles"?: boolean;
          resolve?: boolean;
          lock?: boolean;
          shape?: {
            "convert-shape"?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        label?: {
          edit?: boolean;
          "sync-with-config-property"?: string;
          show?: boolean;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      visualizer?: {
        actions?: {
          "perf-test"?: boolean;
          terminal?: boolean;
          "log-streamer"?: boolean;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Contains properties related to visual representation of the component.
     */
    style?: {
      /**
       * Specify the styles
       */
      style?: {
        /**
         * Primary color of the component used for UI representation.
         */
        primaryColor?: string;
        /**
         * Secondary color of the component used for UI representation.
         */
        secondaryColor?: string;
        /**
         * White SVG of the component used for UI representation on dark background.
         */
        svgWhite?: string;
        /**
         * Colored SVG of the component used for UI representation on light background.
         */
        svgColor?: string;
        /**
         * Complete SVG of the component used for UI representation, often inclusive of background.
         */
        svgComplete?: string;
        /**
         * The width of the node’s body or the width of an edge’s line.
         */
        width?: number;
        /**
         * The height of the node’s body
         */
        height?: number;
        /**
         * The shape of the node’s body. Note that each shape fits within the specified width and height, and so you may have to adjust width and height if you desire an equilateral shape (i.e. width !== height for several equilateral shapes)
         */
        shape?:
          | "ellipse"
          | "triangle"
          | "round-triangle"
          | "rectangle"
          | "round-rectangle"
          | "bottom-round-rectangle"
          | "cut-rectangle"
          | "barrel"
          | "rhomboid"
          | "diamond"
          | "round-diamond"
          | "pentagon"
          | "round-pentagon"
          | "hexagon"
          | "round-hexagon"
          | "concave-hexagon"
          | "heptagon"
          | "round-heptagon"
          | "octagon"
          | "round-octagon"
          | "star"
          | "tag"
          | "round-tag"
          | "vee"
          | "polygon";
        /**
         * The colour of the node’s body. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        "background-color"?: string;
        /**
         * Blackens the node’s body for values from 0 to 1; whitens the node’s body for values from 0 to -1.
         */
        "background-blacken"?: number;
        /**
         * The opacity level of the node’s background colour
         */
        "background-opacity"?: number;
        /**
         * The size of the node’s border.
         */
        "border-width"?: number;
        /**
         * The style of the node’s border
         */
        "border-style"?: "solid" | "dotted" | "dashed" | "double";
        /**
         * The colour of the node’s border. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        "border-color"?: string;
        /**
         * The opacity of the node’s border
         */
        "border-opacity"?: number;
        /**
         * The amount of padding around all sides of the node.
         */
        padding?: number;
        /**
         * The opacity of the element. See https://js.cytoscape.org/#style/visibility
         */
        opacity?: number;
        /**
         * An integer value that affects the relative draw order of elements. In general, an element with a higher z-index will be drawn on top of an element with a lower z-index. Note that edges are under nodes despite z-index.
         */
        "z-index"?: number;
        /**
         * The text to display for an element’s label. Can give a path, e.g. data(id) will label with the elements id
         */
        label?: string;
        /**
         * The color of the element's label. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        color?: string;
        /**
         * The opacity of the label text, including its outline.
         */
        "text-opacity"?: number;
        /**
         * A comma-separated list of font names to use on the label text.
         */
        "font-family"?: string;
        /**
         * The size of the label text.
         */
        "font-size"?: string;
        /**
         * A CSS font style to be applied to the label text.
         */
        "font-style"?: string;
        /**
         * A CSS font weight to be applied to the label text.
         */
        "font-weight"?: string;
        /**
         * A transformation to apply to the label text
         */
        "text-transform"?: "none" | "uppercase" | "lowercase";
        /**
         * The horizontal alignment of a node’s label
         */
        "text-halign"?: "left" | "center" | "right";
        /**
         * The vertical alignment of a node’s label
         */
        "text-valign"?: "top" | "center" | "bottom";
        /**
         * Whether to use the ghost effect, a semitransparent duplicate of the element drawn at an offset.
         */
        ghost?: "yes" | "no";
        /**
         * The colour of the indicator shown when the background is grabbed by the user. Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        "active-bg-color"?: string;
        /**
         *  The opacity of the active background indicator. Selector needs to be *core*.
         */
        "active-bg-opacity"?: string;
        /**
         *  The opacity of the active background indicator. Selector needs to be *core*.
         */
        "active-bg-size"?: string;
        /**
         * The background colour of the selection box used for drag selection. Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        "selection-box-color"?: string;
        /**
         * The size of the border on the selection box. Selector needs to be *core*
         */
        "selection-box-border-width"?: number;
        /**
         * The opacity of the selection box.  Selector needs to be *core*
         */
        "selection-box-opacity"?: number;
        /**
         * The colour of the area outside the viewport texture when initOptions.textureOnViewport === true.  Selector needs to be *core*. Colours may be specified by name (e.g. red), hex (e.g. #ff0000 or #f00), RGB (e.g. rgb(255, 0, 0)), or HSL (e.g. hsl(0, 100%, 50%)).
         */
        "outside-texture-bg-color"?: string;
        /**
         * The opacity of the area outside the viewport texture. Selector needs to be *core*
         */
        "outside-texture-bg-opacity"?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Genealogy represents the various representational states of the component.
     */
    genealogy?: string;
    /**
     * Identifies whether the component is semantically meaningful or not; identifies whether the component should be treated as deployable entity or is for purposes of logical representation.
     */
    isAnnotation?: boolean;
    /**
     * 'published' controls whether the component should be registered in Meshplay Registry. When the same 'published' property in Models, is set to 'false', the Model property takes precedence with all Entities in the Model not being registered.
     */
    published?: boolean;
    [k: string]: unknown;
  };
  configuration?: {
    [k: string]: string;
  };
  /**
   * Component and it's properties.
   */
  component: {
    /**
     * Version of the component produced by the registrant. Example: APIVersion of a Kubernetes Pod.
     */
    version: string;
    /**
     * The unique identifier (name) assigned by the registrant to this component. Example: A Kubernetes Pod is of kind 'Pod'.
     */
    kind: string;
    /**
     * JSON schema of the object as defined by the registrant.
     */
    schema: string;
    [k: string]: unknown;
  };
}
/**
 * Reference to the specific registered model to which the component belongs and from which model version, category, and other properties may be referenced. Learn more at https://docs-meshplay.khulnasoft.com/concepts/models
 */
export interface HttpsSchemasMeshplayModelJson {
  /**
   * Specifies the version of the schema used for the definition.
   */
  schemaVersion?: string;
  /**
   * Version of the model definition.
   */
  version: string;
  /**
   * The unique name for the model within the scope of a registrant.
   */
  name: string;
  /**
   * Human-readable name for the model.
   */
  displayName?: string;
  /**
   * Description of the model.
   */
  description?: string;
  /**
   * Status of model, including:
   * - duplicate: this component is a duplicate of another. The component that is to be the canonical reference and that is duplicated by other components should not be assigned the 'duplicate' status.
   * - maintenance: model is unavailable for a period of time.
   * - enabled: model is available for use for all users of this Meshplay Server.
   * - ignored: model is unavailable for use for all users of this Meshplay Server.
   */
  status?: "ignored" | "enabled" | "duplicate";
  registrant: {
    [k: string]: unknown;
  };
  /**
   * Category of the model.
   */
  category: string;
  /**
   * Sub-category of the model.
   */
  subCategory?: string;
  /**
   * Metadata containing additional information associated with the model.
   */
  metadata?: {
    /**
     * Indicates whether the model and its entities should be treated as deployable entities or as logical representations.
     */
    isAnnotation?: boolean;
    /**
     * Primary color associated with the model.
     */
    primaryColor?: string;
    /**
     * Secondary color associated with the model.
     */
    secondaryColor?: string;
    /**
     * SVG representation of the model in white color.
     */
    svgWhite?: string;
    /**
     * SVG representation of the model in colored format.
     */
    svgColor?: string;
    /**
     * SVG representation of the complete model.
     */
    svgComplete?: string;
    [k: string]: unknown;
  };
  /**
   * Registrant-defined data associated with the model. Properties pertain to the software being managed (e.g. Kubernetes v1.31)
   */
  model?: {
    /**
     * Version of the model as defined by the registrant.
     */
    version: string;
    [k: string]: unknown;
  };
}

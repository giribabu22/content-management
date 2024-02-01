import type { Schema, Attribute } from '@strapi/strapi';

export interface OOptions extends Schema.Component {
  collectionName: 'components_o_options';
  info: {
    displayName: 'options';
    icon: 'bulletList';
  };
  attributes: {
    options: Attribute.String;
    correct: Attribute.Boolean;
  };
}

export interface OptionsOption extends Schema.Component {
  collectionName: 'components_options_options';
  info: {
    displayName: 'option';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'o.options': OOptions;
      'options.option': OptionsOption;
    }
  }
}

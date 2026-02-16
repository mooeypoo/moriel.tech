module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'selector-class-pattern': null,
    'rule-empty-line-before': null,
    'property-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'font-family-name-quotes': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    'shorthand-property-no-redundant-values': null,
    'function-no-unknown': null,
    'media-feature-range-notation': null,
    'keyframe-block-no-duplicate-selectors': null,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'no-invalid-double-slash-comments': null,
      },
    },
  ],
}

import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiContainer',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('ui', 'container')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};

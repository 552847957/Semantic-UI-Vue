import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiListItem',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="item" role="listitem">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiList',
  },
};

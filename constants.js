module.exports = {
  width: w => ({
    prop: 'width',
    value: `${w}px`,
  }),
  marginL: {
    prop: 'margin-left',
    value: 'auto',
    important: true,
  },
  marginR: {
    prop: 'margin-right',
    value: 'auto',
    important: true,
  },
  left: {
    prop: 'left',
    value: '0',
    important: true,
  },
  right: {
    prop: 'right',
    value: '0',
    important: true,
  },
  maxWidth: w => ({
    prop: 'max-width',
    value: `${w}px`,
    important: true,
  }),
  minFullHeight: {
    prop: 'min-height',
    value: '100vh',
  },
  autoHeight: {
    prop: 'height',
    value: 'auto',
    important: true,
  },
  borderL: c => ({
    prop: 'border-left',
    value: `1px solid ${c}`,
  }),
  borderR: c => ({
    prop: 'border-right',
    value: `1px solid ${c}`,
  }),
  contentBox: {
    prop: 'box-sizing',
    value: 'content-box',
  }
}
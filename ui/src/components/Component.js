import { QBadge } from 'quasar'

export default {
  name: 'QGoogleMap',

  render (h) {
    return h(QBadge, {
      staticClass: 'QGoogleMap',
      props: {
        label: 'QGoogleMap'
      }
    })
  }
}

import { h, defineComponent, inject } from 'vue'
import { NScrollbar } from '../../_internal'
import { notificationProviderInjectionKey } from './NotificationProvider'

export default defineComponent({
  name: 'NotificationContainer',
  props: {
    scrollable: {
      type: Boolean,
      required: true
    }
  },
  setup () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { mergedThemeRef, mergedClsPrefixRef, placement } = inject(
      notificationProviderInjectionKey
    )!
    console.log('container', placement)
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      placement
    }
  },
  render () {
    const { $slots, scrollable, mergedClsPrefix, mergedTheme, placement } = this
    return (
      <div
        class={[
          `${mergedClsPrefix}-notification-container`,
          `${mergedClsPrefix}-notification-container--${placement}`,
          scrollable && `${mergedClsPrefix}-notification-container--scrollable`
        ]}
      >
        {scrollable ? (
          <NScrollbar
            theme={mergedTheme.peers.Scrollbar}
            themeOverrides={mergedTheme.peerOverrides.Scrollbar}
          >
            {$slots}
          </NScrollbar>
        ) : (
          $slots
        )}
      </div>
    )
  }
})

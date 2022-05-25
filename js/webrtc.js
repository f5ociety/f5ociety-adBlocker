let Enabled = false;

isWebRTC(Enabled);

/**
 * @param {boolean=} enable
 */

function isWebRTC(enable = true) {
  browser.privacy.network.peerConnectionEnabled.set({ value: enable });
  browser.privacy.network.webRTCIPHandlingPolicy.set(
    { value: enable ? 'default' : 'disable_non_proxied_udp' });
  }
  
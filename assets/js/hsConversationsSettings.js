window.hsConversationsSettings = {
  loadImmediately: false,
  inlineEmbedSelector: '#some-id',
  enableWidgetCookieBanner: true,
  disableAttachment: true
};
window.hsConversationsOnReady = [
  () => {
    window.HubSpotConversations.widget.load();
  },
];

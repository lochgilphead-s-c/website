exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has just been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};

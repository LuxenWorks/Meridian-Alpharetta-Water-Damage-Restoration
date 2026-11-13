(function () {
  var m = document.querySelector('.tm-mn');
  if (!m) return;
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && m.open) { m.open = false; m.querySelector('summary').focus(); }
  });
  document.addEventListener('click', function (ev) {
    if (m.open && !m.contains(ev.target)) m.open = false;
  });
})();

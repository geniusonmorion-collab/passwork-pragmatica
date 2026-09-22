/* Local-only transport/navigation adapter. Original UI and motion run unmodified. */
(() => {
  const local = u => {
    try { return new URL(u, location.href).origin === location.origin; }
    catch { return true; }
  };
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
    if (!local(url) || /\/monitoring\b/.test(url)) {
      return Promise.resolve(new Response(null, {status: 204}));
    }
    return originalFetch(input, init);
  };
  navigator.sendBeacon = () => false;
  const xhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    return xhrOpen.call(this, !local(url) ? 'GET' : method, !local(url) ? '/__services/disabled' : url, ...rest);
  };
  const append = Node.prototype.appendChild;
  const insert = Node.prototype.insertBefore;
  const skip = n => n?.nodeType === 1 && ((/^(SCRIPT|IFRAME)$/.test(n.tagName) && n.src && !local(n.src)) || (n.tagName === 'LINK' && /^(preload|modulepreload|preconnect|dns-prefetch)$/.test(n.rel) && n.href && !local(n.href)));
  Node.prototype.appendChild = function(n) { return skip(n) ? n : append.call(this, n); };
  Node.prototype.insertBefore = function(n, ref) { return skip(n) ? n : insert.call(this, n, ref); };

  function notice() {
    let dialog = document.getElementById('local-preview-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'local-preview-dialog';
      dialog.style.cssText = 'position:fixed;inset:0;margin:auto;max-width:440px;width:calc(100% - 40px);padding:28px;border:1px solid #d9dde3;border-radius:16px;background:white;color:#202124;box-shadow:0 20px 80px #0003;font:15px/1.5 system-ui;z-index:2147483647';
      dialog.innerHTML = '<h2 style="font-size:22px;margin:0 0 12px">Локальное демо</h2><p>Форма показана для изучения интерфейса. Заявка не отправлена, введённые данные не сохраняются.</p><button autofocus style="margin-top:20px;padding:10px 20px;border:0;border-radius:10px;background:#202124;color:white;cursor:pointer">Понятно</button>';
      dialog.querySelector('button').onclick = () => dialog.close();
      document.body.appendChild(dialog);
    }
    dialog.showModal();
  }
  document.addEventListener('submit', e => { e.preventDefault(); e.stopImmediatePropagation(); notice(); }, true);
  document.addEventListener('click', e => {
    const a = e.target.closest?.('a[href]');
    if (!a || e.button !== 0) return;
    const url = new URL(a.href, location.href);
    if (url.origin === location.origin && (url.pathname === '/' || url.pathname === location.pathname)) return;
    if (url.origin === location.origin && /^\/(report|gallery|readme|mechanics)\.html$/.test(url.pathname)) return;
    if (!/^https?:$/.test(url.protocol)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (url.origin === location.origin) url.host = 'attio.com', url.protocol = 'https:';
    window.open(url.href, '_blank', 'noopener,noreferrer');
  }, true);
})();

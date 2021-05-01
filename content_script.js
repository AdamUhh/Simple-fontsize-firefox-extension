let style = document.createElement('style');
document.body.appendChild(style);

browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'value' in changes) {
        update(changes.value.newValue);
    }
});

function update(value) {
    style.innerText = `p { font-size: ${value}px} !important`;
}

browser.storage.local.get('value').then((result) => update(result.value));
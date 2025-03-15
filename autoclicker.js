if (
    typeof Game !== 'object' ||
    Game === null ||
    !Array.isArray(Game.shimmers)
) {
    console.error(
        '[AUTOCLICKER]: Cookie Clicker API is not ready or invalid.\n' +
            'Please make sure you are running this script on a Cookie Clicker webpage, ' +
            'and the page is fully loaded.'
    );
} else if (typeof Proxy !== 'function') {
    console.error('[AUTOCLICKER]: JavaScript Proxy API is not available');
} else {
    const node = document.createElement('div');
    const wrapper = document.getElementById('topBar');
    wrapper.appendChild(node);
    node.innerHTML =
        '<input type="checkbox" name="autoclick" onclick="autoclick()" id="autoclickSwitch"><label for="autoclick">Autoclick Cookie</label>';
}
let interval = null;

function autoclick() {
    const box = document.getElementById('autoclickSwitch');
    if (box.checked) {
        if (interval === null) {
            interval = createAutoClick();
        }
    } else {
        clearInterval(interval);
        interval = null;
    }
}

function createAutoClick() {
    return setInterval(() => {
        Game.ClickCookie();
    }, 1);
}
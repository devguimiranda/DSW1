let c1 = null, c2 = null, teste = false, variavel = 0;

const resetar = () => { [c1, c2, teste] = [null, null, false]; };

const unflip = () => setTimeout(() => { c1.classList.remove('flip'); c2.classList.remove('flip'); resetar(); }, 1000);

const disable = () => {
    variavel++;
    c1.onclick = null;
    c2.onclick = null;
    resetar();
    if (variavel === 3) setTimeout(() => alert('Fim'), 500);
};

const check = () => (c1.dataset.name === c2.dataset.name) ? disable() : unflip();

function flip(card) {
    if (teste || card === c1 || card.classList.contains('flip')) return;
    card.classList.add('flip');

    if (!c1) {
        c1 = card;
        return;
    }

    c2 = card;
    teste = true;
    check();
}
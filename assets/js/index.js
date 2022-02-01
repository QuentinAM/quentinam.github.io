function go_to_page(page, timeout)
{
    let principal_text = document.querySelector('.focus-in-expand-fwd');
    let second_text = document.querySelector('.focus-in-expand-fwd-bis');

    principal_text.classList.add('blur-out-contract-bck');
    second_text.classList.add('blur-out-contract-bck');

    setTimeout(() => {
        principal_text.classList.remove('blur-out-contract-bck');
        second_text.classList.remove('blur-out-contract-bck');
        window.open(page, "_self");
    }, timeout);
}

setTimeout(() => {
    let button = document.querySelector('.second-btn');
    button.classList.remove('hidden');
    button.classList.add('bounce-top');
}, 200);
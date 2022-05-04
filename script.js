const container = document.getElementById('container')


window.addEventListener('keydown' , (e) => {
    console.log(e);
    container.innerHTML = `
    <div class="key">
           ${e.key}
            <small>event.key</small>
        </div>
        <div class="key">
         ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
        ${e.code}
            <small>event.Code</small>
        </div>
    `
})